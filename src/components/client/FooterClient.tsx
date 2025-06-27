'use client'

import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../Footer";

const FooterClient = () => {
  const path = usePathname();

  // Daftar prefix yang ingin menyembunyikan Navbar
  const hiddenPaths = ["/login", "/register", "/dashboard", "/chapter"];

  // Cek apakah path saat ini diawali salah satu dari hiddenPaths
  const shouldHideNavbar = hiddenPaths.some((prefix) => path?.startsWith(prefix));

  return <>{shouldHideNavbar ? null : <Footer />}</>;
};

export default FooterClient;
