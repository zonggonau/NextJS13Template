import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const ThemeMode = () => {
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
          <div className="hidden lg:block">
            <Link href="/" className="text-3xl font-bold ">
              NEXTBLOG
            </Link>
          </div>
          <div className="flex w-full  items-center justify-between lg:hidden pr-5">
            <div>
              <button type="button" className="p-2 sm:mr-4">
                <svg
                  className="h-8 w-8"
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
            </div>
            <div className="lg:hidden">
              <Link href="/" className="text-3xl font-bold ">
                NEXTBLOG
              </Link>
            </div>
            <div className="lg:hidden ml-8  flex items-center">
              <button
                id="theme-toggle-dekstop"
                type="button"
                class="cursor-pointer text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                {ThemeMode()}
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-8 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide "
            >
              <Link
                href="/docs"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Docs
              </Link>
              {/* <div className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                <Dropdown />
              </div> */}
              <Link
                href="/components"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Components
              </Link>

              <Link
                href="/templates"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Templates
              </Link>

              {/* <Link
                href="/klien"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Our Client
              </Link>

              <Link
                href="/kontak"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Contact Us
              </Link> */}
              <div className="ml-8  flex items-center">
                <div className="flex items-center divide-x divide-gray-100 cursor-pointer border-gray-100">
                  <button
                    id="theme-toggle-dekstop"
                    type="button"
                    class="cursor-pointer text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  >
                    {ThemeMode()}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
}
