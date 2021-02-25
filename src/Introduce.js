import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Introduce = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Introduce 👦🏻");
    const [SubTitle, setSubTitle] = React.useState("소개");
    return(
        <IntroComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            
            <BodyContent>
                안녕하세요 ! 백엔드 개발자 이한동입니다. 저는 중국 션전에서 국제학교를 졸업하고, 홍익대학교 경영학과 학사를 졸업한 뒤, 2020년 3월에 국민대 소프트웨어융합학과에 입학해 블록체인트랙 석사과정을 전공중입니다. 학사에 재학 당시, 우연히 접한 "명견만리"라는 프로를 통해 알게된 암호화폐와 블록체인에 대한 강연을 듣고나서 암호화폐에 관심이 생겨 암호화폐 투자를 시작했습니다. 학사를 졸업할 쯤, 블록체인에 대해 호기심이 생겨 "한국블록체인연구교육원"에서 수업을 들으며 코딩에 입문했습니다. 하지만, 기초지식이 없는 상태로 수업을 따라가려니 어렵고, 잘 습득되지 않았습니다. 코딩 자체는 상상하는 무언가를 실제로 표현하는 마치 마법사가 된 기분이 들었습니다. 그렇게 흥미를 느낀 저는 프로그래밍에 대해 더 깊이있게 공부해보고자 대학원에 진학하고, 동시에 여러 온라인 개발 강의를 통해 웹개발과 블록체인에 관심을 가지고 학습중입니다.
            </BodyContent>
        </IntroComponent>
    )
}

const IntroComponent = styled.div`
    margin-left: 25%;
    height: 100%;
    width: 75%;
    @media (max-width: 1119px){
        width: 100%;
        margin-left: 0;
    }
`;

const BodyContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
    font-family: 'Nanum Pen Script', cursive;
    margin: 0 10px;
    font-size: 30px;
    line-height: 150%;
    @media (max-width: 800px){
        font-size: 25px;
    }
    @media (max-width: 555px){
        font-size: 20px;
    }
`;


export default Introduce;