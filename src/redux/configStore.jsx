import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        // Nơi chứa state của ứng dụng
        fontSize: (state = 30, action) => {
            console.log('action1', action);
            switch (action.type) {
                case 'TANG_GIAM_FONSSIZE':{
                    state += action.payload;
                    return state;
                }                     
                default: return state;
            }
            
        },
        imgSrc: (state = './img/red-car.jpg', action) => {
            console.log('action2', action);
            switch (action.type) {
                default: return state;
            }
        }

    }
})