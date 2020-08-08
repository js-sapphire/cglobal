import React from 'react';
import { AppContext } from './../../AppContext';

export function SearchBox(){
    const { setSelected } = React.useContext(AppContext);

    const handleChangeCb = React.useCallback((event) => {
        const val = event.target.value.toLowerCase();
        const recipes = JSON.parse(window.localStorage.getItem("recipes"));
        const result = [];
        if(!val){
            setSelected([]);
            return;
        }
        Array.from(recipes).forEach(recipe => {
            if(recipe.name.toLowerCase().includes(val)){
                result.push(recipe.id);
            }
        })
        setSelected(result);
    }, [])


    return (
        <div style={{height: "100px", textAlign: "center"}}  >
            <input style={{width:"100%", height: "40px", marginTop: "40px"}} type="text" onChange={handleChangeCb} placeholder={"Search"}></input>
        </div>
    )
}
