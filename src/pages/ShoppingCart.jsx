import BannerShopping from "../components/BannerShopping";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Total from "../components/Total";

function ShoppingCart() {
  return (
    <div>
      <Header />
      <BannerShopping />
      <Total />
      <Footer />
    </div>
  );
}
export default ShoppingCart;
