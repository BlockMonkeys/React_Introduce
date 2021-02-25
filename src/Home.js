import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import HomeSkill from "./HomeSkill";
import backImg from "./img/back.jpg";

const Home = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Home 🧑🏻‍💻");
    const [SubTitle, setSubTitle] = React.useState("홈");
    return(
        <HomeComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle} />

            <MainContentsBox>
                <MainText>HELLO✋ I'm HANDONG LEE</MainText>
                <SubText>Back-end Software Engineer</SubText>
            </MainContentsBox>
            <HomeSkill />
            <Controller>
                <UpBtn onClick={()=>{
                    window.scrollTo({top: 0, behavior: "smooth"});
                }}>⬆️</UpBtn>
            </Controller>
        </HomeComponent>
    )
}

const MainContentsBox = styled.div`
    height : 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(rgba(0, 0, 255, 0.3), rgba(255, 0, 0, 0.3)), url(${backImg});
`;

const MainText = styled.div`
    color: white;
    font-weight: 800;
    font-size: 40px;
`;

const SubText = styled.div`
    color: white;
    font-style: italic;
`;

const HomeComponent = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1119px){
        margin-left: 0;
    }
`;

const Controller = styled.div`
    position: fixed;
    bottom: 5px;
    right: 5px;
`;

const UpBtn = styled.button`
    border: none;
    opacity: 0.3;
    width: 30px;
    height: 30px;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    &:focus{
        outline: none;
    }
`;


export default Home;