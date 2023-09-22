import TaborGallery from "../components/TaborGallery"
import '../css/tabor.css'
import Quotes from '../img/quote.png'

export default function Tabor() {
    return (
        <>
            <section className="intro">
                <h1>Tabor Ungdóm</h1>
                <p>
                Nedenfor præsenteres et udvalg af sociale medie-opslag, som jeg har udviklet for Tabor Ungdóm. <br></br>
                Jeg har anvendt følgende softwareprogrammer til at skabe disse indlæg: <br></br>
                Procreate, Adobe Illustrator og Adobe Photoshop
                </p>
            </section>
            <section className="udtalelse">
                <h2>Udtalelse</h2>
                <p>
                    I knapt 3 år har Svanna lavet alt vores SoMe, i forbindelse med alt vores ungdoms arbejde. <br></br>
                    Vi ser stor forskel i hvor langt vi rækker ud til forskellige mennesker, og det har stor betydning for vores arbejde. <br></br>
                    Det gør os mere synlige og forhåbenligt mere attraktive på de sociale medier og derfor også attraktive at komme til vores arrangementer. <br></br>
                    Svanna er pligtopfyldende, flittig og hjælpsom da vi har brug for hende - også da vi ikke altid er i så god tid. <br></br>
                    Reklamerne/plakaterne Svanna har lavet for os, viser altid hendes kreativitet og hun gør sig altid umage at få opslaget og budskabet at passe sammen <br></br>
                    Vi vurderer hendes arbejde for os meget højt, og sætter stor pris på hendes loyalitet og arbejdsflittighed.
                </p>
                <h3>Judith Johannessen, 28 år, Formand for Tabor Ungdóm</h3>
                <img src={Quotes} className="upper"/>
                <img src={Quotes} className="downer"/>
            </section>
            <TaborGallery/>
        </>
    )
}