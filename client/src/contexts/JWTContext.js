import React, { createContext, useEffect, useReducer } from 'react';


import { ACCOUNT_INITIALISE, LOGIN, LOGOUT } from "../store/actions";
import * as userApi from '../apis/user'
import accountReducer from '../store/accountReducer';
import Loader from "../components/Loader/Loader";
import { setToken, tokenValid } from '../helpers/storage'

const initialState = {
  isLoggedIn: false,
  isInitialised: false,
  user: null
};
const JWTContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => { }
});

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  const login = async (email, password) => {
    console.log('login req sent')
    const { user } = await userApi.signin(email, password)
    dispatch({
      type: LOGIN,
      payload: {
        user
      }
    });
  };

  const logout = () => {
    setToken(null);
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    const init = async () => {
      try {
        
        if(tokenValid()){
          const { user } = await userApi.profile();
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ACCOUNT_INITIALISE,
          payload: {
            isLoggedIn: false,
            user: null
          }
        });
      }
    };
    init();
  }, []);

  if (!state.isInitialised) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider value={{ ...state, login, logout}}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;