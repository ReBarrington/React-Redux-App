import React from 'react';
import CatForm from './components/CatForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { catReducer as reducer } from './reducers/catReducer';
import './App.css';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <h1>Got Milk?</h1>
          <CatForm />
      </div>
    </Provider>
  );
}

export default App;