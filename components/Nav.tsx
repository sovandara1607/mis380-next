"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (pathname === href ? "active" : "");

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-code" />
        </div>
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <li>
            <Link className={isActive("/")} href="/">Home</Link>
          </li>
          <li>
            <Link className={isActive("/about")} href="/about">About</Link>
          </li>
          <li>
            <Link className={isActive("/casestudy")} href="/casestudy">Case Study</Link>
          </li>
          <li>
            <Link className={isActive("/contact")} href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={`nav-toggle ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}


