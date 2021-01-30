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
    const [MainTitle, setMainTitle] = React.useState("Introduce");
    const [SubTitle, setSubTitle] = React.useState("소개");
    return(
        <IntroComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            
            <BodyContent>
                홍익대학교 경영학과 학사를 졸업하고, 국민대 소프트웨어융합학과에서 블록체인 트랙을 석사 전공중입니다. 학사과정 중, 우연히 접한 명견만리라는 프로를 통해 알게된 암호화폐와 블록체인 기술에 대한 강연을 듣고나서 2014년쯤 암호화폐에 관심이 생겨 투자에 발을 디뎠고, 학사를 졸업할 때는 본질적으로 블록체인에 대해 궁금증이 생겨 코딩 공부를 시작하면서 대학원에 진학했습니다. 처음에는 주변에서 많이 들었던 "생활코딩"을 통해 코딩을 시작했고 이후 자연스럽게 웹개발에 관심을 가지게 됐습니다. 처음에는 HTML CSS를 활용해 작은 웹사이트를 만들기 시작했고, "제로초"라는 강사의 강의로 Javascript를 배운뒤에는 웹에 이런저런 게임을 만들어 봤습니다. 그러다 보니 자연스럽게 또 서버에 대해 관심을 가지게 되었고, 생활코딩 커리큘럼 중 Nodejs & Express & MySQL 수업이 있어 공부하기 시작했습니다. 이렇게 첫발을 내딛은 뒤에는 조금씩 더 나은, 더 좋은, 더 많은 기능을 가진 사이트를 만들고자하는 욕심이 생겨 처음에는 블록체인 교육기관인 한국 블록체인 연구교육원(월튼블록체인연구교육원) 이후에, 노마드코더, 제로초, 벨로퍼트, 스파르타코딩클럽, 제주코딩베이스캠프 등을 통해 학습을 지속하고 있습니다.
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
    margin-left: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
`;

const BodyContent = styled.div`
    margin: 5px;
`;

const ImgContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ImgBox = styled.img`
    width: 100px;
    height: 100px;
    border: 1px dashed lightgray;
    border-radius : 50px;
    margin: 5px;
`;

export default Introduce;