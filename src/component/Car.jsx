import "../Style/Car.css";

function Car({props}) {
    return (
        <div className="car-info">
            <h3>{props.model}</h3>
            <img src={props.img} alt="Car Image" />
            <p>{props.price}</p>
            <h6>{props.details}</h6>
        </div>
    );
}

export default Car;
