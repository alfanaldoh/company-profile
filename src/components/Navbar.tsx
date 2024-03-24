import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 w-full h-[8vh] border-black bg-[#E7EB5D] border-b-2 sticky top-0 z-50">
      <Link href="/">
        <h1 className="md:text-5xl text-xl font-bold">Moral +</h1>
      </Link>
      <div className="flex gap-5 md:pl-[700px] md:flex hidden">
        <Link href="/services">
          <p className="text-2xl font-light cursor-pointer">Services</p>
        </Link>
        <Link href="/ourwhy">
          <p className="text-2xl font-light cursor-pointer">Our Why</p>
        </Link>
        <Link href="/about-us">
          <p className="text-2xl font-light cursor-pointer">About us</p>
        </Link>
        <Link href="/contact">
          <p className="text-2xl font-light cursor-pointer">Contact</p>
        </Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="block md:hidden">
            <Button variant="ghost">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/services">
              <DropdownMenuItem>Services</DropdownMenuItem>
            </Link>
            <Link href="ourwhy">
              <DropdownMenuItem>Our Why</DropdownMenuItem>
            </Link>
            <Link href="about-us">
              <DropdownMenuItem>About us</DropdownMenuItem>
            </Link>
            <Link href="/contact">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
