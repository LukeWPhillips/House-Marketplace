import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

import home_img from "../assets/jpg/home-img.jpg";

function explore() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="explore">
        <div className="home_image_container">
          <img src={home_img} alt="home-image" className="home-image" />
          <p className="text-overlay">
            Welcome to Eco Living <br />
            <br></br>The place to find the best eco-homes on the market right
            now
          </p>
        </div>

        <div className="hero-container">
          <header className="hero-header">Off Grid Living</header>
          <section className="hero-text">
            Are you passionate about off grid living? Eco Living is passionate
            about helping people reduce their impact on the environment. There
            are multiple benefits of living off the grid such as reducing
            monthly costs, flexibility on where you live, harnessing clean
            energy from the sun and wind. Most importantly you are a positive
            role model for others promoting off grid living.
          </section>
        </div>
        <header>
          <p className="pageHeader">Featured</p>
        </header>

        <main>
          <Gallery />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default explore;
