import styled from "styled-components"

export default function Trainings() {
    return (
        <TrainingsContainer>
            <h2>Trainings / Courses</h2>
            <CourseContainer>
                <div>
                    <h3>Web Developer </h3>
                    <p>@Neue Fische (2024)</p>
                </div>
                <div>
                    <h3>Web Developer </h3>
                    <p>@Neue Fische (2024)</p>
                </div>
                <div>
                    <h3>Web Developer </h3>
                    <p>@Neue Fische (2024)</p>
                </div>
                <div>
                    <h3>Web Developer </h3>
                    <p>@Neue Fische (2024)</p>
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