import React, { memo, useCallback, useState, useContext, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import { OffSwitches, OnSwitches } from './actions';
import { Store, StoreProvider } from './Store';



const App = () => {
  let [switchOffOn, setState] = useState(true);
  const { state, dispatch } = useContext(Store);
  return (
    <div className="App">
      <h1> FXE ==> {state.PriceMapSwitches.FXE}</h1>
      <button className='my-btn' type='button' onClick={() => {
        setState(switchOffOn = true)
        OnSwitches(dispatch)
      }}>ON Switch
      </button>
      <button className='my-btn' type='button' onClick={() => {
        setState(switchOffOn = false)
        OffSwitches(dispatch)
      }}>OFF Switch
      </button>
    </div>
  );
}

render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , document.getElementById('root'));
