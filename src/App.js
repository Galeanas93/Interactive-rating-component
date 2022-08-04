import star from "./images/star.svg";

import ThankYou from "./components/thanks-component.js";
import {useState} from "react";



function App() {

 const [isSubmitted, setIsSubmitted] = useState(false);
 const [items, setItems] = useState("")



 const Button = ({number}) => {
  return <button onClick={() => {setItems(number) }} id="main-button"className="rounded-full bg-gray h-10 w-10 pt-1 text-white " 
   >
    {number}</button>
}

 

  return (
    <>
    <body className="flex justify-center items-center flex-col font-over font-normal text-[15px] bg-veryDarkBlue h-[100vh]">
   {!isSubmitted &&  <div className="container rounded-2xl p-5  bg-gradient-to-br from-darkBlue to-veryDarkBlue">
      <img src={star} className="rounded-full bg-gray p-2" alt="star"/>
      <h1 className="text-white text-3xl my-6">How did we do?</h1>
      <p className="text-lightGrey mb-10">Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!
</p>
<ul className="grid grid-cols-5 gap-3 place-items-center mb-8 ">
  <li>
    <Button number={1}/>
  </li>
  <li>
    <Button number={2}/>
    </li>
  <li>
    <Button number={3}/>
  </li>
  <li>
    <Button number={4}/>
  </li>
  <li>
    <Button number={5}/>
  </li>
</ul>
<div className="text-center ">
  <button onClick={() => {
    setIsSubmitted(true);
  }} className="bg-orange w-full text-white uppercase 
   pb-2 pt-3 rounded-full hover:bg-white hover:text-orange ease-in-out duration-300">Submit
   </button>
  </div>
  
    </div> }
    
  {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted}/>}
  </body>
  </>

   
  );  
}




export default App

