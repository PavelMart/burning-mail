import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import MyHeader from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import SignInPopup from "./components/Popup/SignInPopup";
import SignUpPopup from "./components/Popup/SignUpPopup";
import Router from "./components/Router/Router";
import { checkAuth } from "./redux/auth/authActions";

const App = () => {
    const { isAuth, isLoading } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refList = {
        promoRef: useRef(null),
        benefitsRef: useRef(null),
        easyToUseRef: useRef(null),
        ourClientsRef: useRef(null),
        useCasesRef: useRef(null),
        packagesRef: useRef(null),
        paymentAcceptanceRef: useRef(null),
        faqRef: useRef(null),
        contactsRef: useRef(null),
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="App">
            <MyHeader type={isAuth ? "app" : "landing"} refList={refList} />
            <Router refList={refList} />
            <SignInPopup />
            <SignUpPopup />
        </div>
    );
};

export default App;
