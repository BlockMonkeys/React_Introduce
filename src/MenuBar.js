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
    const goExperience = () => {
        props.props.history.push('/experience');
    }
    const goProject = () => {
        props.props.history.push('/project');
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
            <Button onClick={goExperience}>Experience</Button>
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
    top: 20%;
    bottom: 20%;
    width: 25%;
    height: 100vh;
    display:flex;
    justify-content: flex-start;
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
    font-size: 40px;
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
    font-size: 18px;
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