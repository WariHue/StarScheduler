import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/src/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from "@/src/components/icons";

export const Nav: React.FC = () => {

    return (
        <HeroUINavbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">
                    Minecraft Server Router Manager
                </p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <ThemeSwitch/>
            </NavbarContent>
        </HeroUINavbar>
    )
}