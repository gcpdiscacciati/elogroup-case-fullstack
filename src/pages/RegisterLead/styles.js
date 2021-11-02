import styled from 'styled-components';

export const Main = styled.div`
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    position: absolute;
    top: 10%;
    left: calc(50% - (1024px / 2));
    width: 800px;
    height: 500px;
    border: solid 2px black;
    padding: 15px;
`;

export const Logo = styled.img`
    width: 30%;
    float: left;
`;

export const Cabecalho = styled.div`
    height: 120px;
    text-align: center;
    line-height: 60px;
`;

export const Coluna = styled.div`
    float: left;
    width: 50%;
`;

export const Title = styled.h1`
    font-size: 30px;
    padding-top: 10px;
`;

export const Info = styled.h4`
    font-size: 12px;
    display: inline;
    margin-left: 10px;
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
    width: 70%;
    margin-left: 20px;
    margin-top: 10px;
    border: solid 2px black;
`;

export const Button = styled.button`
    display: inline;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #00BFFF;
    border: none;
    color: white;
    padding: 10px;
    text-decoration: none;
    &:hover{
        background-color: black;
        color: white;
    }

`;

export const TableArea = styled.div`

`;

export const PreTableArea = styled.div`
    text-align: left;
`;