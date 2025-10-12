import styled from "styled-components";
import Image from 'next/image'
import {projects} from '@/lib/projects'
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function ProjectSlider() {
    return (
        <ProjectsContainer>
            <ImageContainer>
                <ImageName>{projects[1].name}<a href={projects[1].url} target="_blank"><FaArrowCircleRight /></a></ImageName>
                <Image
                    src={projects[1].image}
                    width={650}
                    height={648}
                    alt={projects[1].name + " Website Screenshot"}
                    title={projects[1].name}
                /> 
                <Tags>
                    <li>Redesign</li>
                    <li>Redesign</li>
                    <li>Redesign</li>
                    <li>Redesign</li>
                    <li>Redesign</li>
                </Tags>
                <SliderControls>
                    <button>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button>
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
    margin-top: 12px;
    gap: 12px;
    width: 100%;
    height: auto;
    background: var(--white);
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