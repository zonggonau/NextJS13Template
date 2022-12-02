import Link from "next/link";
import wa from "../public/wa.png";
import Image from "next/image";
export default function Price({ data }) {
  const whatsup = "https://api.whatsapp.com/send?phone=+6281355315427&text=";

  const TimeZone = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    if (hour >= 4 && hour <= 10) {
      return "Selamat Pagi";
    }
    if (hour >= 10 && hour <= 15) {
      return "Selamat Siang";
    }
    if (hour >= 15 && hour <= 18) {
      return "Selamat Sore";
    }
    if (hour >= 18 && hour <= 24) {
      return "Selamat Malam";
    }
    if (hour >= 0 && hour <= 4) {
      return "Selamat Malam";
    }
  };

  const Render = () => {
    return data.map((item, index) => {
      return (
        <section key={index} className="dark:bg-zinc-900">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-2xl">{item.title}</h2>

              <p className="mt-4">{item.desc}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {item.paket.map((paket, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex flex-col rounded-lg shadow-xl overflow-hidden dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-200 hover:text-black border border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="mt-2  text-lg leading-7 font-semibold text-center">
                        {paket.title}
                      </h3>
                      <p className="mt-3 flex-1  text-sm text-center">
                        {paket.desc}
                      </p>
                      <div className="mt-6 text-center">
                        <span className="text-2xl font-bold">
                          {paket.harga}
                        </span>
                      </div>
                    </div>
                    <div className="dark:border-t dark:border-zinc-800 border-t border-zinc-200 px-6 py-4">
                      <ul className="space-y-4">
                        {paket.fitur.map((fitur, index) => {
                          return (
                            <li key={index} className="flex items-start">
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
                                {fitur}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-10">
                        <Link
                          href={
                            whatsup +
                            TimeZone() +
                            " Saya tertarik dengan paket " +
                            paket.title +
                            " Untuk " +
                            paket.desc +
                            " Dengan Harga " +
                            paket.harga
                          }
                          className="w-full flex items-center justify-center "
                        >
                          <div className="bg-zinc-100 p-2  flex items-center  hover:bg-white rounded-3xl">
                            <div>
                              <Image
                                src={wa}
                                width={40}
                                height={40}
                                alt="whatsapp"
                              />
                            </div>
                            <div>
                              <p className="text-gray-800 text-sm  font-bold pr-3">
                                Pesan Sekarang
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <div>
      <Render />
    </div>
  );
}
