"use client";
import { useState } from "react";
import Price from "./price";
const data = [
  {
    title: "Website Profile",
    desc: "Untuk: Perusahaan, Sekolah, Universitas, Rumah Sakit, Puskesmas, Klinik, Instansi Pemerintah, Sales Motor, Personal, Bisnis, Tour Travel, Sales Internet, dsb.",
    paket: [
      {
        title: "Basic",
        harga: "Rp. 1.000.000",
        desc: "Website Profile",
        fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
      },
      {
        title: "Standard",
        harga: "Rp. 2.000.000",
        desc: "Website Profile",
        fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
      },
      {
        title: "Premium",
        harga: "Rp. 3.000.000",
        desc: "Website Profile",
        fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
      },
      {
        title: "Premium",
        harga: "Rp. 3.000.000",
        desc: "Website Profile",
        fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
      },
    ],
  },
];

export default function TabsLayanan() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section className="bg-zinc-900">
      <div className="container md:mx-auto sm:mx-auto lg:mx-auto pt-10 ">
        {/* create sub title section here */}
        <div className="flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold pb-5">Layanan Kami</h1>
          <p className="text-center font-bold">
            Kami menyediakan berbagai layanan untuk anda
          </p>
        </div>
        {/* create sub title section here */}
        {/* tailwindcss tabs create */}
        <div className="flex flex-col">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              defaultValue={activeTab}
            >
              <option value="1">WEBSITE CUSTOM</option>
              <option value="2">WEBSITE INSTANT</option>
              <option value="3">HOSTING</option>
              <option value="4">CLOUD VPS</option>
              <option value="5">DOMAIN</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className=" border-gray-200">
              <nav
                className="-mb-px flex space-x-8 justify-center"
                aria-label="Tabs"
              >
                <a
                  href="#"
                  className={
                    activeTab === "1"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle("1");
                  }}
                >
                  WEBSITE CUSTOM
                </a>
                <a
                  href="#"
                  className={
                    activeTab === "2"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle("2");
                  }}
                >
                  WEBSITE INSTANT
                </a>
                <a
                  href="#"
                  className={
                    activeTab === "3"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle("3");
                  }}
                >
                  HOSTING
                </a>
                <a
                  href="#"
                  className={
                    activeTab === "4"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle("4");
                  }}
                >
                  CLOUD VPS
                </a>
                <a
                  href="#"
                  className={
                    activeTab === "5"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle("5");
                  }}
                >
                  DOMAIN
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* tailwindcss tabs create */}
        <div className="mt-8">
          {activeTab === "1" && (
            <div className="text-gray-500">
              <Price data={data} />
            </div>
          )}
          {activeTab === "2" && (
            <div className="text-gray-500">
              <p>
                2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam
              </p>
            </div>
          )}
          {activeTab === "3" && (
            <div className="text-gray-500">
              <p>
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam
              </p>
            </div>
          )}
          {activeTab === "4" && (
            <div className="text-gray-500">
              <p>
                4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam
              </p>
            </div>
          )}
          {activeTab === "5" && (
            <div className="text-gray-500">
              <p>
                5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptates quibusdam
                voluptatibus necessitatibus quidem voluptate quos quia voluptas.
                Quisquam
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
