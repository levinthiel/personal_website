import styled from "styled-components";
import { IoPlanet } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import Image from 'next/image'

export default function Header({ t, setLang, lang }) {

    const handleClick = () => {
        const user = "levinthiel";
        const domain = "proton";
        const tld = "me";

        window.location.href = `mailto:${user}@${domain}.${tld}`;
    };

    return (
        <header>
            <TopHeader>
                <WelcomeContainer>
                    <Welcome> <IoPlanet /> {t("welcome")}</Welcome>
                </WelcomeContainer>
                <AvailabilityBubble className="active">{t("availability")}</AvailabilityBubble>
                <LanguagesContainer>
                    <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
                    <button type="button" onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
                    <button type="button" onClick={() => setLang("de")} className={lang === "de" ? "active" : ""}>DE</button>
                </LanguagesContainer>
            </TopHeader>
            <HeaderInner>
                <PortraitAndGreeting>
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
                </PortraitAndGreeting>
                <Description>
                    {t("introP2")}
                </Description>
                <CTAbtn onClick={handleClick}>
                    {t("ctaText")} <BsStars />
                </CTAbtn>
            </HeaderInner>
        </header>
    );
}

const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const WelcomeContainer = styled.div`
    --r: .8em;
    border-inline: var(--r) solid #0000;
    border-radius: calc(2 * var(--r)) calc(2 * var(--r)) 0 0 / var(--r);
    mask: radial-gradient(var(--r) at var(--r) 0, #0000 98%, #000 101%) calc(-1 * var(--r)) 100% / 100% var(--r) repeat-x, conic-gradient(#000 0 0) padding-box;
    border-left-width: 0;
    border-top-left-radius: var(--r);
    background: var(--white-through);
    width: fit-content;
    padding: 8px 9px 0px 8px;
`;
const Welcome = styled.p`
    display: flex;
    gap: 15px;
    align-items: center;
    background: linear-gradient(13deg, var(--blue), var(--pink));
    border-radius: 20px;
    color: var(--white);
    padding: 2px 12px;
    font-family: Inter;
    font-size: small;

        &:hover {
            svg{
                rotate: 360deg;
            }
        }
        svg {
            fill: var(--white);
            transition: all ease .3s
        }
`;
const AvailabilityBubble = styled.div`
    background: var(--white);
    border-radius: 14px;
    padding: 4px 15px 4px 32px;
    height: 27px;
    font-size: small;
    position: relative;
    align-items: center;
    display: none;

    &.active {
        display: flex;
    }

    &::before {
        content: "";
        position: absolute;
        left: 10px;
        width: 10px;
        height: 10px;
        background: var(--green);
        border-radius: 50%;
        z-index: 2;
    }

    &::after {
        content: "";
        position: absolute;
        left: 10px;
        width: 10px;
        height: 10px;
        background: var(--green);
        border-radius: 50%;
        animation: pulse 1.5s infinite;
        z-index: 1;
    }

    @keyframes pulse {
        0% {
        transform: scale(1);
        opacity: 0.8;
        }
        100% {
        transform: scale(2.5);
        opacity: 0;
        }
    }
`;
const LanguagesContainer = styled.div`
    display: flex;
    gap: 12px;
    padding: 4px 12px;

        button {
            transition: all ease .3s;
            padding: 0px 6px;
            font-size: 10px; 
            border-radius: 50%;

            &:hover{
                color: var(--blue);
                background: var(--white);
            }
        }

        @media (max-width: 576px) {
            display: none;
        }
`;
const HeaderInner = styled.div`
    width: 100%;
    background: var(--white-through);
    padding: 72px 40px 40px 40px;
    border-radius: 0 12px 12px 12px;

    @media screen and (max-width: 576px) {
        border-radius: 0px 12px 12px 12px;       
    }
`;
const PortraitAndGreeting = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 576px) {
        flex-direction: column;        
    }
`;
const ImageContainer = styled.div`
    min-width: 150px;
    display: flex;
    align-items: center;
    width: fit-content;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient( 222deg, var(--pink), var(--blue));
    transition:all ease .3s;

    &:hover {
        transform: scale(1.1) rotate(10deg);
    }

    img {
        border-radius: inherit;

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
    padding: 40px 0px;
`;
const CTAbtn = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(222deg, var(--pink), var(--blue), var(--pink));
    background-size: 200% 200%;
    background-position: 0% 50%;
    color: var(--white);
    border-radius: 26px;
    padding: 8px 32px;
    cursor: pointer;
    transition: background-position 0.6s ease, gap 0.3s ease, transform 0.3s ease;

    svg {
        rotate: 160deg;
        transition: transform 0.3s ease;
    }

    &:hover {
        background-position: 100% 50%;
        gap: 16px;
        transform: scale(1.1) rotate(-2deg);

        svg {
        transform: scale(1.3) rotate(350deg);
        }
    }
`;
