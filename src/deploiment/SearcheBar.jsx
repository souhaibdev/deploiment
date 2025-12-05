import { useEffect, useState } from "react";
function SearcheBar(props){

    const [categorie,setCategorie] = useState("")
    const [message,setMessage] = useState("")


    const input={
        width:"1000px",
        height:"30px",
        marginLeft:"40px",
    }
 
    const btn ={
        width:"150px",
        height:"36px",
        marginLeft:"20px",
        color:"white",
        backgroundColor:"black",
        border:"none",
        borderRadius :"5px"
    }

    function onCategorie(e){
        setCategorie(e.target.value)
    }

    function Sherche(){
        if(categorie.trim() === ''){
            props.setRecettes(props.allrecettes)
        }
        const filtre = props.allrecettes.filter((rec) => (rec.strCategory.toLowerCase().includes(categorie.toLowerCase())))
        props.setRecettes(filtre)
        alert("Chargement en cours… ")
        
    }

    useEffect(()=>{
        if(categorie.length < 3 && categorie.length > 0){
            setMessage("au moins 3 chaine caractere")
        }
        else{
            setMessage("")
        }
    },[categorie])
    return(
        <div>
            <input type="text" value={categorie} onChange={onCategorie} style={input} placeholder="Recherche..."/>
            <button onClick={Sherche} style={btn}>Recherche</button>
            <p style={{color:"red",marginLeft:"40px",}}>{message}</p>
        </div>
    )
}
export default SearcheBar;