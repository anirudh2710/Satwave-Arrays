import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Satwave Arrays",
    description: "Satwave Arrays Website",
    icons: {
        icon: "/Satwave_logos/S Mark/JPGs/S_White.jpg",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
