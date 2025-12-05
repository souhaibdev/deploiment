import RecipeDetails from "./RecipeDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RecipeItem5(props){

    const [show,setShow] = useState(false)
    const navigate = useNavigate();


    const [favorite,setFavorite] = useState(true)

    function favoriter(){
        props.favorite()
        setFavorite(!favorite)
    }

    function shows(){
        navigate("/RecipeDetails", {
  state: { rece: props.Itemrecettes, favorite: favorite }
});

        setShow(!show)
    }

    

    const immg={
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px"
}
    const carde={
    width: "320px", 
    padding: "15px",
    margin: "30px",
    marginTop:"5px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial"
}

    const btn = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#f0f0f0",
    transition: "0.3s",
    marginRight:"20px"
  };

  const btn1 = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color:"#2a1c78ff",
    background: "#abbefd40",
    transition: "0.3s",
    textDecoration:"none",
  };

    

    return(
        <>
        <div style={carde}>
            <img src={props.img} alt="recipe" style={immg}/>
            <button style={{fontSize:"30px",marginTop:"0px",background:"white",border:"none"}}
             onClick={favoriter}>{favorite ? "☆" : "★"}</button>
            <h1>{props.nom}</h1>
            <div style={{display:"flex",gap:"200px"}}>
            <p>{props.categorie}</p>
            </div>
            <button style={btn} onClick={shows}>Voir details</button>
            <a href={props.source} style={btn1}>Source</a>
        </div>
        
        
        </>
    )
}
export default RecipeItem5;