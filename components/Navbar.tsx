import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

         <Image
  src="/logo.png"
  alt="Artifex Logo"
  width={40}
  height={40}
  style={{ height: "auto" }}
/>
          <span className="text-xl font-bold tracking-wide highlight">
            ARTIFEX
          </span>

        </Link>

        {/* Navigation Links */}

        <div className="flex gap-8 font-medium subtext">

          <Link href="/" className="hover:text-[#37f3ff] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#37f3ff] transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-[#37f3ff] transition">
            Projects
          </Link>

          <Link href="/events" className="hover:text-[#37f3ff] transition">
            Events
          </Link>

          <Link href="/team" className="hover:text-[#37f3ff] transition">
            Team
          </Link>

          <Link href="/contact" className="hover:text-[#37f3ff] transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}