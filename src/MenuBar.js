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
    const goContact = () => {
        props.props.history.push('/contact');
    }
    return(
        <Menubar>
            <AvatarImg src={img} onClick={goHome} />
            <Name onClick={goHome}>BlockMonkey</Name>
            <Button onClick={goIntro}>Introduce</Button>
            <Button onClick={goProject}>Project</Button>
            <Button onClick={()=>{
                window.open("https://blockmonkeys.tistory.com/", '_blank');
            }}>Blog</Button>
            <Button onClick={goContact}>Contact</Button>
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
    @media (max-width: 1119px){
        display: flex;
        position : fixed;
        top: 0px;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 6%;
        background-color: gray;
        opacity: 0.7;
        z-index: 1;
    }
`;

const AvatarImg = styled.img`
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 75px;
    align-self: center;
    @media (max-width: 1119px){
        width: 30px;
        height: 30px;
        align-self: none;
        &:hover{
            cursor: pointer;
        }
    }
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
    @media (max-width: 1119px){
        display: none;
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

    @media (max-width: 1119px){
        background-color: gray;
        color: white;
        padding: 0;
        &:last-child{
            margin-bottom: 0;
        }
    }
`;



export default MenuBar;