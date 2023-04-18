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
        clearActiveUser(state){
            state.isLoggedIn = false;
            console.log(state.isLoggedIn)
            state.userName = '';
            state.userId = ''
        }
    }
});

 const store = configureStore({
    reducer:{auth:authSlice.reducer}
 });
 export const authActions = authSlice.actions;
 export default store;