import Pattern from '../img/bg-pattern.png'
const PDF_FILE_URL = 'https://portfolio.svannad.dk/svanna_dam_cv.pdf'
import Potrait from '../img/potrait.png'

export default function OmMig () {
    
    const downloadFileAtURL=(url)=>{
        fetch(url).then(response => response.blob()).then((blob) => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split('/').pop()
            const aTag = document.createElement('a')
            aTag.href = blobURL
            aTag.setAttribute('download', fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })
    }
    
    return (
        <div className="wrap">
        <section className="intro-text">
            <h2>Multi Media Designer</h2>
            <h1>Svanna Dam</h1>
            <p>
            Hej Jeg er Svanna Dam. Jeg bor i Aarhus, men jeg kommer fra Færøerne. <br></br>
            Jeg har altid elsked at tegne og at være kreativ. Jeg er også en logisk person, så når jeg startede på studiet blev jeg hurtigt intreserret i programmering. <br></br> 
            Jeg startede på multimediedesigneruddannelsen i 2022 og har valgt at gå videre på frontend linjen. <br></br>
            Jeg er nu klar til at bruge mine kompetencer jeg har lært på uddannelsen på et praktikplads. <br></br>
            Det at jeg er multimediedesigner gør at jeg kan lidt af det hele, derfor også tilbyde lidt af hvert. <br></br>
            Nedenfor kan i se eksempler på mit arbejde.
            </p>
            <button onClick={() =>{downloadFileAtURL(PDF_FILE_URL)}} className='btn'>Mit CV</button>
        </section>
        <section className="potrait">
            <div className="img-wrap">
                <img src={Potrait} className='potrait-img'/>
            </div>
            <img src={Pattern} className='bg'/>
        </section>
        </div>
    )
}