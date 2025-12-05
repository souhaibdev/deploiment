import axios from "axios";
import { useState,useEffect } from "react";
import RecipeItem5 from "./RecipeItem5";
import SearcheBar from "./SearcheBar";
import { useNavigate } from "react-router-dom";

function RecipeList1(){
    const [recettes,setRecettes] = useState([])
    const [allrecettes,setAllRecettes] = useState([])
    const [favorite,setFavorite] = useState([])

        useEffect(() => { const getData = async () => {
            axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=potato").then((reponse) => {
                
                setRecettes(reponse.data.meals)
                setAllRecettes(reponse.data.meals)
            })   
        }
        getData()},[]);
         
        console.log(recettes[0]);
    
    function Favoriter(index){
        const item = recettes[index]
        const filtre = favorite.some((rec) => rec.idMeal === item.idMeal);
        if(filtre){
            setFavorite(favorite.filter((rec) => rec.idMeal !== item.idMeal))
        }
        else{
           setFavorite([...favorite,item]) 
        }  
    } 
    const navigate = useNavigate() 
    
    let b={
        width:"150px",
        height:"36px",
        color:"white",
        backgroundColor:"black",
        border:"none",
        borderRadius :"5px"
    }
    return(
        <div style={{marginTop:"50px"}}>
            <SearcheBar recettes={recettes} setRecettes={setRecettes} allrecettes={allrecettes}/>
            <div>
                <p style={{textAlign:"center"}}>{recettes.length > 0 ? recettes.length : "Aucun resultat"} recettes(s) trouver(s)</p>
                {/* <div style={{display:"flex",gap:"20px"}}>
                    favorite :
                {favorite.map((fav,index) => (<p key={index} style={{marginTop:"0px",background:"yellow"}}>{fav.strMeal} </p>) )}
                </div> */}
            </div>
            <button onClick={()=>navigate("/Favorite",{state : {favorite:favorite}})} style={b}>mes Favorites</button>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
            {recettes.length>0 ? recettes.map((rec,index) => (
                <RecipeItem5
                key={rec.id}
                img={rec.strMealThumb}
                nom={rec.strMeal}
                categorie={rec.strCategory}
                favoirs={false}
                source={rec.strSource}
                Itemrecettes={rec}
                favorite={()=>Favoriter(index)}
                
            />))
            :<p style={{color:"red",borderRadius: "15px",
                background: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                fontFamily: "Arial"}}
                >Aucune recette trouvée pour cette recherche</p> }
            
        </div> 
        </div>
    )
}
export default RecipeList1;