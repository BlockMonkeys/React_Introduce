import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import htmlImg from "./img/stack/html5.png";
import cssImg from "./img/stack/css3.png";
import jsImg from "./img/stack/javascript.png";
import mysqlImg from "./img/stack/mysql.png";
import mongoImg from "./img/stack/mongodb.png";
import nodeImg from "./img/stack/nodejs.png";
import scssImg from "./img/stack/sassscss.png";
import reactImg from "./img/stack/react.png";
import gitImg from "./img/stack/git.png";
import githubImg from "./img/stack/github.png";
import expressImg from "./img/stack/express.png";

const HomeSkill = (props) => {
    return(
        <SkillsComponent>
        <Header>
            <Title>My Technical Skills</Title>
            <SubTitle>Primary Focus on Node.js | Express</SubTitle>
        </Header>
        <ImageContainer>
            <ImgContentRow>
                <div>
                    <ImgBox src={htmlImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={cssImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={jsImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={nodeImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={expressImg} />
                    <ProgressBar progress="70%"/>
                </div>
            </ImgContentRow>
            <ImgContentRow>
                <div>
                    <ImgBox src={mysqlImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={mongoImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={gitImg} />
                    <ProgressBar progress="50%"/>
                </div>
                <div>
                    <ImgBox src={githubImg} />
                    <ProgressBar progress="50%"/>
                </div>
                <div>
                    <ImgBox src={reactImg} />
                    <ProgressBar progress="60%"/>
                </div>
            </ImgContentRow>
        </ImageContainer>
        <Footer>
            <div>100% : 물아일체의 수준</div>
            <div>80% : 주요 코드를 암기한 수준</div>
            <div>70% : 검색하며 이용할 수 있는 수준</div>
            <div>50% : 사용해본 수준</div>
            <div>30% : 이해도만 있는 수준</div>
        </Footer>
        </SkillsComponent>
    )
}

const SkillsComponent = styled.div`
    position: relative;
    margin-top: 50px;
    height: 100vh;
    background-color: aliceblue;
`;

const Header = styled.div`
    border: none;
    background-color: floralwhite;
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
    margin-top: 10vh;
`;

const ImgContentRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`;

const ImgBox = styled.img`
    width: 60px;
    height: 60px;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: floralwhite;
    align-items: end;
`;



export default HomeSkill;