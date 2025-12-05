import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function RecipeDetails(props){
    const [show,setShow] = useState(true)
    const navigate = useNavigate();


    // const r = props.rece 

    const location = useLocation();   
    const r = location.state.rece   || []

    if (!r) return <p>Pas de recette sélectionnée</p>;
   
    function shows(){
        setShow(!show)
    }

  

const modalContainer = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  backgroundColor: "#fff",
  borderRadius: "18px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
  padding: "30px",
  overflowY: "auto",
  zIndex: 999,
  display: "flex",
  flexDirection: "column",
  gap: "25px"
};

const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};



const recipeImage = {
  width: "120px",
  height: "120px",
  borderRadius: "12px",
  objectFit: "cover",
};


const closeBtn = {
  backgroundColor: "#d80338ff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop:"-190px",
  color:'white',
};

const content = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop:"-20px",
  gap: "20px",
  textAlign: "left"
};

const sectionTitle = {
  fontSize: "20px",
  marginTop: "20px",
  fontWeight: "700",
  marginLeft:"-770px",
};

const sectionTitle1 = {
  fontSize: "20px",
  marginTop: "-260px",
  fontWeight: "700",
  marginLeft:"400px",
  
};

const listItem = {
  marginBottom: "8px",
  lineHeight: "1.5",
  marginLeft:"550px",
  textAlign: "left", 
};

const videoLink = {
  color: "#b15300ff",
  textDecoration: "none",
  fontWeight: "600",
  marginRight:"705px",
  marginTop:"-20px"
};
const btn = {
  backgroundColor: "#0bc3cdff",
  border: "none",
  color:"white",
  width:"85px",
  padding: "10px 18px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop:"-140px",
  marginLeft:"792px"
};
const btn1 ={
        width:"200px",
        height:"45px",
        marginLeft:"370px",
        color:"white",
        backgroundColor:"black",
        border:"none",
        borderRadius :"5px",
        cursor :"pointer",
        fontSize:"20px"
    }
    return(
        <div>
            {show && (
            <div style={modalContainer}>
              <button  style={btn1} onClick={() => navigate("/")}>back to RecipeList</button> 
            <div style={header}>
            <img src={r.strMealThumb} alt="" style={recipeImage} />
             <button onClick={shows} style={closeBtn}>Fermer</button>
            </div>
            <button onClick={props.fav} style={btn}>favoirs★</button>
            <br />
            <h2 style={sectionTitle}>Insructions</h2>
            <p style={content}>{r.strInstructions}</p>
            <h2 style={sectionTitle1}>Ingredient</h2>
            <ul style={{marginTop:"-23px"}}>
                <li style={listItem}>{r.strIngredient1}--{r.strMeasure1}</li>
                <li style={listItem}>{r.strIngredient2}--{r.strMeasure2}</li>
                <li style={listItem}>{r.strIngredient3}--{r.strMeasure3}</li>
                <li style={listItem}>{r.strIngredient4}--{r.strMeasure4}</li>
                <li style={listItem}>{r.strIngredient5}--{r.strMeasure5}</li>
            </ul>
            <h2 style={{marginRight:"815px"}}>vidio</h2>
            <a href={r.strYoutube} style={videoLink}>Regareder sur Youtube</a>
            </div>
            )}

        </div>
    )
}
export default RecipeDetails;
 