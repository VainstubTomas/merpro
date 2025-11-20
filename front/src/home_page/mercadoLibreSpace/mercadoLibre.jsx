import bannerTst1 from "../../assets/mercadoLibreBanner.jpg"
import "./mercadoLibre.css"

export default function Mercadolibre(){
    return(
        <>  
            <a href="https://www.mercadolibre.com.ar/pagina/merpro?item_id=MLA1513954349&category_id=MLA431779&seller_id=144776590&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=eshop" target="_blank"><img src={bannerTst1} alt="Banner Mercado Libre" className="bannerTst1" loading="lazy"/></a>
        </>
    )
}