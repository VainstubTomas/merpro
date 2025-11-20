import Header from "./header/header"
import HorizontalScroll from "./horizontalScroll/horizontalScroll"
import Contacto from "./contact/contact"
import Catalog from "./catalog/catalog"
import Brands from "./brands/brands"
// import Productssection from "./productsSection/productsSection"
import Appbar from "../components/appBar"
import Mercadolibre from "./mercadoLibreSpace/mercadoLibre"
import Footer from "../components/footer/footer"
import WhatsappButton from "../components/whatsappButton/wppButton"
import SubAppBar from "../components/subAppBar/subAppBar"
import Reels from "./reelsSection/reelsSection"

export default function HomePage() {

  return (
    <>
        <WhatsappButton></WhatsappButton>
        <SubAppBar></SubAppBar>
        <Appbar></Appbar>
        <Header></Header>
        <HorizontalScroll></HorizontalScroll>
        <Catalog></Catalog>
        <Contacto></Contacto>
        {/* <Productssection></Productssection> */}
        <Brands></Brands>
        <Reels></Reels>
        {/* <Mercadolibre></Mercadolibre> */}
        <Footer></Footer>
    </>
  )
}