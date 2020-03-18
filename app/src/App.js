import React from 'react';
import CatForm from './components/CatForm';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { catReducer as reducer } from './reducers/catReducer';
import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      {/* this will all have access to redux store: */}
      <div className="App">
          <h1>Got Milk?</h1>
          <CatForm />
      </div>
    </Provider>
  );
}

export default App;
