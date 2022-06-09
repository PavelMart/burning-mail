import { setCurrent } from "../redux/menu/menuSlice";

const toggleHeaderPadding = (setWithoutPadding) => {
    if (window.scrollY > 100) setWithoutPadding(true);
    else setWithoutPadding(false);
};

const getOffsetTop = (ref, headerRef) => {
    const headerHeight = headerRef.current.offsetHeight;
    return ref.current.offsetTop - headerHeight;
};

const check = (min, middle, max, item, current) => {
    if (min <= middle && middle < max && item !== current) return true;
    else return false;
};

const setCurrentMenuItem = (dispatch, refList, current, headerRef) => {
    const y = window.scrollY;
    const benefitsTop = getOffsetTop(refList.benefitsRef, headerRef);
    const clientsTop = getOffsetTop(refList.ourClientsRef, headerRef);
    const useCasesTop = getOffsetTop(refList.useCasesRef, headerRef);
    const packagesTop = getOffsetTop(refList.packagesRef, headerRef);
    const faqTop = getOffsetTop(refList.faqRef, headerRef);
    const contactsTop = getOffsetTop(refList.contactsRef, headerRef);

    if (check(0, y, benefitsTop, "home", current)) dispatch(setCurrent("home"));
    else if (check(benefitsTop, y, clientsTop, "benefits", current)) dispatch(setCurrent("benefits"));
    else if (check(clientsTop, y, useCasesTop, "clients", current)) dispatch(setCurrent("clients"));
    else if (check(useCasesTop, y, packagesTop, "cases", current)) dispatch(setCurrent("cases"));
    else if (check(packagesTop, y, faqTop, "pricing", current)) dispatch(setCurrent("pricing"));
    else if (check(faqTop, y, contactsTop, "faq", current)) dispatch(setCurrent("faq"));
    else if (check(contactsTop, y, Infinity, "contact", current)) dispatch(setCurrent("contact"));
};

export const scrollHandler = (dispatch, refList, current, headerRef, setWithoutPadding) => {
    toggleHeaderPadding(setWithoutPadding);
    setCurrentMenuItem(dispatch, refList, current, headerRef);
};
