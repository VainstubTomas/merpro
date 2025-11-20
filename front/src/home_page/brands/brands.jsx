import {Card, CardContent, Divider} from "@mui/material"
import "./brands.css"

export default function Brands(){
    return(
        <>  
            <div className="mainCont" id="nuestrasMarcas">
                <h1 className="mainH1">Nuestras marcas</h1>
                <div className="gridContent">
                    <Card
                        sx={{ 
                            width: {
                                xs: '90vw',    // para max-width: 600px (mobile)
                                sm: '300px',   // para min-width: 600px
                                md: '350px',   // para min-width: 900px
                                lg: '400px',   // para min-width: 1200px
                            }, 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center',
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s, width 0.2s, height 0.2s',
                            '&:hover': {
                                transform: 'scale(1.06)', // Aproximadamente 2px más grande en 400px
                            }
                        }}
                    >
                        <CardContent className="brandContent">
                            <div className="brandContentContainerA">
                                <h2 style={{fontSize:'35px'}}>Studio</h2>
                            </div>
                            <Divider></Divider>
                            <p>Diseñamos carros y mobiliario funcional para organizar espacios de trabajo, combinando practicidad, durabilidad y un diseño moderno.</p>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{ 
                            width: {
                                xs: '90vw',    // para max-width: 600px (mobile)
                                sm: '300px',   // para min-width: 600px
                                md: '350px',   // para min-width: 900px
                                lg: '400px',   // para min-width: 1200px
                            }, 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center',
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s, width 0.2s, height 0.2s',
                            '&:hover': {
                                transform: 'scale(1.06)', // Aproximadamente 2px más grande en 400px
                            }
                        }}
                    >
                        <CardContent className="brandContent">
                            <div className="brandContentContainerB">
                                <h2 style={{fontSize:'35px'}}>Equipamientos</h2>
                            </div>
                            <Divider></Divider>
                            <p>Fabricamos soluciones robustas y confiables para talleres, orientadas a mejorar la productividad y facilitar el trabajo diario de profesionales.</p>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{ 
                            width: {
                                xs: '90vw',    // para max-width: 600px (mobile)
                                sm: '300px',   // para min-width: 600px
                                md: '350px',   // para min-width: 900px
                                lg: '400px',   // para min-width: 1200px
                            }, 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center',
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s, width 0.2s, height 0.2s',
                            '&:hover': {
                                transform: 'scale(1.06)', // Aproximadamente 2px más grande en 400px
                            } 
                        }}
                    >
                        <CardContent className="brandContent">
                            <div className="brandContentContainerC">
                                <h2 style={{fontSize:'35px'}}>Racing</h2>
                            </div>
                            <Divider></Divider>
                            <p>Desarrollamos separadores y accesorios de alto rendimiento para camionetas, pensados para potenciar estilo, seguridad y personalización.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}