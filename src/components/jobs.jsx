import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

export default function Jobs({ t, setLang, lang }) {
    return (
        <JobsContainer>
            <h2>Work Experience</h2>
            <Jobz>
                <Job>
                    <JobTitleandInfos>
                        <h3>UX/UI Designer & Web Developer</h3>
                            <p>Network Publishing GmbH</p>
                            <Location><FaLocationDot /> Cologne (Hybrid)  - 2025</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>Creation of modern, user-friendly & accessible designs</li>
                        <li>Integration and adaptation of designs in TYPO3 using TypoScript, HTML and SCSS (responsive design)</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>UX/UI Designer & Web Developer</h3>
                            <p>Network Publishing GmbH</p>
                            <Location><FaLocationDot /> Cologne (Hybrid)  - 2025</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>Creation of modern, user-friendly & accessible designs</li>
                        <li>Integration and adaptation of designs in TYPO3 using TypoScript, HTML and SCSS (responsive design)</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>UX/UI Designer & Web Developer</h3>
                            <p>Network Publishing GmbH</p>
                            <Location><FaLocationDot /> Cologne (Hybrid)  - 2025</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>Creation of modern, user-friendly & accessible designs</li>
                        <li>Integration and adaptation of designs in TYPO3 using TypoScript, HTML and SCSS (responsive design)</li>
                    </JobDescription>
                </Job>
            </Jobz>
        </JobsContainer>
    )
}
const JobsContainer = styled.section`
    background-color: var(--white);
    border-radius: 12px;
    margin-top: 12px;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Jobz = styled.div``;
const Job = styled.div`
    display: flex;
    gap: 16px;
    border-radius: 12px;
    padding: 16px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:nth-child(even) {
        background-color: var(--lightblue);
    }
`;
const JobTitleandInfos = styled.div`
    min-width: 300px;
`;
const Location = styled.p`
    display: flex;
    color: var(--blue);
    font-size: small;
    align-items: baseline;
    gap: 5px;
`;
const JobDescription = styled.ul`
    li {
        font-size: small;
        list-style: disc;

        &::marker {
            color: var(--blue);
        }
    }
`;
