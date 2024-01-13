import type { Metadata } from "next";
import { Gabarito, Kalam } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });
const kalam = Kalam({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-kalam",
});

export const metadata: Metadata = {
    title: "Nadiem Makarim",
    description: "Biografi Nadiem Makarim",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${gabarito.className} ${kalam.variable}`}>{children}</body>
        </html>
    );
}
