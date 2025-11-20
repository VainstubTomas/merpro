import {Box, Card, CardContent} from "@mui/material"
import igIcon from "../../assets/Instagram.png"
import facebookIcon from "../../assets/Facebook.png"
import linkedinIcon from "../../assets/Linkedin.png"
import tiktokIcon from "../../assets/TikTok.png"
import "./contact.css"

export default function Contacto (){

return (
        <>
            <Box className="container" id="contacto">
                <div className="contactoBloqueA">
                    <h1 className="tituloBloqueA">Contactate con nosotros</h1>
                    <h2 className="subTituloBloqueA">¡Tu consulta no molesta!</h2>
                    <Card id="cardAContact"
                        style={{
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <CardContent>
                            <h2 style={{fontSize:'24px', color:'black'}}>Correo electrónico</h2>
                            <h2 style={{fontSize:'20px', fontWeight:'300', color:'black'}}>ventas@merpro.com.ar</h2>
                            <h2 style={{fontSize:'24px', color:'black'}}>Teléfono</h2>
                            <h2 style={{fontSize:'20px', fontWeight:'300', color:'black'}}>+5493493522047</h2>
                        </CardContent>
                    </Card>
                    <div className="containerBrandsContacts">
                        <div className="brandsContacts">
                            <h3>merpro.ar</h3>
                            <ul>
                                <li><a href="https://www.instagram.com/merpro.ar/" target="_blank"><img src={igIcon} alt="Instagram icon" className="logosRedes"/></a></li>
                                <li><a href="https://www.facebook.com/people/MerPro-Equipamientos/61550575104459/" target="_blank"><img src={facebookIcon} alt="Facebook icon" href="" target="_blank" className="logosRedes"/></a></li> 
                                <li><a href="https://www.tiktok.com/@merpro.ar" target="_blank"><img src={tiktokIcon} alt="TikTok icon" href="" target="_blank" className="logosRedes"/></a></li>
                                <li><a href="https://www.linkedin.com/company/merpro%C2%AE/" target="_blank"><img src={linkedinIcon} alt="Linkedin icon" href="" target="_blank" className="logosRedes"/></a></li> 
                            </ul>  
                        </div>
                        <div className="brandsContacts">
                            <h3>merproracing</h3>
                            <ul>
                                <li><a href="https://www.instagram.com/merproracing/" target="_blank"><img src={igIcon} alt="Instagram icon" href="" target="_blank" className="logosRedes"/></a></li>
                                <li><a href="https://www.facebook.com/people/Merpro-Racing/61578753425380/#" target="_blank"><img src={facebookIcon} alt="Facebook icon" href="" target="_blank" className="logosRedes"/></a></li> 
                            </ul>
                        </div>
                        <div className="brandsContacts">
                            <h3>merprostudio</h3> 
                            <ul>
                            <li><a href="https://www.instagram.com/merprostudio/" target="_blank"><img src={igIcon} alt="Instagram icon" href="" target="_blank" className="logosRedes"/></a></li>
                            <li><a href="https://www.facebook.com/people/MerPro-Studio/61573186733279/#" target="_blank"><img src={facebookIcon} alt="Facebook icon" href="" target="_blank" className="logosRedes"/></a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contactoBloqueB">
                    <Card id="cardBContact"
                        style={{
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                    <CardContent>
                        <h1>Ubicación</h1>
                        <p>Tacural, Santa Fe</p>
                        <iframe  className="iframeMaps" title="Ubicación de MerPro" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.595218785014!2d-61.597942524710916!3d-30.842006368719556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94354336897faa37%3A0x79f7f7dc661921c6!2sMerpro%20Equipamientos!5e0!3m2!1ses!2sar!4v1758026005458!5m2!1ses!2sar" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </CardContent>
                </Card>
                </div>
            </Box>
        </>
      )
}