import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Project = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Project");
    const [SubTitle, setSubTitle] = React.useState("프로젝트");
    return(
        <ProjectComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
        </ProjectComponent>
    )
}

const ProjectComponent = styled.div`
    margin-left: 33%;
    display: flex;
    flex-direction: column;
`;

export default Project;