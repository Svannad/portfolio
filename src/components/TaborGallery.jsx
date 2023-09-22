import React, { useState } from "react";
import '../css/gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Ung1 from '../img-gallery/ung1.png'
import Ung2 from '../img-gallery/ung2.png'
import Ung3 from '../img-gallery/ung3.png'
import Ung4 from '../img-gallery/ung4.png'
import Ung5 from '../img-gallery/ung5.png'
import Ung6 from '../img-gallery/ung6.png'
import Ung7 from '../img-gallery/ung7.png'
import Ung8 from '../img-gallery/ung8.png'
import Ung9 from '../img-gallery/ung9.png'

const TaborGallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Ung1,
        },
        {
            id: 2,
            imgSrc: Ung2,
        },
        {
            id: 3,
            imgSrc: Ung3,
        },
        {
            id: 4,
            imgSrc: Ung4,
        },
        {
            id: 5,
            imgSrc: Ung5,
        },
        {
            id: 6,
            imgSrc: Ung6,
        },
        {
            id: 7,
            imgSrc: Ung7,
        },
        {
            id: 8,
            imgSrc: Ung8,
        },
        {
            id: 9,
            imgSrc: Ung9,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc}/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item, index) =>{
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
    
}

export default TaborGallery