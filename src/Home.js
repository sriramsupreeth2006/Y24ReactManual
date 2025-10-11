import { useState } from "react";
const Home = () => {
const [name,setName]=useState('Sriram');
const [age,setAge]=useState('18');
const handleClick = () => {
console.log("Hello Everyone, Welcome");
setAge('21');
setName("Mahati");
}
return (
<div className="home">
<h2> Home Page</h2>
<p> Name: {name}, Age: {age} </p>
<button onClick={handleClick}>Click
me</button>
</div>
);
}
export default Home;