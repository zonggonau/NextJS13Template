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
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              <span className="sm:block animate-pulse drop-shadow-lg">
                HOSTING & CLOUD VPS
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Penawaran terbaik unlimited web hosting, Cloud VPS, Website
              Profesional dengan fitur terlengkap, harga terjangkau, serta
              gratis domain & SSL untuk Anda. Jangan lewatkan!
            </p>
          </div>
          <div className="flex space-x-10 pt-6 justify-center gap-2">
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
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full  rounded-full  border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Lihat Panawaran Promo Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
