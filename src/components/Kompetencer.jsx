import Quotes from '../img/quote.png'
import PS from '../img/photoshop.png'
import AI from '../img/illustrator.png'
import XD from '../img/xd.png'
import IN from '../img/indesign.png'
import Code from '../img/vscode.png'
import Figma from '../img/figma.png'
import Rea from '../img/react.png'
import Pro from '../img/procreate.png'
import Web from '../img/laptop.png'
import Light from '../img/brand.png'
import Mal from '../img/tegne.png'
import Programmer from './Programmer'



export default function Kompetencer () {
    return (
        <div className="wrap komp">
            <section className='text'>
                <img src={Quotes} className='h-upper'/>
                <img src={Quotes} className='h-downer'/>
                <h1>Mine Kompetencer</h1>
                <p>
                    Her kan I se en oversigt over mine aktuelle kompetencer. <br></br>
                    Jeg har en stærk evne til at lære hurtigt og er altid åben for at tilegne mig ny viden og færdigheder.
                </p>
                <p className="quote">
                    Det har jeg aldrig prøvet før, <br></br>
                    så det klarer jeg helt <br></br>
                    sikkert!
                </p>
            </section>
            <section className='strenghts'>
                <section className='str-sec'>
                    <h2>Skills</h2>
                    <div className='str-wrap'>
                        <Programmer img={Web} titel="Web Design"/>
                        <Programmer img={Light} titel="Branding"/>
                        <Programmer img={Mal} titel="Digital Illustrationer"/>
                    </div>
                </section>
                <section className='str-sec'>
                    <h2>Adobe</h2>
                    <div className='str-wrap'>
                        <Programmer img={IN} titel="In Design"/>
                        <Programmer img={PS} titel="Photoshop"/>
                        <Programmer img={AI} titel="Illustrator"/>
                        <Programmer img={XD} titel="XD"/>
                    </div>
                </section>
                <section className='str-sec'>
                    <h2>Andet</h2>
                    <div className='str-wrap'>
                        <Programmer img={Code} titel="HTML, CSS, Javascript"/>
                        <Programmer img={Rea} titel="React"/>
                        <Programmer img={Figma} titel="Figma"/>
                        <Programmer img={Pro} titel="Procreate"/>
                    </div>
                </section>
            </section>
        </div>
    )
}