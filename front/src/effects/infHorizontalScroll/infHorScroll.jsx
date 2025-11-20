import logoS from "../../assets/scrollEffectIcons.svg"
import "./infHorScroll.css"

export default function InfHorScroll (){

const logos = [
    logoS
];

    return(
        <div className="mainContainer">
            {[...logos,...logos,...logos,...logos,...logos].map((logo, index) => (
                <ul>
                    <li key={index}>
                        <img src={logo} alt={`Logo ${index + 1}`} style={{height:'25px'}}/>
                    </li>
                </ul>
            ))}
        </div>
    )
}