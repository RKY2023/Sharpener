// import { createStore } from 'redux';S
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true};

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'inc'){
//         return {
//             counter: ++state.counter,
//             showCounter: state.showCounter,
//         };
//     }
//     if(action.type === 'dec'){
//         return {
//             counter: state.counter - 5,
//             showCounter: state.showCounter,
//         };
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }
//     return state;
// }
// const store = createStore(counterReducer);

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//     }
// });
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;