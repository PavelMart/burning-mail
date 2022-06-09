import React from "react";
import cls from "./Section.module.scss";

const Section = ({ children, style, id, addClassName, sectionRef }) => {
    return (
        <section ref={sectionRef} id={id} className={`${cls.section} ${addClassName}`} style={{ ...style }}>
            {children}
        </section>
    );
};

export default Section;
