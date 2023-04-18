import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialAuthState = {
    isLoggedIn:false,
    userName: '',
    userId: ''
};

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        createActiveUser(state,action){
            state.isLoggedIn = action.payload;
            state.userName = action.payload;
            state.userId = action.payload
        },
    }
});

 const store = configureStore({
    reducer:{auth:authSlice.reducer}
 });
 export const authActions = authSlice.actions;
 export default store;