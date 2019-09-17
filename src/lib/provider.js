import { Provider } from "react-redux";
import { createEffects } from "./createEffects";
import { effectsReducer } from "../reducer/effectsReducer";
import {createStore} from "redux";
import {storeReducer} from "../reducer/storeReducer";
import React from "react";

export const EffectContext = React.createContext('');

export const AppProvider = (props) => {

  const store = createStore(storeReducer);
  const effects = createEffects(effectsReducer, store.dispatch);

  return (<EffectContext.Provider value={effects}>
            <Provider store={store}>
              {props.children}
            </Provider>
          </EffectContext.Provider>)
};


