import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Total from "../components/Total";

function ShoppingCart() {
  return (
    <div>
      <Banner
        title={"Giỏ hàng"}
        des={
          "Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!"
        }
      />
      <Total />
    </div>
  );
}
export default ShoppingCart;
