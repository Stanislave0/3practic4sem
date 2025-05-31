import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId, {
        method: 'GET',
    });
    return await response.json();
};

const getAllCategories = async () => {
    console.log(API_URL + "categories.php")
    const response = await fetch(API_URL + "categories.php", {
        method: 'GET',
    });
    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + "filter.php?c=" + catName, {
        method: 'GET',
    });
    return await response.json();
};

export {getMealById, getAllCategories, getFilteredCategory};
