import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarBrand,
} from "@heroui/navbar";

import { ThemeSwitch } from "@/src/components/ThemeSwitch";
import React from "react";

export const Nav: React.FC = () => {

    return (
        <HeroUINavbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">
                    Star Scheduler
                </p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <ThemeSwitch/>
            </NavbarContent>
        </HeroUINavbar>
    )
}