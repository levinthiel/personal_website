// components/Skills.js
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Skills({id, t, setLang, lang }) {

    return (
        <SkillsContainer id={id}>
            <HeaderBar>
                <h2>{t("skillsH2")}</h2>
            </HeaderBar>

            <ContentWrapper>
                <h3>{t("skillsgroup1")}</h3>
                <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vite</li>
                <li>Next.js</li>
                <li>WordPress</li>
                <li>GitHub/GitLab</li>
                <li>Git</li>
                <li>TYPO3</li>
                <li>TypoScript</li>
                <li>Bootstrap</li>
                <li>SCSS</li>
                <li>Vercel</li>
                <li>Docker</li>
                <li>MongoDB</li>
                </ul>

                <h3>{t("skillsgroup2")}</h3>
                <ul>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
                <li>{t("skillsgroup2item1")}</li>
                <li>{t("skillsgroup2item2")}</li>
                <li>{t("skillsgroup2item3")}</li>
                <li>{t("skillsgroup2item4")}</li>
                <li>{t("skillsgroup2item5")}</li>
                <li>{t("skillsgroup2item6")}</li>
                </ul>

                <h3>{t("skillsgroup3")}</h3>
                <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Kanban</li>
                <li>{t("skillsgroup3item1")}</li>
                <li>{t("skillsgroup3item2")}</li>
                <li>{t("skillsgroup3item3")}</li>
                <li>{t("skillsgroup2item5")}</li>
                <li>{t("skillsgroup2item6")}</li>
                </ul>

                <h3>{t("skillsgroup4")}</h3>
                <ul>
                <li>{t("skillsgroup4item1")}</li>
                <li>{t("skillsgroup4item2")}</li>
                <li>{t("skillsgroup4item3")}</li>
                <li>Rough</li>
                <li>Storyboarding</li>
                </ul>
            </ContentWrapper>
        </SkillsContainer>
    );
}

const SkillsContainer = styled.div`
    width: 100%;
    background: var(--white);
    padding: 0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    overflow: visible;
`;

const HeaderBar = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--white);
    border-radius: 12px;
    box-sizing: border-box;

    h2 {
        margin: 0;
    }
`;


const ContentWrapper = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    padding: 0px 40px 24px;

    h3:first-child {
        margin-top: 0 !important;
    }
    h3 {
        margin: 32px 0 16px;
    }

    ul {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;

        li {
        background: var(--lightblue);
        border-radius: 15px;
        padding: 2px 12px;
        transition: all ease 0.3s;

        &:hover {
            background: var(--blue);
            color: var(--white);
        }
        }
    }

    @media screen and (max-width: 576px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
