import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'inc'){
        return {
            counter: state.counter + 5,
        };
    }
    if(action.type === 'dec'){
        return {
            counter: state.counter - 5,
        };
    }
    return state;
}

const store = createStore(counterReducer);

export default store;