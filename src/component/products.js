import data from "../data";
import { DrawerExample } from "./drawer";

function Product(){
    
    return <div className="grid-container">
    
        {data.map((pro)=>{
            return <div key={pro.id} className="pro">
                
                <img src={pro.url}/>
                <div style={{display:"flex",gap:"50%"}}>
                    <p>{pro.price}</p>
                    <DrawerExample img={pro.url} price={pro.price}/>
                </div>
                
                
                

            </div>
        })}
    </div>

}

export default Product;