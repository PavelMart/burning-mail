import cls from "./TextComponents.module.scss";

export const ExtraBoldText = ({ children, className }) => {
    return <div className={[cls.textComponent, cls.extraBoldText, className].join(" ")}>{children}</div>;
};

export const BoldText = ({ children, className }) => {
    return <span className={[cls.textComponent, cls.boldText, className].join(" ")}>{children}</span>;
};

export const RegularText = ({ children, className }) => {
    return <span className={[cls.textComponent, cls.regularText, className].join(" ")}>{children}</span>;
};
