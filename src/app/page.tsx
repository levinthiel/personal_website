"use client"
import Footer from "@/components/footer";
import Main from "@/components/main";
import { useState } from "react";
import { texts } from "../lib/texts";

export default function Home() {
  const [lang, setLang] = useState("en");

  function t(key) {
    return texts[lang][key];
  }


  return (
    <div>
      <Main t={t} setLang={setLang} lang={lang} />
      <Footer/>
    </div>
  );
}
