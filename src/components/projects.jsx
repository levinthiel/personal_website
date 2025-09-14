import styled from "styled-components";
import Image from 'next/image'

export default function Projects({ t, setLang, lang }) {
    return (
        <ProjectsContainer>
            <TextContainer>
                <h2>{t("projectsH2")}</h2>
                <p>{t("projectsText")}</p>
            </TextContainer>
            <ProjectCard>
                <ImageContainer>
                    <Image
                        src="/forcefield.png"
                        width={190}
                        height={190}
                        alt="Forcefield Logo"
                        title="Forcefield - Chronicles from the Edge - Science fiction short stories"
                    />
                </ImageContainer>
                <DemoLink href="https://forcefield-gray.vercel.app/" target="_blank">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        Demo
                    </button>
                </DemoLink>
            </ProjectCard>
        </ProjectsContainer>
)}

const ProjectsContainer= styled.div `
    margin-top: 12px;
    display: flex;
    gap: 12px;
    width: auto;
`;
const TextContainer = styled.div `
    background: var(--white);
    padding: 20px 40px;
    border-radius: 12px;
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const ProjectCard = styled.div`
    background: var(--white);
    padding: 12px;
    border-radius: 12px;
    min-height: 100%;
    min-width: 170px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: end;
    justify-content: space-between;

    &:hover {
        div {
            img {
                transform: scale(1.05);
            }
        }
        a {
            background-color: var(--darkblue);
        }
        svg {
            transform: translateX(5px);
        }
    }
`;
const ImageContainer = styled.div`
    border-radius: 7px;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #202020;

    img {
        transition: all cubic-bezier(0.68, -0.6, 0.32, 1.6) .3s;
    }
`;
const DemoLink = styled.a `
    background-color: var(--blue);
    color: var(--white);
    padding: 5px 16px;
    border-radius: 7px;
    text-align: center;
    transition: all ease .3s;
    cursor: pointer;
    
    button {
        color:inherit;
        display: flex;
        gap: 12px;
        align-items: center;
        cursor: pointer;
        

        svg {
            width: 20px;
            height: 20px;
            transition: all ease .3s;
        }
    }
`;