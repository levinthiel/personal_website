'use client'
import styled from "styled-components";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Quote from "@/components/quote";
import Languages from "@/components/languages";
import Hobbies from "@/components/hobbies";
import Projects from "@/components/projects"
import ProjectSlider from "@/components/projectslider"
import Links from "@/components/links"
import Jumplinks from "@/components/jumplinks"
import Jobs from "@/components/jobs"
import Trainings from "@/components/trainings"

// Footer.jsx
export default function Main({ t, setLang, lang }) {
  return (
    <>
      <Jumplinks  t={t} setLang={setLang} lang={lang}/>
      <StyledMain>
        <Header                     t={t} setLang={setLang} lang={lang}/>
        <Skills     id="skills"     t={t} setLang={setLang} lang={lang}/>
        <Quote                      t={t} setLang={setLang} lang={lang}/>
        <Languages  id="languages"  t={t} setLang={setLang} lang={lang}/>
        <Jobs       id="jobs"       t={t} setLang={setLang} lang={lang}/>
        <ProjectSlider              t={t} setLang={setLang} lang={lang}/>
        <Projects   id="projects"   t={t} setLang={setLang} lang={lang}/>
        <Trainings  id="trainings"  t={t} setLang={setLang} lang={lang}/>      
        <Hobbies    id="hobbies"    t={t} setLang={setLang} lang={lang}/>
        <Links                      t={t} setLang={setLang} lang={lang}/>  
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  z-index: 10;
  margin: 40px auto;
  max-width: 750px; 
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px;

  @media (max-width: 576px) {
    margin-top: 0;
  }
`; 
