import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { AppContext } from '../AppContext';

export function RecipeCard(props) {
  const { recipe, height, color } = props;
  const imageHeight = height === 500 ? 300 : 200;
  const history = useHistory();
  const [ highLighted, setHighLighted] = React.useState("");
  const { selected } = React.useContext(AppContext);
  const [isLiked, setIsLiked] = React.useState("/Icons/Icon feather-heart.png");

  const handleClickCb = React.useCallback((event) => {
    event.preventDefault();
    history.push(`/${recipe.id}`);
  }, [history, recipe.id]);

  const handleLikeCb = React.useCallback((event) => {
    console.log(`SS: Here`);
    event.preventDefault();
    if(isLiked === "/Icons/Icon feather-heart.png"){
      setIsLiked("/Icons/Icon feather-heart-color.png")
    } else {
      setIsLiked("/Icons/Icon feather-heart.png");
    }
  }, [isLiked, setIsLiked])

  React.useEffect(() => {
    if(selected.find(elem => {
      return elem == recipe.id;
    } ) || selected[0] === recipe.id ){
      setHighLighted("highlighted")
    } else {
      setHighLighted("");
    }
  }, [selected, recipe.id]);


  return (
    <div className={`card`} style={{ height: `${height}px`}} >
    <div className="cardInternal">
      <div className="imageHolder" onClick={handleClickCb}>
        <img alt="dish" className="image" src={recipe.image} width="275px" height={`${imageHeight}px`} />
      </div>
      <div className="category">
        In {recipe && recipe.category}
      </div>
      <div className={`lower`}>
        <div className={`details`}>
          <div>
            <p className={`dishName ${highLighted}`}>{recipe.name}</p>
            <span>
              <img  alt="clock" src={process.env.PUBLIC_URL + "/Icons/Icon feather-clock.png"} />
            </span>
            <span className="time">24 mins</span>
          </div>
          <div className="likeButton">
            <img onClick={handleLikeCb} alt="heart" src={process.env.PUBLIC_URL + isLiked} />
          </div>
        </div>
        <br />
        <div className="desc">
          <p className="descSpan">Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
            </p>
        </div>
      </div>
    </div>
  </div>
  );
}
