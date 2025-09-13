// components/Skills.js
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Skills({ t, setLang, lang }) {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight+20}px` : "0px");
        }
    }, [isOpen]);

    function toggle() {
        setIsOpen((s) => !s);
    }

    return (
        <SkillsContainer>
            <HeaderBar>
                <h2>{t("skillsH2")}</h2>

                <ToggleButton
                onClick={toggle}
                aria-expanded={isOpen}
                title={isOpen ? "Collapse" : "Expand"}
                $open={isOpen}
                >
                {/* simple chevron svg */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                    <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </ToggleButton>
            </HeaderBar>

            <ContentWrapper style={{ maxHeight }} ref={contentRef} $open={isOpen}>
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

/* Styled components */

const SkillsContainer = styled.div`
    width: 100%;
    background: var(--white);
    padding: 0; /* header handles padding */
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    overflow: visible;
`;

/* Header bar that always shows (title + chevron) */
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


const ToggleButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform 200ms ease, background 150ms ease;
    color: var(--text, #111);             

    &:hover {
    background: rgba(0, 0, 0, 0.04);
    }

  /* rotate the chevron when open (downwards) */
    svg {
        transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
        transition: transform 200ms ease;
    }
`;

/* Animated content wrapper — we animate max-height for simple smooth collapse */
const ContentWrapper = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    transition: max-height 300ms ease, opacity 200ms ease, padding 300ms ease;
    opacity: ${(p) => (p.$open ? 1 : 0)};
    padding: ${(p) => (p.$open ? "0px 40px 24px" : "0 40px")};

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
