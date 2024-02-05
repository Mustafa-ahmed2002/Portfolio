"use client";
import React, { useState } from "react";
import Linkedin from "../../../public/images/linkedin-icon.svg";
import GithubIcon from "../../../public/images/github-icon.svg";
import Link from "next/link";
import Image from "next/image";
const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      style={{ marginBottom: 0 }}
    >
      <div>
        <h5 className="text-2xl font-bold my-2 text-white">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m actively seeking exciting opportunities to contribute my
          skills and creativity to innovative projects. 💼 If you or your
          company are on the lookout for a motivated and skilled frontend
          developer, I&apos;d love to connect. I bring a solid foundation in
          both frontend and backend technologies, coupled with a commitment to
          crafting visually appealing and user-friendly applications.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Mustafa-ahmed2002"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mustafa-abdulrazzaq/"
          >
            <Image src={Linkedin} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div>
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            aria-describedby="emailHelp"
            name="email"
            type="email"
            id="email"
            required
            placeholder="Ron@google.com"
            className=" bg-[#18191E] border-[33353F] placeholder-[#9CA2A9] text-gray-50 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-white block text-sm mb-3 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className=" bg-[#18191E] border-[33353F] placeholder-[#9CA2A9] text-gray-50 text-sm rounded-lg block w-full  p-20 "
            placeholder="Your message"
            style={{
              paddingTop: "0.375rem",
              marginTop: "-0.375rem",
              paddingLeft: "0.375rem",
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Submit
        </button>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">Email sent successfully</p>
        )}
      </form>
    </section>
  );
};

export default Email;
