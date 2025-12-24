import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

export default function Jobs({id, t, setLang, lang }) {
    return (
        <JobsContainer id={id}>
            <h2>{t("jobsH2")}</h2>
            <Jobz>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job1_title")}</h3>
                        <p>{t("job1_company")}</p>
                        <Location><FaLocationDot />{t("job1_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job1_description1")}</li>
                        <li>{t("job1_description2")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job2_title")}</h3>
                        <p>{t("job2_company")}</p>
                        <Location><FaLocationDot />{t("job2_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job2_description1")}</li>
                        <li>{t("job2_description2")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job3_title")}</h3>
                        <p>{t("job3_company")}</p>
                        <Location><FaLocationDot />{t("job3_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job3_description1")}</li>
                        <li>{t("job3_description2")}</li>
                        <li>{t("job3_description3")}</li>
                        <li>{t("job3_description4")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job4_title")}</h3>
                        <p>{t("job4_company")}</p>
                        <Location><FaLocationDot />{t("job4_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job4_description1")}</li>
                        <li>{t("job4_description2")}</li>
                        <li>{t("job4_description3")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job5_title")}</h3>
                        <p>{t("job5_company")}</p>
                        <Location><FaLocationDot />{t("job5_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job5_description1")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job6_title")}</h3>
                        <p>{t("job6_company")}</p>
                        <Location><FaLocationDot />{t("job6_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job6_description1")}</li>
                    </JobDescription>
                </Job>
                <Job>
                    <JobTitleandInfos>
                        <h3>{t("job7_title")}</h3>
                        <p>{t("job7_company")}</p>
                        <Location><FaLocationDot />{t("job7_location")}</Location>
                    </JobTitleandInfos>
                    <JobDescription>
                        <li>{t("job7_description1")}</li>
                        <li>{t("job7_description2")}</li>
                    </JobDescription>
                </Job>
            </Jobz>
        </JobsContainer>
    )
}
const JobsContainer = styled.section`
    background-color: var(--white-through);
    border-radius: 12px;
    margin-top: 16px;
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

    @media (max-width: 576px) {
        flex-direction: column;
        padding-left: 24px;
        font-size: 16px;

        h3 {
            font-size: 16px;
        }
    }
`;
const JobTitleandInfos = styled.div`
    min-width: 300px;

    @media (max-width: 576px) {
        min-width: 246px;
    }
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
