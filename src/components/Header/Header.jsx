import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            adipisci. Nulla, pariatur, accusantium minus officia ex velit
            similique perferendis adipisci aliquam aperiam beatae saepe odit
            laudantium aspernatur natus maxime tempore?
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
