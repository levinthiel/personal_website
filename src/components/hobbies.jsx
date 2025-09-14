
import Image from 'next/image'
import styled from "styled-components";

export default function Hobbies({ t, setLang, lang }) {
    return (
        <HobbiesSection>
            <h2>{t("hobbies")}</h2>
            <p>{t("hobbiesText")}</p>
        </HobbiesSection>
    )
}
const HobbiesSection = styled.div `
    margin-top: 12px;
    padding: 20px 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--white);
    border-radius: 12px;
`;