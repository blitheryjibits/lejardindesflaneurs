"use client";

import Link from "next/link";
import Image from "next/image";
import { HamburgerMenu } from "@/assets/icons/hamburger";
import { useState } from "react";
import { TextLogo } from "../text-logo";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex w-full justify-between px-8 md:px-16 lg:px-24 bg-white relative">
        <div className="flex w-full items-center justify-between">
          {/* Logo + Text */}
          <Link href="/" className="flex gap-4 pr-4 items-center">
            <div className="relative h-24 w-24 aspect-square">
              <Image
                src="/svg/legs-reading.svg"
                fill
                loading="eager"
                alt="logo"
                className="object-cover"
              />
            </div>

            <div className="hidden md:inline ">
              <TextLogo isLink={true} />
            </div>
          </Link>
          <div className="absolute top-5 left-130 w-64 cursor-events-none"></div>

          {/* Hamburger */}
          <HamburgerMenu
            aria-label={isOpen ? "close menu" : "open menu"}
            size={32}
            isOpen={isOpen}
            tabIndex={0}
            className={`flex text-primary hover:text-accent hover:cursor-pointer transition-all duration-300
                lg:hidden
              `}
            onClick={() => setIsOpen((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsOpen((prev) => !prev);
              }
            }}
          />
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:gap-16 ">
          {navItems.map((item) => (
            <li key={item.label} className="text-nowrap relative">
              <Link className="" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE MENU — OUTSIDE NAV */}
      <ul
        className={`
          fixed top-24 right-0 h-screen w-3/4 max-w-xs bg-white z-50
          flex flex-col gap-6 px-8 py-6 shadow-xl
          transition-transform duration-300 lg:hidden
          ${isOpen ? "translate-x-0 visible" : "translate-x-full hidden aria-hidden"}
        `}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-lg">
            <Link href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* BACKDROP (optional) */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={0}
          className={`fixed inset-0 top-24 bg-black/30 backdrop-blur-sm z-40`}
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(false);
            }
          }}
        />
      )}
    </>
  );
};
