import cls from "./EasyToUse.module.scss";
import firstIcon from "./../../../assets/img/EasyToUse/easy_1.svg";
import secondIcon from "./../../../assets/img/EasyToUse/easy_2.svg";
import thirdIcon from "./../../../assets/img/EasyToUse/easy_3.svg";

export const FirstIcon = () => {
    return (
        <div className={cls.icon}>
            <span className={cls.transparent} />
            <img src={firstIcon} alt={firstIcon} />
            <span />
        </div>
    );
};

export const SecondIcon = () => {
    return (
        <div className={cls.icon}>
            <span />
            <img src={secondIcon} alt={secondIcon} />
            <span />
        </div>
    );
};

export const ThirdIcon = () => {
    return (
        <div className={cls.icon}>
            <span />
            <img src={thirdIcon} alt={thirdIcon} />
            <span className={cls.transparent} />
        </div>
    );
};
