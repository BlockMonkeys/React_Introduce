import React from "react";
import styled, {keyframes} from "styled-components";

const ProgressBar = (props) => {
    var percent = props.progress;
    return(
        <div className="ProgressBar">
            <Outer>
                <Inner percent={percent}>
                    <PercentText>{percent}</PercentText> 
                </Inner>
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
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 12px;
`;

const Inner = styled.div`
    border: none;
    border-radius: 25px;
    background-color: red;
    width: ${(props)=> props.percent};
    height: 12px;
    animation: ${progressEffect} 1s 1s linear;
`;

const PercentText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 6px;
    color: white;
    font-style: italic;
`;


export default ProgressBar;