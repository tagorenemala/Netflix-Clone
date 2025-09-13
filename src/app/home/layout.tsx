import React from "react";
import LeftSidebar from "@/components/LeftSidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <>
        <div className="mr-2 md:mr-10 xl:mr-110 lg:ml-100 ml-12 min-h-screen border border-border mb-20">
            <LeftSidebar />
        </div>
        {children}
    </>;
}