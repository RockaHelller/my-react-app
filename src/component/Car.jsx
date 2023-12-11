import "../Style/Car.css";

function Car(props) {
    const { img, model, details, price } = props;

    return (
        <div className="car-info">
            <h3>{model}</h3>
            <img src={img} alt="Car Image" />
            <p>{price}</p>
            <h6>{details}</h6>
        </div>
    );
}

export default Car;
