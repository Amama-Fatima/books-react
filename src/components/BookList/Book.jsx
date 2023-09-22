import {Link} from 'react-router-dom'
import './BookList.css'

const Book = ({ id, cover_img, title, author, edition_count, first_publish_year }) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className="book-item-img">
        <img src={cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${id}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{title}</span>
          </div>
        </Link>
        <div className="book-item-info-item author fw-4 fs-15">
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{Array.isArray(author) ? author.join(', ') : author || 'Unknown'}</span>
        </div>

        <div className="book-item-info-item edition-count fw-4 fs-15">
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fw-4 fs-15">
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>

      </div>
    </div>
  )
}

export default Book;


