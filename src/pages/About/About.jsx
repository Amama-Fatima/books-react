import './About.css'
import aboutImg from '../../images/about-img.jpg'
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

      </div>
      <div className="about-content grid">
        <div className="about-img">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="about-text">
          <h2 className="about-title fs-26 ls-1">
            About BookHub
          </h2>
          <p className='fs-17'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ipsam sint? Asperiores, dignissimos vitae deserunt nostrum suscipit, accusantium repellendus distinctio iusto nesciunt dolor quas doloremque ipsum sapiente sequi velit explicabo. Dolor ipsa iure cum asperiores, veritatis ratione mollitia voluptate dicta!
          </p>
          <p className="fs-17">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, sunt. Fugiat nisi veritatis neque possimus, consectetur voluptatibus cum. Atque ab quisquam exercitationem. Architecto ad laudantium quo, eos quam corrupti nihil?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About