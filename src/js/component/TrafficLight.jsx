import React from "react";

const TrafficLight = () => {

// const [encendido, setEncendido] = useState (false);
// setEncendido = () => {
//     console.log("This is apagado right now")
// }

console.log("hola pringao");

return (
<div className="itemAligner">
    <div className="trafficLightFrame">
        <div className="redOff" onClick={() => encendido()}></div>
        <div className="orangeOff" onClick={() => encendido()}></div>
        <div className="greenOff" onClick={() => encendido()}></div>
    </div>
    <button className="switchButton">Suck it and see</button>
    {/* <img src="https://www.meme-arsenal.com/memes/cdb809c01916b2f13fd607bdc756f224.jpg" alt="the-real-button" />     */}
</div>

);

}

export default TrafficLight;