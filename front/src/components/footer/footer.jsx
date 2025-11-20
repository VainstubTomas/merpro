import { Box } from '@mui/material'
import LogoMerPro from "../../assets/Merpro/Logos/merproBlanco.png"
import './footer.css'

export default function Footer (){

    const currentYear = new Date().getFullYear();

    return (
        <>
            <Box id='footer'>
                <img src={LogoMerPro} alt="merpro-icon" id="footerImg" loading="lazy"/>
                <p className='footerMarca'>| Copyright © {currentYear}. Todos los derechos reservados | develop by Vainstub Tomás</p>
            </Box>
        </>
      )
}