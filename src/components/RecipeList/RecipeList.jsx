import React from 'react';
import { RecipeCard } from '../RecipeCard';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBox } from './../SearchBox/SearchBox';

const RECIPES_URL = `http://starlord.hackerearth.com/recipe`;


export function RecipeList() {
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        const saveInLocalStorage = (recipes) => {
            window.localStorage.setItem('recipes', JSON.stringify(recipes));
        }

        const getRecipesFromAPI = async () => {
            const cache = window.localStorage.getItem('recipes');
            if (cache) {
                const result = JSON.parse(cache);
                setRecipes(result);
            } else {
                const response = await window.fetch(RECIPES_URL);
                const result = await response.json();
                setRecipes(result);
                saveInLocalStorage(result);
            }
        }
        void getRecipesFromAPI();
    }, []);

    return (
        recipes.length > 0 ? <Renderer recipes={recipes} /> : null
    )
}

function Renderer(props) {
    const { recipes } = props;
    return (

        <Container>
            <SearchBox />
            <div style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <RecipeCard key={0} recipe={recipes[0]} height={500} color={"black"}></RecipeCard>
                        <div style={{marginTop:"10px"}}></div>
                        <RecipeCard key={4} recipe={recipes[4]} height={400} color={"white"}></RecipeCard>
                    </Col>
                    <Col>
                        <RecipeCard key={1} recipe={recipes[1]} height={400} color={"white"}></RecipeCard>
                        <div style={{marginTop:"10px"}}></div>
                        <RecipeCard key={5} recipe={recipes[5]} height={500} color={"black"}></RecipeCard>
                    </Col>
                    <Col>
                        <RecipeCard key={2} recipe={recipes[2]} height={500} color={"black"}></RecipeCard>
                        <div style={{marginTop:"10px"}}></div>
                        <RecipeCard key={6} recipe={recipes[6]} height={400} color={"white"}></RecipeCard>
                    </Col>
                    <Col>
                        <RecipeCard key={3} recipe={recipes[3]} height={400} color={"white"}></RecipeCard>
                        <div style={{marginTop:"10px"}}></div>
                        <RecipeCard key={7} recipe={recipes[7]} height={500} color={"black"}></RecipeCard>
                    </Col>

                </Row>
            </div>
        </Container>

    )
}
