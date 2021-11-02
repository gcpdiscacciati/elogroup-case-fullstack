import styled from 'styled-components';

export const Main = styled.div`
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    position: absolute;
    top: 20%;
    left: calc(50% - 250px);
    width: 500px;
    border: solid 2px black;
    padding: 15px;
`;

export const Logo = styled.img`
    width: 100%;
`;

export const LogoDiv = styled.div`
    
`;

export const SmallerTitle = styled.h2`
    font-size: 18px;
`;

export const Form = styled.form`
    margin-top: 30px;
    width: 100%;
    
`;

export const Paragraph = styled.p`
    display: block;
`;

export const Label = styled.label`
    display: block;
    text-align: left;
    text-indent: 30px;
`
export const TextField = styled.input`
    display: block;
    font-size: 14px;
    width: 90%;
    margin-left: 20px;
    margin-top: 10px;
    border: solid 2px black;
    border-radius: 0;
`;

export const Button = styled.input`
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 460px;
    margin-top: 5px;
    background-color: white;
    border: solid 2px black;
    color: black;
    padding: 10px;
    text-decoration: none;
    &:hover{
        background-color: black;
        color: white;
    }

`;

export const Link = styled.a`
    display: block;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    color: black;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration: underline;
    }

`;