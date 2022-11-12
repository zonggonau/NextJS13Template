"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const links = [
  { href: "/website-custom", label: "Website Custom" },
  { href: "/website-instant", label: "Website Instant" },
  { href: "/hosting", label: "Hosting" },
  { href: "/cloud-vps", label: "Cloud Vps" },
  { href: "/domain", label: "domain" },
];

export default function Dropdown() {
  return (
    <Menu>
      <Menu.Button className="inline-flex items-center">
        LAYANAN KAMI
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule={"evenodd"}
          />
        </svg>
      </Menu.Button>
      <Menu.Items>
        <div
          className="absolute right-50 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-stone-800 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          {links.map((link, index) => (
            /* Use the `active` state to conditionally style the active item. */
            <div key={index} role="none" className="dark:bg-zinc-800 py-1">
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <Link
                    href={"layanan" + link.href}
                    className={`${
                      active
                        ? "block px-4 py-2 text-sm text-white ui-open:bg-red-900"
                        : "block px-4 py-2 text-sm  dark:text-white text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}
