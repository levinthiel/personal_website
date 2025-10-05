import styled from "styled-components"

export default function Trainings({ id, t, setLang, lang }) {
    return (
        <TrainingsContainer id={id}>
            <h2>{t("trainingH2")}</h2>
            <CourseContainer>
                <div>
                    <h3>{t("training1H3")}</h3>
                    <p>@Neue Fische (2024)</p>
                </div>
                <div>
                    <h3>{t("training2H3")}</h3>
                    <p>@Cimadata Akademie (2021)</p>
                </div>
                <div>
                    <h3>{t("training3H3")}</h3>
                    <p>@AFP Köln(2014)</p>
                </div>
                <div>
                    <h3>{t("training4H3")}</h3>
                    <p>@Ecole Pivaut (Nantes - FR) (2008-2012)</p>
                </div>
                <div>
                    <h3>{t("training5H3")}</h3>
                    <p>@Lycée J.Loth (Pontivy - FR) (2005-2008)</p>
                </div>
            </CourseContainer>
        </TrainingsContainer>
    )
}
const TrainingsContainer = styled.section`
    background-color: var(--white);
    padding: 20px 40px;
    border-radius: 12px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const CourseContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;