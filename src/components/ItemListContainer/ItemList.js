import "./ItemListStyle.scss"
import Item from "./Item"


const ItemList = (props) => {

    return(
            <div>
                <ul className="itemList">
                    {props.amount.map((product,index)=>{
                        return <Item key={index} item={product}/>
                    })}
                </ul>
            </div>
        )
}

export default ItemList