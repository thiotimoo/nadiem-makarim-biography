"use client";
import { motion } from "framer-motion";
import React from "react";

interface IContainer {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<IContainer> = ({ children, className }) => {
    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className={`flex flex-col gap-6 p-6 w-full max-w-screen-md ${className}`}>
            {children}
        </motion.section>
    );
};

export default Section;
