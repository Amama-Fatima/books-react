import React from 'react';

import {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';


const URL = 'https://openlibrary.org/search.json?title='
const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('the lost world');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState('');
    const fetchBooks = useCallback (async () => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            
            const {docs} = data;


            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle)=>{
                    const {key, author_name, cover_i, first_publish_year, title, edition_count} = bookSingle;

                    return {
                        id: key,
                        author: author_name ? author_name[0] : 'unknown',
                        cover_id: cover_i ? cover_i : null,
                        edition_count: edition_count ? edition_count : 0,
                        first_publish_year: first_publish_year ? first_publish_year : 'unknown',
                        title: title ? title : 'unknown',
                    }
                })

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle('Your Search Results');
                } else {
                    setResultTitle('No Results Found');
                }

                
            } else{
                setBooks([]);
                setResultTitle('No Results Found');
            }

            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{loading, books, setSearchTerm, setResultTitle, resultTitle}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};