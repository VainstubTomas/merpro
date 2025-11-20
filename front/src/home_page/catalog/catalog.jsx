import { Box, Button } from "@mui/material"
import "./catalog.css"

export default function Catalog(){
    return (
        <>
            <Box className="container" id="catalogo">
                <div className="bloqueA">
                    <h1>CATALOGO</h1>
                    <p>Equipamiento para taller</p>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            width: '120px',
                            transition: 'color 0.2s, background-color 0.2s',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#DE5E14',
                            }
                        }}
                        href="https://drive.google.com/file/d/1u2IT9OMeTUZ4U4RMKXSV0f2LRnsEjYmS/view"
                        target="_blank"
                    >
                        VER
                    </Button>
                </div>
                <div className="bloqueB">
                    <div className="bloqueB-1">
                        <h1>CATALOGO</h1>
                        <p>Carros</p>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                width: '120px',
                                transition: 'color 0.2s, background-color 0.2s',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: '#DE5E14',
                                }
                            }}
                            href="https://drive.google.com/file/d/1yLjU0hRuplgI_xw4cklMKdfSe3Kdo-Di/view"
                            target="_blank"
                        >
                            VER
                        </Button>
                    </div>
                    <div className="bloqueB-2">
                        <h1>CATALOGO</h1>
                        <p>Accesorios para camioneta</p>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                width: '120px',
                                transition: 'color 0.2s, background-color 0.2s',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: '#DE5E14',
                                }
                            }}
                            href="https://drive.google.com/file/d/1sgQDlMH3Xem3SXFp6dfWxkG7H8MM-x5C/view"
                            target="_blank"
                        >
                            VER
                        </Button>
                    </div>
                </div>
            </Box>
        </>
    )
}