import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Contact = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Contact");
    const [SubTitle, setSubTitle] = React.useState("연락처");
    return(
        <ContactComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
        </ContactComponent>
    )
}

const ContactComponent = styled.div`
    margin-left: 33%;
    display: flex;
    flex-direction: column;
`;

export default Contact;