import styled from "styled-components";
import { IoPlanet } from "react-icons/io5";
import Image from 'next/image'

// Footer.jsx
export default function Header({ t, setLang, lang }) {
    return (
        <header>
            <TopHeader>
                <WelcomeContainer>
                    <Welcome> <IoPlanet /> {t("welcome")}</Welcome>
                </WelcomeContainer>
                <LanguagesContainer>
                    <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
                    <button type="button" onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
                    <button type="button" onClick={() => setLang("de")} className={lang === "de" ? "active" : ""}>DE</button>
                </LanguagesContainer>
            </TopHeader>
            <HeaderInner>
                <ImageContainer>
                    <Image
                        src="/portrait.png"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                        title="Hi, I'm Levin"
                    />
                </ImageContainer>
                <TextContainer>
                    <h1>
                        {t("introH1")}
                    </h1>
                    <p>
                        {t("introP")}
                    </p>
                </TextContainer>
            </HeaderInner>
            <Description>
                {t("introP2")}
            </Description>
        </header>
    );
}
const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const WelcomeContainer = styled.div`
`;
const Welcome = styled.p`
    display: flex;
    gap: 15px;
    align-items: center;
    --r: .8em;
    border-inline: var(--r) solid #0000;
    border-radius: calc(2 * var(--r)) calc(2 * var(--r)) 0 0 / var(--r);
    mask: radial-gradient(var(--r) at var(--r) 0, #0000 98%, #000 101%) calc(-1 * var(--r)) 100% / 100% var(--r) repeat-x, conic-gradient(#000 0 0) padding-box;
    border-left-width: 0;
    border-top-left-radius: var(--r);
    background: var(--white);
    width: fit-content;
    padding: 8px 24px 0px 20px;
    font-family: Inter;
    ;

        &:hover {
            svg{
                rotate: 360deg;
            }
        }
        svg {
            fill: var(--blue);
            transition: all ease .3s
        }
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
const HeaderInner = styled.div`
    width: 100%;
    background: var(--white);
    padding: 72px 40px 40px 40px;
    border-radius: 0px 12px 0 0;
    display: flex;
    gap: 40px;
    align-items: center;

    @media screen and (max-width: 576px) {
        flex-direction: column;        
    }
`;
const ImageContainer = styled.div`
    min-width: 150px;
    display: flex;
    align-items: center;
    width: fit-content;

    img {
        border-radius: 50%;
        border: solid 3px var(--blue);
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

        p {
            color: var(--blue);
        }
`;
const Description = styled.p `
    background-color: var(--white);
    padding: 0px 40px 40px 40px;
    border-radius: 0 0 12px 12px;
`;