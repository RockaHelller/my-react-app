import Car from "./Car";
import Cars from "../cars.js"
import "../Style/Main.css"


function createCarComp(car) {
    return (
        <div className="col-4" key={car.id}>
            <Car
                id={car.id}
                model={car.model}
                img={car.img}
                price={car.price}
                details={car.details}
            />
        </div>
    );
}

function Main() {
    const cars = Cars.cars;
    return (
        <div>
            {" "}
            <ol className="big_text">
                <li>SUV</li>
                <li>Sport Car</li>
                <li>Sport Sedan</li>
            </ol>{" "}
            <div className="row">
                {
                    cars.map((car) => car.img && createCarComp(car))
                }
            </div>
        </div>
    );
}

export default Main;

