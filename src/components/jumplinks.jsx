import styled from "styled-components";
import { FaTools } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { IoPlanet } from "react-icons/io5";

export default function Jumplinks({ t, setLang, lang }) {
    return (
        <JumpLinks id="jumplinks">
            <LanguagesContainer>
                        <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
                        <button type="button" onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
                        <button type="button" onClick={() => setLang("de")} className={lang === "de" ? "active" : ""}>DE</button>
            </LanguagesContainer>
            <ul>
                <li>
                    <a href="#skills">
                        <FaTools title="Skills" /> 
                        <p>{t("skillsH2")}</p>
                    </a>
                </li>
                <li>
                    <a href="#languages">
                        <FaFlag title="Languages"/> 
                        <p>{t("languages")}</p>
                    </a>
                </li>
                <li>
                    <a href="#jobs">
                        <FaFileAlt title="Jobs" /> 
                        <p>{t("jobsH2")}</p>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <FaPalette title="Projects"/> 
                        <p>{t("projectsH2")}</p>
                    </a>
                </li>
                <li>
                    <a href="#trainings">
                        <IoMdSchool title="Training"/> 
                        <p>{t("trainingH2")}</p>
                    </a>
                </li>
                <li>
                    <a href="#hobbies">
                        <IoPlanet title="Hobbies"/> 
                        <p>{t("hobbies")}</p>
                    </a>
                </li>
            </ul>
        </JumpLinks>
    )
}
const JumpLinks = styled.aside`
    position: fixed;
    left: calc(50% + 375px + 12px);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px;
    top: calc(50% - 100px);
    z-index: 200;

    @media (max-width: 1180px) {
        left: auto;
        right:0;
        width: 40px;
        border-radius: 16px 0 0 16px;
        padding: 5px;

        ul {
            padding-top: 6px;
        }

        a {
            padding: 8px !important;
            p {
                display: none;
            }
        }
    }
    @media (max-width: 576px) {
        display: flex;
        top: auto;
        bottom: 0px;
        left: 6px;
        right: 6px;
        width: 97%;
        height: 50px;
        margin: auto;
        align-items: center;
        border-radius: 16px 16px 0 0 ;
        gap: 16px;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, .8);

        ul {
            display: flex;
            padding-top: 0;
            padding-right: 12px;
            gap: 12px;
            width: 100%;
            justify-content: space-between;
        }

        a {
            padding: 0px !important;

            svg {
                width: 22px !important;
            }
        }
    }

    a {
        border-radius: 16px;
        padding: 2px 8px;
        display: flex;
        align-items: center;
        transition: all ease .3s;
        gap: 7px;

        &:hover {
            transform: scale(1.05);
        }

        svg {
            fill: var(--blue);
            height: auto;
            width: 12px;
        }

        &:hover {
            background: var(--white);
        }
    }
`;
const LanguagesContainer = styled.div`
    display: flex;
    gap: 12px;
    padding: 3px 12px;

    @media (max-width: 1180px) {
        flex-direction: column;
        padding: 0;
        gap: 2px;
        padding-bottom: 6px;
        border-bottom: 2px solid white;
    }
    @media (max-width: 576px) {
        flex-direction: row;
        padding: 0;
        gap: 5px;
        border: 0;
        border-right: 1px solid lightgray;
        padding-right: 14px;
    }

        button {
            transition: all ease .3s;
            padding: 4px 6px;
            font-size: 13px; 

            &:hover{
                color: var(--blue);
            }
        }
`;