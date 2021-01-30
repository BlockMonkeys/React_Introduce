import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import ProgressBar from "./ProgressBar";
import htmlImg from "./img/stack/html.png";
import cssImg from "./img/stack/css.png";
import jsImg from "./img/stack/js.png";
import mysqlImg from "./img/stack/mysql.png";
import mongoImg from "./img/stack/mongo.png";
import nodeImg from "./img/stack/node.png";
import reactImg from "./img/stack/react.png";
import fullstackImg from "./img/stack/fullstack.jpg";
//메인이미지 바꿀것. Be a fullstack Developer


const Home = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Home");
    const [SubTitle, setSubTitle] = React.useState("홈");
    return(
        <HomeComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <MainImg src={fullstackImg} />
            
            <ImgContent>
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
            </ImgContent>
        </HomeComponent>
    )
}

const HomeComponent = styled.div`
    margin-left: 33%;
    display: flex;
    flex-direction: column;
`;

const ImgContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ImgBox = styled.img`
    width: 80px;
    height: 80px;
`;

const MainImg = styled.img`
    width: 600px;
    height: 400px;
    align-self: center;
    margin-bottom: 20px;
`;
export default Home;