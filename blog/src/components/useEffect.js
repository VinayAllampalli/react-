import { useEffect, useState } from "react";

const UseEffect = () => {
    const[name,setName]=useState("vinay")
    useEffect(()=>{
        console.log("useEffect is running")
        console.log(name)
    },[name])
    
    return (
        <div className="effect">
            <button onClick={()=>setName("vineeth")}>change Name</button>
            <p>{name}</p>
        </div>
      );
}
 
export default UseEffect;
