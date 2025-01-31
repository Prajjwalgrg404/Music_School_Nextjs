"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* home section */}
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        {/* our courses section on nav */}

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/web-dev">All courses</HoveredLink>
            <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
            <HoveredLink href="/web-dev">Advance Composition</HoveredLink>
            <HoveredLink href="/web-dev">Song writing</HoveredLink>
            <HoveredLink href="/web-dev">Music Production</HoveredLink>
          </div>
        </MenuItem>

        {/* contact section on nav */}

        <Link href={"/contactus"}>
          <MenuItem setActive={setActive} active={active} item="Contact us">
            okay !!!
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
