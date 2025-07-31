import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Bizengo",
    description: "Find products all over the country, find stores, place orders, and receive them quickly",
    icons: {
        icon: "/icons/site-icon.ico",
    },
};

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="w-full min-h-screen overflow-x-hidden">
                {children}
            </div>
        </main>
    );
}