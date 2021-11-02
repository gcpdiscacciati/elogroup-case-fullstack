import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Main, Form, Label, Button, Paragraph, TextField, Link, Logo, LogoDiv } from './styles';
import logo from '../../images/logoBW.jpg'

// Página de Login do Usuário. Percorre o local storage do navegador para encontrar
// o registro do usuário.
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const history = useHistory();
    
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setSenha(event.target.value);
    }

    // Função que lida com o login. Percorre a lista de usuários armazenada no
    // local storage para encontrar o registro. Caso encontre e a senha esteja
    // correta, autentica o usuário e o redireciona para a página principal
    // da aplicação. 
    function handleLogin(event){
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('listaUsers'));
        let encontrou = 0;
        for(let i = 0; i < users.length; i++){
            if(users[i].email === email){
                encontrou = 1;
                if(users[i].password === password){
                    localStorage.setItem('auth', true);
                    history.push('/home');
                }
                else{
                    alert('Senha incorreta!');
                }
                return;
            }
        }
        
        if(encontrou === 0){
            alert('Usuário não encontrado!');
            return;
        }
       
    }

    return(
        <Main>
            <LogoDiv id='logo'><Logo src={logo} alt='Logo da Elogroup, com um fundo preto e letras brancas.'/></LogoDiv>
            <Form onSubmit={handleLogin}>
                <Paragraph>
                    <Label>
                        Usuário*
                        <TextField type='text' value={email} placeholder='lorem@ipsum.com' onChange={handleEmail} required/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Password*
                        <TextField type='password' value={password} placeholder='Enter your password' onChange={handlePassword} required/>
                    </Label>
                </Paragraph>
                <Button type='submit' value='Login'/>
                <Link href='/sign-up'>Criar Conta</Link>
            </Form>
        </Main>
    );
}