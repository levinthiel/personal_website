import styled from "styled-components";
import Image from 'next/image'
import {projects} from '@/lib/projects'
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

export default function ProjectSlider() {

    const projectKeys = Object.keys(projects);
    const [currentId, setCurrentId] = useState(1);

    const handlePrev = () => {
        const prevId =
            currentId === Number(projectKeys[0])
                ? Number(projectKeys[projectKeys.length - 1])
                : currentId - 1;
        setCurrentId(prevId);
    };

    const handleNext = () => {
        const nextId =
            currentId === Number(projectKeys[projectKeys.length - 1])
                ? Number(projectKeys[0])
                : currentId + 1;
        setCurrentId(nextId);
    };

    const currentProject = projects[currentId];



    return (
        <ProjectsContainer>
            <ImageContainer>
                <ImageName>
                    {currentProject.name}
                    <a href={currentProject.url} target="_blank" rel="noopener noreferrer">
                        <FaArrowCircleRight />
                    </a>
                </ImageName>
                <Image
                    src={currentProject.image}
                    width={650}
                    height={648}
                    alt={`${currentProject.name} Website Screenshot`}
                    title={currentProject.name}
                />
                <Tags>
                    {Object.values(currentProject.tags).map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </Tags>
                <SliderControls>
                    <button onClick={handlePrev}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button onClick={handleNext}>
                        <IoIosArrowDroprightCircle />
                    </button>
                </SliderControls>
            </ImageContainer>
        </ProjectsContainer>
    )
}
const ProjectsContainer= styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 12px;
    width: 100%;
    height: auto;
    background: var(--white-through);
    padding: 20px;
    border-radius: 12px;
    
`;
const ImageContainer= styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 4/3;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--grey);

    img {
        transition: all ease .3s;
        &:hover {
            transform: scale(1.2);
        }
    }
`;
const ImageName = styled.p`
    position: absolute;
    background-color: var(--white);
    padding: 0px 12px 12px 12px;
    top: 0;
    left: 0;
    z-index: 3;
    border-radius: 0 0 12px 0;
    display: flex;
    align-items: center;
    gap: 12px;

    a {
        color: var(--blue);
    }

    &::after {
        content: url('corner.png');
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        right: -18px;
        top: 0;
        transform: rotate(90deg);
    }
    &::before {
        content: url(corner.png);
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        left: 2px;
        top: 36px;
        transform: rotate(90deg);
    }
`;
const Tags=styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 12px;
    display: flex;
    gap: 5px;
    
    li {
        background: var(--blue);
        color: var(--white);
        border-radius: 15px;
        padding: 2px 12px;
        display: none;

        @media (max-width: 415px) {
            &:nth-child(-n + 2) {
                display: block;
            } 
        }
        @media (min-width: 415px) {
            &:nth-child(-n + 3) {
                display: block;
            } 
        }
        @media (min-width: 600px) {
            display: block;
        }
    }
`;
const SliderControls =styled.div`
    padding: 12px;
    background: var(--white);
    border-radius: 12px 0 0 0;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    gap: 10px;

    button {
        color: var(--blue);
        cursor: pointer;

        svg {
            width: 24px;
            height: 24px;
            transition: all ease .3s;
    
            &:hover {
                transform: scale(1.1);
            }
        }
    }

        &::after {
        content: url('corner.png');
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        right: 0px;
        bottom: 48px;
        transform: rotate(270deg);
    }
    &::before {
        content: url(corner.png);
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        left: -17px;
        top: 32px;
        transform: rotate(270deg);
    }

`;