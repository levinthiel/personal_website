
import Image from 'next/image'
import styled from "styled-components";

export default function Languages({ t, setLang, lang }) {
    return (
        <LanguaguesSection>
            <h2>{t("languages")}</h2>
            <FlagContainer>
                <Language>
                    <Image
                        src="/fr-flag.svg"
                        width={20}
                        height={20}
                        alt="Drapeau Francais"
                        title="Francais"
                    />
                    <p>Native</p>
                </Language>
                <Language>
                    <Image
                        src="/de-flag.svg"
                        width={20}
                        height={20}
                        alt="Detusche Flagge"
                        title="Deutsch"
                    />
                    <p>Native</p>
                </Language>
                <Language>
                    <Image
                        src="/en-flag.svg"
                        width={20}
                        height={20}
                        alt="English Flag"
                        title="English"
                    />
                    <p>Fluent</p>
                </Language>
                <Language>
                    <Image
                        src="/es-flag.svg"
                        width={20}
                        height={20}
                        alt="Spanish Flag"
                        title="Español"
                    />
                    <p>intermediate</p>
                </Language>
            </FlagContainer>
        </LanguaguesSection>
    )
}
const LanguaguesSection = styled.div `
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
const FlagContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--white);
    border-radius: 12px;
`;
const Language = styled.div `
    display: flex;
    gap: 8px;

    img {
        transition: all ease .3s;
    }

    &:hover {
        img {
            transform: rotate(360deg);
        }
    }
`;