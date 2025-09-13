import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <>
        <LeftSidebar />
        <div className="mr-2 md:mr-10 xl:mr-110 lg:ml-100 ml-12 min-h-screen border border-border mb-20">  
            {children}
        </div>
        <RightSidebar />
        
    </>;
}