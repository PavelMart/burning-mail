import React from "react";
import Footer from "../components/Footer/Footer";
import Benefits from "../components/LandingComponents/Benefits/Benefits";
import Contacts from "../components/LandingComponents/Contacts/Contacts";
import EastToUse from "../components/LandingComponents/EasyToUse/EasyToUse";
import FAQ from "../components/LandingComponents/FAQ/FAQ";
import OurClients from "../components/LandingComponents/OurCLients/OurClients";
import Packages from "../components/LandingComponents/Packages/Packages";
import PaymentAcceptance from "../components/LandingComponents/PaymentAcceptance/PaymentAcceptance";
import Promo from "../components/LandingComponents/Promo/Promo";
import UseCases from "../components/LandingComponents/UseCases/UseCases";

const LandingPage = ({ refList }) => {
    return (
        <div className="Landing">
            <Promo sectionRef={refList.promoRef} />
            <Benefits sectionRef={refList.benefitsRef} />
            <EastToUse sectionRef={refList.easyToUseRef} />
            <OurClients sectionRef={refList.ourClientsRef} />
            <UseCases sectionRef={refList.useCasesRef} />
            <Packages sectionRef={refList.packagesRef} />
            <PaymentAcceptance sectionRef={refList.paymentAcceptanceRef} />
            <FAQ sectionRef={refList.faqRef} />
            <Contacts sectionRef={refList.contactsRef} />
            <Footer />
        </div>
    );
};

export default LandingPage;
