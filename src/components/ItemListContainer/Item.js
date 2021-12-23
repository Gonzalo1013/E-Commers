import "./itemStyle.scss"


const Item = ({item}) => {
    return (
                <article className="list" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="detail">
                        <h4>{item.title}</h4>
                        <b>{item.price}</b>
                        <button><a href="/public/index.html">Ver Detalle</a></button>
                    </div>
                </article>
    )
}

export default Item