"use client";

import Link from "next/link";
import Button from "../../elements/Button/Button";

import { links } from "./data";
import Logo from "@/elements/Logo/Logo";
import ThemeMode from "@/elements/ThemeMode/ThemeMode";

export default function Navbar() {
  return (
    <div className="container h-24 flex justify-between items-center mx-auto px-4 max-sm:flex-col">
      <Logo />

      <div className="h-full flex items-center justify-center gap-2">
        <ThemeMode />

        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {/* <Button /> */}
      </div>
    </div>
  );
}
