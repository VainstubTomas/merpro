import { Card, CardContent, Button, colors } from "@mui/material"
import producto1 from "../../assets/productoA.jpg"
import producto2 from "../../assets/productoB.jpg"
import producto3 from "../../assets/productoC.jpg"
import "./Productssection.css"

export default function Productssection(){
    return(
        <>
            <div className="mainContainerProducts">
                <h1 className="productsTitle">Productos</h1>
                <div className="showProducts">
                    <Card
                        sx={{ 
                            width: '400px', 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center'
                        }}
                    >
                        <CardContent>
                            <img src={producto1} alt="producto del catalogo" loading="lazy" className="productCardImg"/>
                            <h2>Alerón estantería</h2>
                            <p className="moreInfoTxt">Más información dentro del catalogo</p>
                            <Button variant="contained" style={{backgroundColor:'black', color:'white', width:'140px'}}>Ver catalogo</Button>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{ 
                            width: '400px', 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center'
                        }}
                    >
                        <CardContent>
                            <img src={producto2} alt="producto del catalogo" loading="lazy" className="productCardImg"/>
                            <h2>Alerón estantería</h2>
                            <p className="moreInfoTxt">Más información dentro del catalogo</p>
                            <Button variant="contained" style={{backgroundColor:'black', color:'white', width:'140px'}}>Ver catalogo</Button>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{ 
                            width: '400px', 
                            minWidth: '60px', 
                            maxWidth: '400px', 
                            margin: '20px', 
                            textAlign: 'center'
                        }}
                    >
                        <CardContent>
                            <img src={producto3} alt="producto del catalogo" loading="lazy" className="productCardImg"/>
                            <h2>Alerón estantería</h2>
                            <p className="moreInfoTxt">Más información dentro del catalogo</p>
                            <Button variant="contained" style={{backgroundColor:'black', color:'white', width:'140px'}}>Ver catalogo</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}