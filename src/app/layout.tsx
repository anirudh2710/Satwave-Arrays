import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Satwave Arrays",
    description: "Satwave Arrays Website"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
