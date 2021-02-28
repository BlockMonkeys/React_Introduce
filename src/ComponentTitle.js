import React from "react";
import styled from "styled-components";

const ComponentTitle = (props) => {
    const mainTitle = props.mainTitle;
    const subTitle = props.subTitle;
    return(
        <TitleComponent>
            <MainTitleContent>{mainTitle}</MainTitleContent>
            <SubTitleContent>{subTitle}</SubTitleContent>
        </TitleComponent>
    )
}

const TitleComponent = styled.div`
    margin : 35px 0;
    user-select: none;
`;

const MainTitleContent = styled.div`
    font-size: 35px;
    font-weight: 700;
`;

const SubTitleContent = styled.div`
    font-size: 12px;
    margin-left: 2px;
`;


export default ComponentTitle;