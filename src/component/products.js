import data from "../data";

import react from "react";

function Product(){
    return <div className="grid-container">
    
        {data.map((pro)=>{
            return <div key={pro.id} className="pro">
                
                <img src={pro.url}/><br/>
                <button onClick={()=>{console.log(pro.price)}}>Buy Now</button>
                

            </div>
        })}
    </div>

}

export default Product;