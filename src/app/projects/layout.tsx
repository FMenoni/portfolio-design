import type { Metadata } from "next";
import "@/app/globals.css";

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
