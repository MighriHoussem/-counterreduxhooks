import React from 'react';
import './App.css';
import {createStore,combineReducers} from "redux";
import rootReducer from "./reducers/rootReducer";
import {Provider} from "react-redux";
import Counter from "./Counters";
import NameComponent from "./Name";
import nameReducer from "./reducers/nameReducer";

const rootReducerApp = combineReducers({
    rootReducer,
    nameReducer
})
const store = createStore(rootReducerApp);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <h2>React with Redux&Hooks </h2>
          <br/>
        <Counter/>
        <br/>
        <NameComponent/>
        </Provider>
    </div>
  );
}

export default App;
