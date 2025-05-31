import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";
function Category() {
    const {name} = useParams();
    const [meals, setMeal] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeal(data.meals));
    }, [name])

    return (
        <>
        <button className="btn" onClick={goBack}>
            goBack
        </button>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    )
}
export {Category};