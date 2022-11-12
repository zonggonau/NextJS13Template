// "use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeSwitcher = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 animate-pulse"
          onClick={() => setTheme("light")}
          color="yellow"
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 animate-pulse"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <section className="dark:bg-zinc-900">
      <header aria-label="Site Header">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="items-center">
            <div>
              <Link href="/" className="flex text-3xl font-bold ">
                N-13
              </Link>
            </div>
            {/* <div>
              <p className="text-sm font-bold text-red-600">
                Config and Template
              </p>
            </div> */}
          </div>

          <div className="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-8 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide "
            >
              <Link
                href="/"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Home
              </Link>
              <div className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                <Dropdown />
              </div>
              <Link
                href="/profile"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Profile Kami
              </Link>

              <Link
                href="/klien"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Klien Kami
              </Link>

              <Link
                href="/kontak"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Kontak Kami
              </Link>
            </nav>

            <div className="ml-8  flex items-center">
              <div className="flex items-center divide-x divide-gray-100 cursor-pointer border-gray-100">
                <button
                  id="theme-toggle-dekstop"
                  type="button"
                  class="cursor-pointer text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                  {renderThemeSwitcher()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
