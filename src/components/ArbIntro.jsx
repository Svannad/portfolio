

export default function ArbIntro (props) {
    return(
        <>
        <img src={props.img} className="arb-img"/>
        <p>
          {props.text}  
        </p>
        </>
    )
}