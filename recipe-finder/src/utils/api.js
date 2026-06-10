export const fetchRecipes = async (query = "") => {

    try {

        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        const data = await res.json();

        return data.meals || [];

    } catch (error) {

        console.log("Error While fetching the Data :", error);

        return [];
    }
}