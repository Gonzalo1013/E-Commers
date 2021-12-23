import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"



const DetailtContainer = () => {

    const [capitulo, setCapitulo] = useState([])

    useEffect(()=>{
        const episodio = fetch("https://api.jikan.moe/v3/search/anime?q=Naruto")
            episodio
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.results);
                    setCapitulo(res.results)
                })
                .catch(()=>{
                    console.log("Algo anda mal");
                })
    },[])



    return ( 
        <>
            <ul>
                {capitulo.map((asd)=>
                <li key={asd.mal_id}>
                    <h3>{asd.title}</h3>
                    <img src={asd.image_url} alt="" />
                </li>
                )}
            </ul>
        </>
    )
}

export default DetailtContainer