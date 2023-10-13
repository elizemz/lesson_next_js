import React, { useState } from "react";

const About = () =>{
     const [count, setCount] = useState(100);

     const add = () =>{
          setCount(count + 10);
     };

     const min = () =>{
          setCount(count - 10);
     };
     

     return (
          <div>
               <h1 className="flex justify-center m-5">about page</h1>
               <div>
                    <h1 className="flex justify-center m-5">Number:‎  ‎ 
                         <span>{count}</span>
                    </h1>
                    <div className="flex justify-center m-5">
                         <button className="border p-3 ml-4 hover:scale-105 hover:bg-green-100" onClick={add}>Plus</button>
                         <button className="border p-3 ml-4 hover:scale-105 hover:bg-red-100" onClick={min}>Minus</button>
                    </div>
               </div>
          </div>
     );
};

export default About;