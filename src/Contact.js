import React, { useEffect } from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Contact = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Contact 📞");
    const [SubTitle, setSubTitle] = React.useState("연락처");
    useEffect(()=>{
        window.alert("아직 준비중이에요 😭");
    },[])
    return(
        <ContactComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <EmailComponent>
                <EmailForm>
                    <Name_Email_Input type="text" placeholder="성함을 입력해주세요 🐶" name="email_name" />
                    <Name_Email_Input type="email" placeholder="회신받을 이메일을 입력해주세요 🦜" name="email_email" />
                    <Text_Input cols="60" rows="10" placeholder="내용을 입력해주세요" name="email_text" />
                    <SubmitBtn type="submit" />
                </EmailForm>
            </EmailComponent>
            <FooterContent>
                <div>📨 : blockmonkey@naver.com</div>
                <div>📞 : 010 - 9042 - 5495</div>
            </FooterContent>
        </ContactComponent>
    )
}

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 75%;
    font-style: italic;
    font-size: 13px;
    font-weight: 600;
`;

const ContactComponent = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const EmailComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
`;

const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name_Email_Input = styled.input`
    width: 490px;
    height: 25px;
    font-size: 14px;
    padding: 5px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid black;
    &:focus{
        outline: none;
        border-bottom: 2px solid gray;
    }
`;

const Text_Input = styled.textarea`
    margin-top: 20px;
    border: none;
    background-color: rgba(255, 250, 240, 0.3);
    &:focus{
        outline: none;
        background-color: rgba(255, 250, 240, 0.8);
    }
`;

const SubmitBtn = styled.input`
    width: 500px;
    margin-top: 15px;
    border: none;
    background-color: black;
    color: white;
    font-size: 25px;
    padding: 5px;
    &:hover{
        cursor: pointer;

    }
`;


export default Contact;