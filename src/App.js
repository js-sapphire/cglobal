import React from "react";
import "./App.css";
import { Switch, Route} from 'react-router-dom';
import { RecipeList } from "./components/RecipeList/RecipeList.jsx";
import { RecipePage } from "./components/RecipePage/RecipePage.jsx";
import { AppContext } from './AppContext';


const AppContextProvider = (props) => {
  const [selected, setSelected] = React.useState([]);
  const { children } = props;

  return(
    <AppContext.Provider value={{ selected, setSelected}}>
      {children}
    </AppContext.Provider>
  )

}

function App() {
  return (
    <AppContextProvider>
      <Switch>
        <Route path="/:id">
          <RecipePage />
        </Route>
        <Route path="/">
          <RecipeList />
        </Route>
      </Switch>
    </AppContextProvider>
  );
}

export default App;
