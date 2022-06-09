import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import MyHeader from "./components/Header/Header";
import SignInPopup from "./components/Popup/SignInPopup";
import SignUpPopup from "./components/Popup/SignUpPopup";
import Router from "./components/Router/Router";

const App = () => {
    const { isAuth } = useSelector((state) => state.auth);

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

    return (
        <div className="App">
            <MyHeader type={isAuth ? "app" : "landing"} refList={refList} />
            <Router refList={refList} />
            <SignInPopup />
            <SignUpPopup />
        </div>
    );
};

export default App;
