const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isSignInClosed: true,
    isSignUpClosed: true,
    signInData: {
        email: "",
        password: "",
    },
    signUpData: {
        email: "",
        password: "",
        confirmPassword: "",
    },
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openSignIn(state) {
            state.isSignInClosed = false;
        },
        closeSignIn(state) {
            state.isSignInClosed = true;
            state.signInData.email = "";
            state.signInData.password = "";
        },
        setSignInEmail(state, action) {
            state.signInData.email = action.payload;
        },
        setSignInPassword(state, action) {
            state.signInData.password = action.payload;
        },
        openSignUp(state) {
            state.isSignUpClosed = false;
        },
        closeSignUp(state) {
            state.isSignUpClosed = true;
            state.signUpData.email = "";
            state.signUpData.password = "";
            state.signUpData.confirmPassword = "";
        },
        setSignUpEmail(state, action) {
            state.signUpData.email = action.payload;
        },
        setSignUpPassword(state, action) {
            state.signUpData.password = action.payload;
        },
        setSignUpConfirmPassword(state, action) {
            state.signUpData.confirmPassword = action.payload;
        },
    },
});

export const {
    closeSignIn,
    closeSignUp,
    openSignIn,
    openSignUp,
    setSignInEmail,
    setSignInPassword,
    setSignUpConfirmPassword,
    setSignUpEmail,
    setSignUpPassword,
} = popupSlice.actions;
export default popupSlice.reducer;
