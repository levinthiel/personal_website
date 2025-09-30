import styled from "styled-components";

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
                    <a href="#">
                        {t("skillsH2")}
                    </a>
                </li>
                <li>
                    <a href="#">
                        {t("languages")}
                    </a>
                </li>
                <li>
                    <a href="#">
                        {t("jobsH2")}
                    </a>
                </li>
                <li>
                    <a href="#">
                        {t("projectsH2")}
                    </a>
                </li>
                <li>
                    <a href="#">
                        {t("trainingH2")}
                    </a>
                </li>
                <li>
                    <a href="#">
                        {t("hobbies")}
                    </a>
                </li>
            </ul>
        </JumpLinks>
    )
}
const JumpLinks = styled.div`
    position: fixed;
    right: -172px;
    background: var(--white);
    border-radius: 12px;
    padding: 12px;
    top: 10%;
`;
const LanguagesContainer = styled.div`
    display: flex;
    gap: 12px;
    padding: 3px 12px;

        button {
            transition: all ease .3s;
            padding: 0px 5px;
            font-size: 13px; 

            &:hover{
                color: var(--blue);
            }
        }
`;