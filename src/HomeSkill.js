import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import htmlImg from "./img/stack/html.png";
import cssImg from "./img/stack/css.png";
import jsImg from "./img/stack/js.png";
import mysqlImg from "./img/stack/mysql.png";
import mongoImg from "./img/stack/mongo.png";
import nodeImg from "./img/stack/node.png";
import reactImg from "./img/stack/react.png";

const HomeSkill = (props) => {
    return(
        <SkillsComponent>
        <div>
            <Title>My Technical Skills</Title>
            <SubTitle>Primary Focus on Node.js | Express</SubTitle>
        </div>
        <ImageContainer>
            <ImgContentRow>
                <div>
                    <ImgBox src={htmlImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={cssImg} />
                    <ProgressBar progress="60%"/>
                </div>
                <div>
                    <ImgBox src={jsImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={mysqlImg} />
                    <ProgressBar progress="50%"/>
                </div>
                <div>
                    <ImgBox src={mongoImg} />
                    <ProgressBar progress="50%"/>
                </div>
                <div>
                    <ImgBox src={nodeImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={reactImg} />
                    <ProgressBar progress="60%"/>
                </div>
            </ImgContentRow>
        </ImageContainer>
        </SkillsComponent>
    )
}

const SkillsComponent = styled.div`
    margin-top: 50px;
    border: 1px solid black;
    height: 100vh;
`;

const Title = styled.div`
    text-align: center;
    font-size: 55px;
    font-weight: 600;
`;

const SubTitle = styled.div`
    text-align: center;
    font-style: italic;
`;

const ImageContainer = styled.div`
    border: 1px solid red;
    margin-top: 10vh;
`;

const ImgContentRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ImgBox = styled.img`
    width: 80px;
    height: 80px;
`;




export default HomeSkill;