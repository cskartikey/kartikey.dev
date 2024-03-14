"use client";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 bg-background-black">
      <div className="self-start">
        <h1 className="font-bold lg:text-7xl xl:text-8xl font-playfair text-3xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("Kartikey Singh Chauhan")
                .typeString('<span style="color: #008170;">.</span>')
                .callFunction((state) => {
                  state.elements.cursor.remove();
                })
                .start();
            }}
          />
        </h1>
        <p className="lg:text-lg font-poppins my-6 lg:w-4/6 text-base">
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
          ) as well . I have prior experience in{" "}
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
        <div className="flex flex-row gap-x-5 text-4xl">
          <Link
            href={"https://github.com/cskartikey"}
            className="hover:text-accent-green"
          >
            <Icon icon="mdi:github" />
          </Link>
          <Link
            href={"https://github.com/cskartikey"}
            className="hover:text-accent-green"
          >
            <Icon icon="mdi:instagram" />
          </Link>
          <Link
            href={"https://github.com/cskartikey"}
            className="hover:text-accent-green"
          >
            <Icon icon="mdi:linkedin" />
          </Link>
          <Link
            href={"https://github.com/cskartikey"}
            className="hover:text-accent-green"
          >
            <Icon icon="mdi:slack" />
          </Link>
        </div>
      </div>
    </main>
  );
}
