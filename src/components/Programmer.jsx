export default function Programmer (props) {
    return (
        <div className="prog-wrap">
            <img src={props.img} className="prog-icon"/>
            <h4> 
                {props.titel}
            </h4>
        </div>
    )
}