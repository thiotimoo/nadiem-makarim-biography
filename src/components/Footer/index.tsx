import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="max-w-screen-md m-auto bg-white p-6 text-black">
            <p>
                Website ini dibuat oleh:
                <br />
                <b>Vincent Timothy Kurniawan (10.1 / 27)</b>
                <br /> sebagai tugas <b>Teks Biografi</b> Pelajaran Bahasa
                Indonesia
            </p>
            <Link href="https://github.com/thiotimoo/nadiem-makarim-biography" className="underline font-bold hover:bg-black 
            hover:text-white rounded-sm">Lihat Repository Github</Link>
        </footer>
    );
};

export default Footer;
