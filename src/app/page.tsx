"use client";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <main className="flex overflow min-h-screen flex-col items-center justify-between p-12 lg:p-24 lg:px-40 dark:bg-background-black dark:text-white">
      <div className="self-start">
        <h1 className="font-bold lg:text-7xl xl:text-8xl font-pricedown text-3xl">
          Kartikey S. Chauhan{" "}
          <span className="text-5xl text-accent-green">[he/him]</span>
        </h1>
        <p className="lg:text-2xl font-inter my-6 lg:mt-16 lg:w-4/6 text-base">
          Hey there! 👋🏼 Welcome to my little corner of the Internet! I'm
          Kartikey, currently a senior at{" "}
          <a
            href="https://en.wikipedia.org/wiki/City_Montessori_School"
            className="underline decoration-accent-green decoration-4 hover:no-underline hover:text-accent-green"
          >
            City Montessori School
          </a>
          . I am fasicnated by Computer Science, Mathematics and Origami.
          Recently, I've also developed an interest in Public Policy (shoutout
          to{" "}
          <span className="underline decoration-accent-green decoration-4 hover:no-underline hover:text-accent-green">
            YLAC
          </span>
          ) as well. I have prior experience in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Open-source_intelligence"
            className="underline decoration-accent-green decoration-4 hover:no-underline hover:text-accent-green"
          >
            OSINT
          </a>{" "}
          and have voluntered at{" "}
          <a
            href=""
            className="underline decoration-accent-green decoration-4 hover:no-underline hover:text-accent-green"
          >
            Trace Labs
          </a>
          , both as a Judge and Participant. I enjoy coding competively and I am
          candiate master on{" "}
          <a
            href="https://codefoces.com/"
            className="underline decoration-accent-green decoration-4 hover:no-underline hover:text-accent-green"
          >
            Code Forces
          </a>
        </p>
        <div>PS: Some facts about me: As of</div>
        <div className="flex flex-row p-3 font-semibold text-md bg-accent-green w-28 font-inter rounded-lg items-center justify-center text-md border-zinc-700 border hover:scale-105 mt-12">
          Contact
          <Icon icon="maki:arrow" className="mx-1" />
        </div>
      </div>
    </main>
  );
}
