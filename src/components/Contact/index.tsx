"use client";

import Link from "next/link";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ContactForm } from "@/components";

export const Contact = () => {
  return (
    <section className="flex flex-col justify-center h-full line-bg">
      <div className="grid-overlay" />
      <div className="container mx-auto grid lg:grid-cols-2 justify-center lg:pt-20 pt-8 gap-x-12 content px-5">
        <div>
          <h2 className="md:text-3xl text-2xl font-medium mb-4 lg:pr-8 leading-[1.6]">
            Have feedback or an issue? <br /> Let us know!
          </h2>
          <p className="pr-12 leading-[1.6] text-text-gray">
            Help us improve Sandworm by reporting issues or <br /> sharing your
            insights.
          </p>
          <div className="flex space-x-6 mt-10">
            <Link
              href="https://github.com/sand-worm-sql"
              className="hover:text-white"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://discord.gg/pftQtpcjK2"
              className="hover:text-white"
              target="_blank"
            >
              <FaDiscord size={20} />
            </Link>
            <Link
              href="https://x.com/sandwormlabs"
              className="hover:text-white"
              target="_blank"
            >
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
