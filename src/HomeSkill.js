import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import htmlImg from "./img/stack/html5.png";
import cssImg from "./img/stack/css3.png";
import jsImg from "./img/stack/javascript.png";
import mysqlImg from "./img/stack/mysql.png";
import mongoImg from "./img/stack/mongodb.png";
import nodeImg from "./img/stack/nodejs.png";
import pugImg from "./img/stack/pug.png";
import reactImg from "./img/stack/react.png";
import gitImg from "./img/stack/git.png";
import githubImg from "./img/stack/github.png";
import expressImg from "./img/stack/express.png";
import sassImg from "./img/stack/sassscss.png";
import firebaseImg from "./img/stack/firebase.png";

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
                    <ProgressBar progress="90%"/>
                </div>
                <div>
                    <ImgBox src={nodeImg} />
                    <ProgressBar progress="90%"/>
                </div>
                <div>
                    <ImgBox src={expressImg} />
                    <ProgressBar progress="90%"/>
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
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={githubImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={reactImg} />
                    <ProgressBar progress="90%"/>
                </div>
            </ImgContentRow>
            <ImgContentRow>
                <div>
                    <ImgBox src={pugImg} />
                    <ProgressBar progress="90%"/>
                </div>
                <div>
                    <ImgBox src={firebaseImg} />
                    <ProgressBar progress="70%"/>
                </div>
                <div>
                    <ImgBox src={sassImg} />
                    <ProgressBar progress="50%"/>
                </div>
            </ImgContentRow>
        </ImageContainer>
        <Footer>
            <FooterTitle> ⚠️ 주관적인 판단하에 평가한 퍼센티지 입니다 😅 </FooterTitle>
        </Footer>
        </SkillsComponent>
    )
}


const SkillsComponent = styled.div`
    position: relative;
    margin-top: 50px;
    height: 100vh;
    @media (max-width: 1119px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const Header = styled.div`
    margin : 35px 0;
    border: none;
    @media (max-width: 1119px){
        margin: 0px 0px;
    }
`;

const Title = styled.div`
    text-align: center;
    font-size: 35px;
    font-weight: 600;
`;

const SubTitle = styled.div`
    text-align: center;
    font-style: italic;
`;

const ImageContainer = styled.div`
    width: 85%;
    margin : 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1119px){
        width: 100%;
        margin: 0px;
        margin-bottom: 60px;
    }
`;

const ImgContentRow = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
`;

const ImgBox = styled.img`
    width: 50px;
    height: 50px;
    @media (max-width: 1119px){
        width: 35px;
        height: 35px;
    }
`;

const Footer = styled.div`
    font-size: 14px;
    position: absolute;
    bottom: 30px;
    width: 100%;
    align-items: end;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const FooterTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
    font-style: italic;
    opacity: 0.5;
`;


export default HomeSkill;