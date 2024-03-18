"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-12 lg:p-24 dark:bg-background-black dark:text-white">
      <div className="flex flex-row gap-x-5 text-4xl self-start">
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
    </footer>
  );
}
