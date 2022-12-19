import { createSlice } from "@reduxjs/toolkit"


const defaultState = {
    counter: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    }
};
  
const counterSlice = createSlice ({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterAction(state) {
            state.counter += state.lesson.lection;
        },
        decreaseCounterAction(state){
            state.counter -= state.lesson.lection;
        }
    }
});

export const { increaseCounterAction, decreaseCounterAction } = counterSlice.actions;
export default counterSlice.reducer;