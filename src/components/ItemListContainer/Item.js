import "./itemStyle.scss"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
                <article className="list" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="detail">
                        <div className="contentTitle">
                            <h4>{item.title}</h4>
                        </div>
                        <b>{item.price}</b>
                        <Link className="button" to={`/producto/${item.id}`}>Ver Detalle</Link>
                    </div>
                </article>
    )
}

export default Item