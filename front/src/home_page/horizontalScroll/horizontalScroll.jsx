import Box from "@mui/material/Box"
import InfHorScroll from "../../effects/infHorizontalScroll/infHorScroll"

export default function HorizontalScroll(){
    return(
        <>
            <Box sx={{backgroundColor:'black', maxWidth:'100%', overflow:'hidden', marginTop:'-10px'}}>
                <InfHorScroll></InfHorScroll>
            </Box>
        </>
    )
}