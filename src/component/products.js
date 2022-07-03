import data from "../data";



const Product=()=>{
    return <div>
    
        {data.map((pro)=>{
            return <div key={pro.id} className="pro">
                
                <img src={pro.url}/>
                <button onClick={()=>{console.log(pro.price)}}>Buy Now</button>

            </div>
        })}
    </div>

}

export default Product;