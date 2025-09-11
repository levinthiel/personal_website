'use client'
import styled from "styled-components";
import Header from "@/components/header";
import Skills from "@/components/skills";

// Footer.jsx
export default function Main({ t, setLang, lang }) {
  return (
    <StyledMain>
      <Header t={t} setLang={setLang} lang={lang}/>
      <Skills/>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin: 40px auto;
  max-width: 750px; 
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px;
`; 
