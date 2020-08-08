import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBox } from './../SearchBox/SearchBox';
import "./style.css";


export function RecipePage() {
    console.log(`SS: Rendering RP`);
    const params = useParams();
    const [recipe, setRecipe] = React.useState();
    const history = useHistory();

    React.useEffect(() => {
        const recipes = JSON.parse(window.localStorage.getItem('recipes'));
        setRecipe(recipes[parseInt(params.id, 10)]);
    }, [params])

    const handleClickCb = React.useCallback((event) => {
        event.preventDefault();
        history.push('/')
    })

    return (
        <>
            <Container>
                <SearchBox />
                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ cursor: "pointer" }} onClick={handleClickCb}>Go back</h3>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <video controls width="500" height="240" className="videoFrame" poster={recipe?.image}></video>
                            </div>
                            <br />
                            <div>
                                <h3>Ingredients</h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour,
                                    or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <br />
                            <div>
                                <h3>How to prepare</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="right">
                                <h6 className="grayColor">RECIPE</h6>
                                <h1>{recipe && recipe.name}</h1>
                                <span className="ratings">
                                    <span className="rightMargin">4/5</span>
                                    <img className="rightMargin" src={process.env.PUBLIC_URL + "/Icons/Icon awesome-star.png"} />
                                    <img className="rightMargin" src={process.env.PUBLIC_URL + "/Icons/Icon awesome-star.png"} />
                                    <img className="rightMargin" src={process.env.PUBLIC_URL + "/Icons/Icon awesome-star.png"} />
                                    <img src={process.env.PUBLIC_URL + "/Icons/Icon awesome-star.png"} />
                                </span>
                                <br />
                                <h6 className="grayColor">DESCRIPTION</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="circles">
                                    <div className="circle">
                                            <span className="circleFirst">25</span>
                                            <span>minutes</span>
                                    </div>
                                    <div className="circle">
                                            <span className="circleFirst">220</span>
                                            <span>bucks</span>
                                    </div>
                                    <div className="circle">
                                            <span className="circleFirst">8</span>
                                            <span>ingredients</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )

}
