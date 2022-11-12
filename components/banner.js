"use client";
import { useState, useEffect } from "react";

export default function Banner() {
  const day = "00";
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  useEffect(() => {
    var dt = "";
    var now = new Date();
    var dateNows =
      now.getFullYear() +
      "-" +
      (now.getMonth() + 1) +
      "-" +
      now.getDate() +
      " 23:59:00";

    if (dt) {
      dt = "";
    } else {
      dt = dateNows;
    }

    var dateNow = now.toLocaleDateString("en-us", {
      timeZone: "Asia/Jayapura",
    });

    dateNow = dateNow.split("/");
    var dateString =
      dateNow[2] + "/" + dateNow[0] + "/" + dateNow[1] + " " + dt.split(" ")[1];
    var countDownDate = new Date(dateString);

    countDownDate.setMinutes(countDownDate.getMinutes() + 1);

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate.getTime() - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days <= 0) {
        days = day;
      } else if (days.length == 1) {
        days = "0" + days;
      }
      if (hours <= 0) {
        hours = hour;
      } else if (String(hours).length == 1) {
        hours = "0" + hours;
      }

      if (minutes <= 0) {
        minutes = minute;
      } else if (String(minutes).length == 1) {
        minutes = "0" + minutes;
      }
      if (seconds <= 0) {
        seconds = second;
      } else if (String(seconds).length == 1) {
        seconds = "0" + seconds;
      }

      if (distance <= 0 || isNaN(distance)) {
        clearInterval(x);
      }

      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    }, 1000);
  }, []);

  return (
    <section className="dark:bg-zinc-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-32  lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent sm:text-8xl">
              <span className="sm:block animate-pulse drop-shadow-lg">
                <span className="block">N-13</span>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
              <span className="block text-gray-500 dark:text-gray-100">
                <span className="block">
                  N-13 is a starter template for NextJS 13 Beta Version
                  development.
                </span>
              </span>
            </p>
            <p className="text-lg font-bold p-3">
              <span className="block text-gray-500 dark:text-gray-200">
                <span className="block">Feautures:</span>
              </span>
            </p>
            <div className="">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6">Default Template</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 ">Tailwindcss</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 ">
                    Light Mode and Dark Mode
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 ">
                    Fast Install and Easy to Customize
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex space-x-10 pt-6 justify-center gap-2">
            <div>
              <div className="text-2xl dark:bg-white bg-gray-900 dark:text-black text-white p-2 rounded-lg font-bold">
                {day}
              </div>
              <div className="pt-1">
                <span className="text-sm font-bold">Hari</span>
              </div>
            </div>
            <div>
              <div className="text-2xl dark:bg-white bg-gray-900 dark:text-black text-white p-2 rounded-lg font-bold">
                {hour}
              </div>
              <div className="pt-1">
                <span className="text-sm font-bold">Jam</span>
              </div>
            </div>
            <div>
              <div className=" text-2xl dark:bg-white bg-gray-900 dark:text-black text-white p-2 rounded-lg font-bold">
                {minute}
              </div>
              <div className="pt-1">
                <span className="text-sm font-bold">Menit</span>
              </div>
            </div>
            <div>
              <div className=" text-2xl dark:bg-white bg-gray-900 dark:text-black text-white p-2 rounded-lg font-bold">
                {second}
              </div>
              <div className="pt-1">
                <span className="text-sm font-bold">Detik</span>
              </div>
            </div>
          </div> */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full  rounded-full  border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://github.com/zonggonau/NextJS13Template"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
