import {createStore} from 'redux';
import {createAction, createReducer, configureStore, createSlice} from '@reduxjs/toolkit';



/*
//without redux toolkit
const reducer = (state = [], action) => {
    
    switch (action.type){
       
        case addToDo.type :
            console.log(action)
            return [{ text: action.payload, id: Date.now() },...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default :
        return state;
    }
}
*/

/*
//with redux toolkit
const addToDo = createAction("ADD");
const deleteToDo =  createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
});
*/

//with redux toolkit createSlice

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reduecers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) =>
        state.filter(toDo => toDo.id !== action.payload)
    }

})

const store = configureStore({ reducer: toDos.reducer });

export const{ add,remove } = toDos.actions

export default store;