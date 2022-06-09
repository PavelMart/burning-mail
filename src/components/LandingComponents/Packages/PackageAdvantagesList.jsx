import React from "react";
import PackageAdvantage from "./PackageAdvantage";

const PackageAdvantagesList = ({ advantages }) => {
    return (
        <>
            {advantages.map((item) => (
                <PackageAdvantage item={item} key={item.title} />
            ))}
        </>
    );
};

export default PackageAdvantagesList;
