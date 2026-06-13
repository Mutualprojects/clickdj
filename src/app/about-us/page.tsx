import React from "react";
import { Metadata } from "next";
import AboutHero from "./components/hero";
import AboutArchitecture from "./components/architecture";
import AboutExecution from "./components/execution";
import AboutMissionVision from "./components/mission-vision";
import AboutValues from "./components/values";
import AboutImpact from "./components/impact";

export const metadata: Metadata = {
    title: "About Us | Click Diji - Your Click, Our Strategy",
    description: "Get in touch with the Click Diji team. Leave us a little info and we’ll be in touch to strategize your next digital success.",
};

export default function AboutUsPage() {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-neutral-950">
            <AboutHero />
            <AboutArchitecture />
            <AboutExecution />
            <AboutMissionVision />
            <AboutValues />
            <AboutImpact />
        </div>
    );
}