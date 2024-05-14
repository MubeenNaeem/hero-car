import Image from "next/image";
import { logoFont, textFont } from "./layout";

export default function Home() {
  return (
    <div className="m-auto max-w-6xl">
      {/* Background Blur */}
      <div className="absolute left-0 right-0 -z-50">
        <Image
          src={"/ev-bg-big.png"}
          alt="Background"
          width={1920}
          height={1}
          className="h-screen blur-md"
        />
      </div>

      {/* Main Background */}
      <div className="absolute left-0 right-0 -z-40 m-auto max-w-6xl">
        <Image
          src={"/ev-bg-big.png"}
          alt="Background"
          width={1920}
          height={1}
        />
      </div>

      {/* Car */}
      <div className="absolute left-0 right-0 -z-10 m-auto max-w-6xl">
        <Image src={"/ev-car.png"} alt="Car" width={1920} height={1} />
      </div>

      {/* POWER Text */}
      <div className="absolute -left-40 -right-40 top-[300px] -z-20 m-auto max-w-6xl overflow-hidden opacity-20">
        <p
          className={`${logoFont.className} z-10 overflow-hidden text-center text-[240px]`}
        >
          EVOLUTION
        </p>
      </div>

      {/* Grid Lines */}
      <div className="absolute left-0 right-0 m-auto grid w-full max-w-6xl grid-cols-5">
        <div className="h-screen w-[1px] bg-white bg-opacity-0" />
        <div className="h-screen w-[1px] bg-white bg-opacity-10" />
        <div className="h-screen w-[1px] bg-white bg-opacity-10" />
        <div className="h-screen w-[1px] bg-white bg-opacity-10" />
        <div className="h-screen w-[1px] bg-white bg-opacity-10" />
      </div>

      {/* Content Division */}
      <div
        className={`${textFont.className} absolute left-0 right-0 m-auto h-screen w-full max-w-6xl`}
      >
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-16 py-4 text-sm text-black backdrop-blur-lg">
          <div className="flex gap-9">
            <p>Technology</p>
            <p>Service</p>
            <p>Careers</p>
          </div>
          <div>
            <p className={`${logoFont.className} text-center text-xl`}>
              EVOLUTION
            </p>
          </div>
          <div className="flex justify-end gap-9">
            <p>Overview</p>
            <p>Features</p>
            <p>Search</p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-10 items-end px-16">
          <p
            className={`text-8xl uppercase ${logoFont.className} col-span-7 drop-shadow-2xl`}
          >
            Lets try power{" "}
          </p>
          <p className="col-span-3">
            The engineering calculation have arrived at 0-60 in 1.7s and 0-100
            in 2.8s, 600hp and a 650-mile range.
          </p>
        </div>

        <div className="mt-96 grid grid-cols-10 items-end px-16">
          <div className="col-span-2" />
          <p className="col-span-3">
            Based on the STLA Large electric platform, which the company has
            previously said will have batteries from 101 to 120kWh and can run
            at 800 volts.
          </p>
          <div className="col-span-2" />
          <div className="col-span-3 flex items-center">
            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                height={20}
                width={20}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </div>
            <p className="leading-5">
              Discover the
              <br /> Evolution
            </p>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-8 m-auto flex h-[116px] w-5 max-w-6xl flex-col justify-between">
          <p className="ml-1 rotate-90">Scroll&nbsp;Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width={20}
            height={20}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
