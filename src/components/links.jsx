
import Image from 'next/image'
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function Links({ t, setLang, lang }) {
    return (
        <LanguaguesSection>
            <h2>You can find me here as well:</h2>
            <LinkContainer>
                <Link>
                    <a href='https://www.linkedin.com/in/levin-thiel/'>
                        <FaLinkedinIn />
                    </a>
                </Link>
                <Link>
                    <a href='https://github.com/levinthiel'>
                        <FaGithub />
                    </a>
                </Link>
                <Link>
                    <a href='https://open.spotify.com/user/grokek?si=5170e778b09a436a'>
                        <FaSpotify />
                    </a>
                </Link>
            </LinkContainer>
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
const LinkContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--white);
    border-radius: 12px;

    a{
        transition: all ease .3s;
        &:hover {
            color: var(--blue);
            transform: scale(1.2);
        }
    }

`;
const Link = styled.div `
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