import React from "react";
import styled from "styled-components";

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
`;

export default ProgressBar;