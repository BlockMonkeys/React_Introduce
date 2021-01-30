import React from "react";
import styled from "styled-components";
import img from "./img/avatar.png";

const MenuBar = (props) => {
    const goHome = () => {
        props.props.history.push('/');
    }
    const goIntro = () => {
        props.props.history.push('/intro');
    }
    const goProject = () => {
        props.props.history.push('/project');
    }
    const goBlog = () => {
        props.props.history.push('/blog');
    }
    const goContact = () => {
        props.props.history.push('/contact');
    }
    const goBoard = () => {
        props.props.history.push('/board');
    }
    return(
        <Menubar>
            <AvatarImg src={img} />
            <Name onClick={goHome}>BlockMonkey</Name>
            <Button onClick={goIntro}>Introduce</Button>
            <Button onClick={goProject}>Project</Button>
            <Button onClick={()=>{
                window.open("https://blockmonkeys.tistory.com/", '_blank');
            }}>Blog</Button>
            <Button onClick={goContact}>Contact</Button>
            <Button onClick={goBoard}>Board</Button>
        </Menubar>
    )
}

const Menubar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 33%;
    height: 100vh;
    display:flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: center;
`;

const AvatarImg = styled.img`
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 75px;
    align-self: center;
`;

const Name = styled.button`
    border: none;
    background-color: white;
    font-weight: 800;
    font-size: 25px;
    font-style: italic;
    margin-top: 28px;
    margin-bottom: 80px;
    &:hover{
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
`;

const Button = styled.button`
    color: gray;
    border: none;
    background-color: white;
    padding: 20px 0px;
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,0.1);
        color: black;
    }
    &:focus{
        outline: none;
    }
    &:last-child{
        margin-bottom: 50px;
    }
`;



export default MenuBar;