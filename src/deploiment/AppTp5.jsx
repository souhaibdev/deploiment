import { Routes,Route } from "react-router-dom";
import RecipeList1 from "./RecipeList1";
import Favorite from "./Favorite";
import RecipeDetails from "./RecipeDetails";
function AppTp5(){
    return(
        <div>
                <Routes>
                    <Route path="/"element={<RecipeList1/>} />
                    <Route path="/Favorite" element={<Favorite/>} />
                    <Route path="/RecipeDetails" element={<RecipeDetails/>} />
                </Routes>
        </div>
    )
}
export default AppTp5;