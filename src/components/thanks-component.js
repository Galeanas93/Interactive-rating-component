import thanks from "../images/thank.svg";




const ThankYou = ({items,setIsSubmitted}) => {
  return (
    
    
    
    <div className="container rounded-2xl p-5  bg-gradient-to-br from-darkBlue to-veryDarkBlue flex justify-center items-center flex-col">
    
      <img src={thanks} alt="thanks" className="flex justify-center items-center mb-5"/>
      <p className="text-orange text-sm px-4 pt-1 rounded-full bg-gray">You selected {items} out of 5</p>
    <h2 className="text-white text-3xl my-6">Thank You!</h2>
    <p className="text-center text-lightGrey mb-10">  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  <button onClick={() => {
    setIsSubmitted(false);
  }} className="bg-orange w-full text-white uppercase 
   pb-2 pt-3 rounded-full hover:bg-white hover:text-orange ease-in-out duration-300">Return</button>
    </div>
    

  )
}

export default ThankYou;