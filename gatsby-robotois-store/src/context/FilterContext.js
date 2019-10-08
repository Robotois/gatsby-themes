import React, { useReducer, createContext } from 'react';
const SET_QUERY = 'SET_QUERY';

const FilterContext = createContext();

const initialState = {
  query: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.query };
    default:
      return state;
  }
};

function FilterContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
}

const FilterContextConsumer = FilterContext.Consumer;

export {
  FilterContext,
  FilterContextProvider,
  FilterContextConsumer,
  SET_QUERY,
};