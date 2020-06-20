import React from 'react';
import './App.css';
import {createStore,combineReducers} from "redux";
import rootReducer from "./reducers/rootReducer";
import {Provider} from "react-redux";
import Counter from "./Counters";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <h2>React with Redux&Hooks </h2>
          <br/>
        <Counter/>

        </Provider>
    </div>
  );
}

export default App;
