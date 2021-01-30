import React from "react";
import styled, {keyframes} from "styled-components";

const ProgressBar = (props) => {
    var percent = props.progress;
    return(
        <div className="ProgressBar">
            <Outer>
                <Inner percent={percent}></Inner>
            </Outer>
        </div>
    )
};

const progressEffect = keyframes`
    0%{
        width: 0px;
        background-color: green;
    }
    50%{
        width: ${(props)=> props.percent/2};
        background-color: blue;
    }
    100%{
        width: ${(props)=> props.percent};
        background-color: red;
    }
`;

const Outer = styled.div`
    border: none;
    border-radius: 25px;
    background-color: gray;
    width: 100%;
    height: 10px;
`;

const Inner = styled.div`
    border: none;
    border-radius: 25px;
    background-color: red;
    width: ${(props)=> props.percent};
    height: 10px;
    animation: ${progressEffect} 1s linear;
`;


export default ProgressBar;