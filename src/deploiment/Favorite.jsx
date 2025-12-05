import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Favorites(){

    const { state } = useLocation();
    const favs = state.favorite || [];
    const navigate = useNavigate();

    const btn = {
        border:"none",
        borderRadius:"10px",
        color:"white",
        backgroundColor:"#1E0F1C",
        padding:"10px",
        paddingRight:"30px",
        paddingLeft:"30px",
        cursor:"pointer"
    }
    return(
        <>
        <div>
            <h2>Mes Favorites</h2>
            <button  style={btn} onClick={() => navigate("/")}>back to RecipeList</button>
            {favs.length === 0 && <p>Aucun favorites</p>}
            <div  style={{ display: "flex", gap: "10px", flexWrap: "wrap" ,marginLeft:"50px"}}>
                {favs.map((meal,index) => (
                    <p
                    key={index}
                    style={{
                        padding: "5px",
                        color: "black",
                        backgroundColor: "yellow",
                        borderRadius: "10px",
                    }}
                    >
                        {meal.strMeal}
                    </p>
                ))}
            </div>
        </div>
        </>
    )
}

 