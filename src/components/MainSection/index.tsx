import React from "react";

interface IContainer {
    children: React.ReactNode;
    className?: string;
}

const MainSection: React.FC<IContainer> = ({ children, className }) => {
    return (
        <section className={`flex flex-col gap-6 ${className}`}>
            {children}
        </section>
    );
};

export default MainSection;
