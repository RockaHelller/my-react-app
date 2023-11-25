import Car from "./Car";
import Cars from "../cars.js"
import "../Style/Main.css"

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
                {/* <div className="col-4">
                    <Car Imgsrc="https://www.motortrend.com/uploads/sites/5/2012/07/2013-Porsche-Cayenne-GTS-front-three-quarters-in-motion.JPG.jpg?fit=around%7C875:492" title="Porsche Cayenne GTS" price="137,195$" />
                </div>
                <div className="col-4">
                    <Car Imgsrc="https://cdn.carbuzz.com/gallery-images/900x600-wp/1155000/500/1155596.webp" title="Porsche 911 Brabus Rocket R" price="505,000$" />
                </div>
                <div className="col-4">
                    <Car Imgsrc="https://cdn.motor1.com/images/mgl/Kbbj9Q/s3/g-power-g5m-cs-hurricane-rr-basis-bmw-m5-cs.webp" title="BMW M5 G-Power" price="200,000$" />
                </div> */}
                <div className="row">
                    {
                        cars.map((car, index) => <div className="col-4"><Car props={car} key={index} /></div>)
                    }
                    {/* <div className="col-4">
                        <Car props={Cars.cars[0]} />
                    </div>
                    <div className="col-4">
                        <Car props={Cars.cars[1]} />
                    </div>
                    <div className="col-4">
                        <Car props={Cars.cars[2]} />
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Main;
