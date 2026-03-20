"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-white font-semibold text-lg">
          Jordan AI
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/#projects" className="hover:text-white">Projects</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </div>

      </div>
    </nav>
  );
}