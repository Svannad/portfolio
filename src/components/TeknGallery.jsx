import React, { useState } from "react";
import '../css/gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Tekn1 from '../img-gallery/tekn1.png'
import Tekn2 from '../img-gallery/tekn2.png'
import Tekn3 from '../img-gallery/tekn3.png'
import Tekn4 from '../img-gallery/tekn4.png'
import Tekn5 from '../img-gallery/tekn5.png'
import Tekn6 from '../img-gallery/tekn6.png'

const TeknGallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Tekn1,
        },
        {
            id: 2,
            imgSrc: Tekn2,
        },
        {
            id: 3,
            imgSrc: Tekn3,
        },
        {
            id: 4,
            imgSrc: Tekn4,
        },
        {
            id: 5,
            imgSrc: Tekn5,
        },
        {
            id: 6,
            imgSrc: Tekn6,
        }
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

export default TeknGallery