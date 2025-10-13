import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";

export default function Projects({id, t, setLang, lang }) {
    return (
        
        <ProjectsContainer id={id}>
            <ProjectTextandCard>
                <TextContainer>
                    <h2>{t("projectsH2")}</h2>
                    <p>{t("projectsText1")}</p>
                    <p>{t("projectsText2")}</p>
                </TextContainer>
            </ProjectTextandCard>
            <ProjectsButtons>
                <DemoLink href="https://forcefield-gray.vercel.app/" target="_blank" >
                    <Styledbutton type="button" $color="red">
                        Force Field Demo
                    </Styledbutton>
                </DemoLink>
                <DemoLink className="small" href="https://github.com/levinthiel/forcefield" target="_blank" >
                    <FaGithub />
                </DemoLink>
                <DemoLink href="https://rooted-capstone.vercel.app/home" target="_blank" >
                    <Styledbutton type="button" $color="green">
                        Rooted Demo
                    </Styledbutton>
                </DemoLink>
                <DemoLink className="small" href="https://github.com/StephMode/plant-pal" target="_blank" >
                    <FaGithub />
                </DemoLink>
            </ProjectsButtons>
        </ProjectsContainer>
)}
const DemoLink = styled.a`
    height: -webkit-fill-available;
    width: 45%;

    &.small {
        width: 10%;
        height: auto;
    }
`;
const ProjectsContainer= styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 12px;
    width: auto;
    height: 100%;
`;
const ProjectTextandCard = styled.div`
    display: flex;
    gap: 1rem;
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
const ProjectsButtons = styled.div`
    display: flex;
    padding: 0;
    background: none;
    gap: 12px;
    align-items: center;

    svg {
        width: 26px;
        height: auto;
        transition: all ease .3s;

        &:hover {
            transform: scale(1.05);
        }
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
        transform: scale(1.05);
    }

    svg {
        width: 20px;
        height: 20px;
        transition: all ease .3s;
    }
`;