import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import hongikImg from "./img/academy/hongik.png";
import kookminImg from "./img/academy/kookmin.png";
import opentutorialsImg from "./img/academy/opentutorials.png";
import nomadImg from "./img/academy/nomad.png";
import zeroImg from "./img/academy/zero.png";
import blockChainImg from "./img/academy/blockchain.png"

const Introduce = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Introduce 👦🏻");
    const [SubTitle, setSubTitle] = React.useState("소개");
    return(
        <IntroComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            
            <BodyContent>
                안녕하세요 ! 🤚🏼 저는 중국 션전에서 국제학교를 졸업하고, 홍익대학교 경영학과 학사를 졸업한 뒤, 국민대 소프트웨어융합학과에서 블록체인 석사과정을 전공중입니다. 학사에 재학 당시, 우연히 접한 "명견만리"라는 프로를 통해 알게된 암호화폐와 블록체인에 대한 강연을 듣고나서 암호화폐에 관심이 생겨 암호화폐 투자를 시작했습니다. 학사를 졸업할 쯤, 블록체인에 대해 호기심이 생겨 "한국블록체인연구교육원"에서 수업을 들으며 코딩에 입문했습니다. 하지만, 전공자가 아닌 입장에서 코딩을 하려니 너무나도 막막했고 어려웠습니다. 하지만, 코딩 자체는 흥미로웠습니다. 마치 어렸을 때 즐겨하던 블록놀이 같은 기분이 들었습니다. 그래서 프로그래밍에 대해 좀 더 깊이있게 공부해보고자 대학원 진학을 결심하고 국민대학교 소프트웨어융합대학원으로 진학하면서 동시에 "생활코딩", "노마드코더", "제로초" 등등 여러 유명 강사의 강의를 들으며 공부를 시작했습니다. 입문자를 위한 블록체인 프로그래밍 강의는 찾기 어려웠고, 웹개발에 대한 강의는 비교적 많은 것 같아 웹개발로 코딩에 입문했습니다. 그렇게 자연스레 HTML, CSS, Javascript 등을 접하고, 더 나아가 React, Nodejs, Express, MySQL, MongoDB 등을 공부해 웹사이트를 만들며 코딩에 더욱 재미를 느끼기 시작했습니다. 앞으로도 꾸준히 초심을 지키며 계속 앞으로 더 나아가 블록체인 개발자가 되기위해 계속 정진해 나가고 싶습니다.
            </BodyContent>

            <ImgContent>
                <ImgBox src={hongikImg} />
                <ImgBox src={kookminImg} />
                <ImgBox src={opentutorialsImg} />
                <ImgBox src={nomadImg} />
                <ImgBox src={zeroImg} />
                <ImgBox src={blockChainImg} />
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
    font-size: 20px;
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