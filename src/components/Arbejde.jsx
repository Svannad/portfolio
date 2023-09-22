import { NavLink } from "react-router-dom";
import ArbIntro from "./ArbIntro";
import Projekt from '../img/projekt-ov.png'
import Tekn from '../img-gallery/tekn1.png'
import Tabor from '../img-gallery/ung6.png'

export default function Arbejde () {
    return (
        <div className="arb">
            <h1>Mit Arbejde</h1>
            <div className="arb-wrap">
                <section className="arb-sec">
                    <h2>Projekter</h2>
                    <ArbIntro img={Projekt} text="Her finder I en liste over de forskellige projekter, som jeg har været involveret i, mens jeg studerede som multimediadesigner."/>
                    <NavLink to="/projekter" className="btn">Se Mere</NavLink>
                </section>
                <section className="arb-sec">
                    <h2>Tabor Ungdóm</h2>
                    <ArbIntro img={Tabor} text="I løbet af tre års ansættelse hos Tabor Ungdóm har jeg haft ansvaret for udarbejdelsen af samtlige sociale medie-opslag og plakater."/>
                    <NavLink to="/tabor" className="btn">Se Mere</NavLink>
                </section>
                <section className="arb-sec">
                    <h2>Illustrationer</h2>
                    <ArbIntro img={Tekn} text="I min fritid dyrker jeg kreativiteten ved at engagere mig i tegning og skabelse af digitale illustrationer. Her er en samling af mine tegninger."/>
                    <NavLink to="/illustrationer" className="btn">Se Mere</NavLink>
                </section>
            </div>
        </div>
        
    )
}