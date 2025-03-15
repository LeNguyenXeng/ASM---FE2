import Banner from "../components/Banner";
import Header from "../components/Header";
import "../assets/css/bootstrap.min.css";
import "../assets/css/tiny-slider.css";
import "../assets/css/style.css";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WeHelp from "../components/WeHelp";
import StartTestimonial from "../components/StartTestimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <StartTestimonial />
      <Blog />
      <Footer/>
    </div>
  );
}
export default Home;
