import React from "react";

const TrafficLight = () => {

const [redOn, setRedOn] = useState (false);
// const [orangeOn, setOrangeOn] = useState (false);
// const [greenOn, setGreenOn] = useState (false);

 const switchRedOn = event => {
     setRedOn(redOn => !redOn);
    
   };

console.log("hola pringao");

return (
<div className="itemAligner">
    <div className="trafficLightFrame">
        <div className={redOn ? 'redOn' : 'redOff'} onClick={() => switchRedOn()}></div>
        {/* <button className={isActive ? 'bg-salmon' : ''} onClick={handleClick}></button> */}
        <div className="orangeOff" onClick={() => encendido()}></div>
        <div className="greenOff" onClick={() => encendido()}></div>
    </div>
    <button className="switchButton">Suck it and see</button>
    {/* <img src="https://www.meme-arsenal.com/memes/cdb809c01916b2f13fd607bdc756f224.jpg" alt="the-real-button" />     */}
</div>

);

}

export default TrafficLight;