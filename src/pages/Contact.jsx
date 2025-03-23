import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Contact() {
  return (
    <>
      <Banner
        title={"Liên hệ"}
        des={
          "Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!"
        }
      />
      <ContactForm />
    </>
  );
}
export default Contact;
