import "./ItemListStyle.scss"
import Item from "./Item"


const ItemList = (props) => {
        return(
            <div>
                <ul className="itemList">
                    {props.pedido.map((product,index)=>{
                        return <Item key={index} item={product}/>
                    })}
                </ul>
            </div>
        )
    // return(
    //     <div>
    //         <ul className="itemList">
    //             {props.pedido.map((product)=>
    //             <li className="list" key={product.id}>
    //                 <img src={product.image} alt="" />
    //                 <div className="detail">
    //                     <h4>{product.title}</h4>
    //                     <b>{product.price}</b>
    //                     <button><a href="">Ver Detalle</a></button>
    //                 </div>
    //             </li>)}
    //         </ul>
    //         <Item item={}/>
    //     </div>
    // )
}

export default ItemList