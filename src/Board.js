import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Board = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Board");
    const [SubTitle, setSubTitle] = React.useState("게시판");
    return(
        <BoardComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <WrittenComponent>
                <WrittenContent>댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용</WrittenContent>
                <WrittenInfo>
                    <div>2021-01-30</div>
                    <div>작성자</div>
                </WrittenInfo>
            </WrittenComponent>
            <UserInputComponent>
                <InputBlank type="text" placeholder="한마디 남겨주세요🙋‍♂️"/>
                <SubmitBtn>댓글남기기</SubmitBtn>
            </UserInputComponent>
        </BoardComponent>
    )
}

const BoardComponent = styled.div`
    margin-left: 33%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const UserInputComponent = styled.div`
    position: fixed;
    bottom: 20px;
    align-self: center;
    opacity: 0.4;
    &:hover{
        opacity: 1;
    }
`;

const InputBlank = styled.input`
    width: 60vh;
    border-radius: 25px;
    &:focus{
        outline: none;
    }
`;

const SubmitBtn = styled.button`
    height: 22px;
    border-radius: 25px;
    border: none;
    background-color: gray;
    color: white;
    &:hover{
        cursor: pointer;
        font-weight: 600;
    }
`;

const WrittenComponent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const WrittenContent = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

const WrittenInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: gray;
    min-width: 90px;
    text-align: center;
    font-style: italic;
    font-size: 10px;
`;

export default Board;