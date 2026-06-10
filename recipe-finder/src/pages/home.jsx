import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../utils/api';
import Recipecard from '../components/Recipecard';
import Recipemodel from '../components/Recipemodel';
import Loader from '../components/Loader';
import Searchbar from '../components/Searchbar';

import "./home.css";

const Home = () => {

    const [chickenRecipes, setChickenRecipes] = useState([]);
    const [soupRecipes, setSoupRecipes] = useState([]);
    const [exploreAll, setExploreAll] = useState([]);

    const [visibleCount, setVisibleCount] = useState(15);

    const [loading, setLoading] = useState(true);

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            const chicken = await fetchRecipes("Chicken");
            setChickenRecipes(chicken.slice(0, 6));

            const soup = await fetchRecipes("Soup");
            setSoupRecipes(soup.slice(0, 6));

            const all = await fetchRecipes("a");
            setExploreAll(all);

            setLoading(false);
        };

        fetchData();

    }, []);

    const showMore = () => {
        setVisibleCount(prev => prev + 8);
    };
    const handleSearch = async (query) => {

        if (!query) return;

        setLoading(true);
        setIsSearching(true);

        const results = await fetchRecipes(query);

        setSearchResults(results);

        setLoading(false);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>

            <div className='home-container'>

                {/* SEARCH BAR */}
                <Searchbar onSearch={handleSearch} />

                {/* SEARCH RESULTS (SAFE ADDITION) */}
                {isSearching && searchResults.length > 0 && (
                    <div className='section'>
                        <h2>Search Results</h2>

                        <div className='recipe-grid'>
                            {searchResults.map((r) => (
                                <Recipecard
                                    key={r.idMeal}
                                    recipe={r}
                                    setSelectedRecipe={setSelectedRecipe}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* ORIGINAL UI (UNCHANGED) */}
                {!isSearching && (

                    <>

                        {/* Chicken Section */}
                        <div className='section'>
                            <h2>Chicken Recipes</h2>

                            <div className='recipe-grid'>
                                {chickenRecipes.map((r) => (
                                    <Recipecard
                                        key={r.idMeal}
                                        recipe={r}
                                        setSelectedRecipe={setSelectedRecipe}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Soup Section */}
                        <div className='section'>
                            <h2>Soups</h2>

                            <div className='recipe-grid'>
                                {soupRecipes.map((r) => (
                                    <Recipecard
                                        key={r.idMeal}
                                        recipe={r}
                                        setSelectedRecipe={setSelectedRecipe}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Explore All */}
                        <div className='section'>
                            <h2>Explore All</h2>

                            <div className='recipe-grid'>
                                {exploreAll
                                    .slice(0, visibleCount)
                                    .map((r) => (
                                        <Recipecard
                                            key={r.idMeal}
                                            recipe={r}
                                            setSelectedRecipe={setSelectedRecipe}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* Show More */}
                        {visibleCount < exploreAll.length && (
                            <button
                                className='load-more'
                                onClick={showMore}
                            >
                                Show More
                            </button>
                        )}

                    </>

                )}

            </div>

            {/* MODAL (UNCHANGED) */}
            {selectedRecipe && (
                <Recipemodel
                    recipe={selectedRecipe}
                    closeModel={() => setSelectedRecipe(null)}
                />
            )}

        </>
    );
};

export default Home;