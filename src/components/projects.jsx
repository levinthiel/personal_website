import styled from "styled-components";
import Image from 'next/image'

export default function Projects({ t, setLang, lang }) {
    return (
        
        <ProjectsContainer>
            <TextContainer>
                <h2>{t("projectsH2")}</h2>
                <p>{t("projectsText")}</p>
            </TextContainer>
            <ProjectCardWrapper>
                    <ProjectCard>
                        <DemoLink href="https://forcefield-gray.vercel.app/" target="_blank" >
                            <Styledbutton type="button" $color="red">
                                Force Field Demo
                            </Styledbutton>
                        </DemoLink>
                        <DemoLink href="https://github.com/levinthiel/forcefield" target="_blank" >
                            <Styledbutton type="button" $color="red">
                                Force Field Repo
                            </Styledbutton>
                        </DemoLink>
                    </ProjectCard>
                    <ProjectCard>
                        <DemoLink href="https://rooted-capstone.vercel.app/home" target="_blank" >
                            <Styledbutton type="button" $color="green">
                                Rooted Demo
                            </Styledbutton>
                        </DemoLink>
                        <DemoLink href="https://github.com/StephMode/plant-pal" target="_blank" >
                            <Styledbutton type="button" $color="green">
                                Rooted Repo
                            </Styledbutton>
                        </DemoLink>
                    </ProjectCard>
            </ProjectCardWrapper>
        </ProjectsContainer>
)}
const DemoLink = styled.a`
    height: 100%;
    width: 100%;
`;
const ProjectsContainer= styled.div `
    margin-top: 12px;
    display: flex;
    gap: 12px;
    width: auto;
    height: 100%;
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
const ProjectCardWrapper = styled.div`
    gap: 12px;
    display: flex;
    flex-direction: column;
`;
const ProjectCard = styled.div`
    background: var(--white);
    padding: 12px;
    border-radius: 12px;
    min-width: 170px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: end;
    justify-content: space-between;
    height: 100%;

    &:hover {
        div {
            img {
                transform: scale(1.05);
            }
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
    border: 3px solid var(--blue);

    img {
        transition: all cubic-bezier(0.68, -0.6, 0.32, 1.6) .3s;
    }
`;
const Styledbutton = styled.button `
    width: 100%;
    height: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    background: ${(props) =>
    props.$color === "green"
        ? "#0C3B2E"
        : props.$color === "red"
        ? "#B41B06"
        : "#008CFF"};
    color: var(--white);
    padding: 5px 16px;
    border-radius: 7px;
    text-align: center;
    transition: all ease .3s;  
    justify-content: center;

    &:hover {
        opacity: 0.9;
    }

    svg {
        width: 20px;
        height: 20px;
        transition: all ease .3s;
    }
`;