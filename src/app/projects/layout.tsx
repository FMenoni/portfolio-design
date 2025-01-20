import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppNavbar from "@/components/app-navbar";
import "@/app/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fabian Menoni - Projets",
    description: "Bienvenue sur mon portfolio où vous pouvez trouver mes projets, mes compétences et plus encore !",
    openGraph: {
        title: "Fabian Menoni - Projets",
        description: "Bienvenue sur mon portfolio où vous pouvez trouver mes projets, mes compétences et plus encore !",
        type: "website",
        images: [
            {
                url: "https://i.imgur.com/QO5J3DV.png",
                width: 1200,
                height: 630,
                alt: "Fabian Menoni - Projets",
            },
        ],
        siteName: "Fabian Menoni - Projets",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fabian Menoni - Projets",
        description: "Bienvenue sur mon portfolio où vous pouvez trouver mes projets, mes compétences et plus encore !",
        images: ["https://i.imgur.com/QO5J3DV.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
