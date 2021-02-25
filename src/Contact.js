import React, { useEffect } from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import emailjs from 'emailjs-com';


const Contact = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Contact 📞");
    const [SubTitle, setSubTitle] = React.useState("연락처");

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('blockmonkey_intro', 'template_yso0hkq', e.target, 'user_svLZKWQ4EiAjYRCFIrAr0')
          .then((result) => {
              window.alert("✅ 감사합니다 성공적으로 전송되었습니다. 빠른시일 내에 답변드리겠습니다 ✅");
          }, (error) => {
              window.alert("❌ 전송에 실패했습니다, 새로고침 한 뒤, 다시 시도해주세요 ❌");
          });
      }


    useEffect(()=>{

    },[]);

    return(
        <ContactComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <EmailComponent>
                <EmailForm onSubmit={sendEmail}>
                    <Name_Email_Input type="text" placeholder="회신받을 이메일을 입력해주세요" name="from_name" />
                    <Text_Input cols="60" rows="20" placeholder="내용을 입력해주세요" name="message" />
                    <SubmitBtn type="submit" />
                </EmailForm>
            </EmailComponent>
            <FooterContent>
                <div>Email : blockmonkey@naver.com</div>
                <div>KakaoTalk : 00009042</div>
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
    @media (max-width: 1119px){
        width: 100%;
    }
`;

const ContactComponent = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    @media (max-width: 1119px){
        margin-left: 0;
        height: 80%;
    }
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
    @media (max-width: 1119px){
        font-size: 12px;
        text-align: center;
        width: 100%;
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
    @media (max-width: 1119px){
        font-size: 12px;
        text-align: center;
        width: 100%;
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
    @media (max-width: 1119px){
        width: 60%;
        &:hover{
            cursor: pointer;
            color: red;
        }
    }
`;


export default Contact;