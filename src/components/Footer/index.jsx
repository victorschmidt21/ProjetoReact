import { Github, Instagram, Linkedin } from "lucide-react";

function TextFooter({ children }) {
  return <h1 className="font-bold text-white text-3xl">{children}</h1>;
}

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row space-y-2 md:space-y-0 h-24 items-center py-16 bg-slate-800">
      <div className="px-4 flex space-x-3">
        <a
          href="https://github.com/victorschmidt21"
          target="_blank"
          className="text-white"
        >
          <Github />
        </a>
        <a
          href="https://www.instagram.com/victorschmidt21/"
          target="_blank"
          className="text-white"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-schmidt-329827300/"
          target="_blank"
          className="text-white"
        >
          <Linkedin />
        </a>
      </div>
      <div className="flex flex-col items-center w-full justify-center bg-slate-800">
        <TextFooter>VTFLIX</TextFooter>
        <h2 className="font-bold text-white text-sm pb-4">
          Copyright © 2024 Victor Schmidt
        </h2>
      </div>
    </footer>
  );
}
