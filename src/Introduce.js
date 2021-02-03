import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import hongikImg from "./img/academy/hongik.png";
import kookminImg from "./img/academy/kookmin.png";
import opentutorialsImg from "./img/academy/opentutorials.png";
import nomadImg from "./img/academy/nomad.png";
import zeroImg from "./img/academy/zero.png";
import spartaImg from "./img/academy/sparta.png";

const Introduce = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Introduce 👦🏻");
    const [SubTitle, setSubTitle] = React.useState("소개");
    return(
        <IntroComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            
            <BodyContent>
                안녕하세요 ! 🤚🏼 저는 중국 션전에서 중국학교와 국제학교 중고등학교를 마치고, 홍익대학교 경영학과 학사를 졸업한 뒤, 국민대 소프트웨어융합학과에서 블록체인 트랙을 석사 전공중입니다. 학사과정 중, 우연히 접한 "명견만리"라는 프로를 통해 알게된 암호화폐와 블록체인 기술에 대한 강연을 듣고나서 암호화폐에 관심이 생겨 암호화폐 투자에 집중했습니다. 이후, 학사를 졸업할 쯤 블록체인에 대해 호기심이 생겨 코딩 공부를 시작하면서 대학원에 진학했습니다. 비전공자에서 코딩공부를 시작하려니 막막했고, 주변에서 추천해준 "생활코딩" 사이트를 통해 코딩공부를 시작했습니다. 이후 좀 더 나아가 다양한 "노마드코더", "스파르타코딩클럽", "제로초" 등 다양한 강의들을 통해 Mongo, Express, Node, React를 통한 웹개발을 공부하고 있습니다. 주로 웹개발과 블록체인에 관심이 많으며, 여유시간에는 영화감상을 즐겨합니다. 😄 
            </BodyContent>

            <ImgContent>
                <ImgBox src={hongikImg} />
                <ImgBox src={kookminImg} />
                <ImgBox src={opentutorialsImg} />
                <ImgBox src={nomadImg} />
                <ImgBox src={zeroImg} />
                <ImgBox src={spartaImg} />
            </ImgContent>

        </IntroComponent>
    )
}

const IntroComponent = styled.div`
    margin-left: 25%;
    height: 100%;
    width: 75%;
`;

const BodyContent = styled.div`
    margin-right: 12px;
    font-size: 25px;
    line-height: 150%;
`;

const ImgContent = styled.div`
    width: 75%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
`;

const ImgBox = styled.img`
    width: 100px;
    height: 100px;
    border: 1px dashed lightgray;
    border-radius : 50px;
    margin-bottom: 35px;
`;

export default Introduce;