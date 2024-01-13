"use client";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const BackButton = () => {
    const router = useRouter();
    const handleBack = (e: FormEvent) => {
        e.preventDefault();
        router.back();
    };
    return (
        <button className="float-left p-4" onClick={handleBack}>
            <ArrowLeft size={32} alt="Back" />
        </button>
    );
};

export default BackButton;
