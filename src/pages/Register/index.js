import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Main, Label, TextField, Button, Link, Paragraph, Logo, LogoDiv } from './styles';
import logo from '../../images/logoBW.jpg'

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [confirmaPassword, setConfirma] = useState('');
    const history = useHistory();
    
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setSenha(event.target.value);
    }

    function handleConfirma(event){
        setConfirma(event.target.value);
    }

    // Inclui o novo usuário na lista de usuários do local storage e redireciona
    // para a tela de login.
    function authorized(user){
        let listaUsers = JSON.parse(localStorage.getItem('listaUsers'));
        listaUsers.push(user)
        localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
        history.push('/')
    }

    // Checa se os dados informados são válidos e registra o novo usuário.
    function handleSignUp(event){
        event.preventDefault();
        let listaUsers = JSON.parse(localStorage.getItem('listaUsers'));
        const user = {"email":email, "password":password};

        // Checa se o e-mail utilizado já está cadastrado.
        for(let i = 0; i < listaUsers.length; i++){
            if(listaUsers[i].email === email){
                alert("Usuário já cadastrado!");
                return;
            }
        }
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
        const regex = /^(?=.*\d)(?=.*[!@#$%^&()-+=_,.~;{}*])(?=.*[a-zA-Z]).{8,}$/;
        const formato = 'A senha cadastrada deve ter no mínimo 8 caracteres, um caracter especial, um caracter numérico e um caracter alfabético.';
        const confirmationDoesNotMatch = 'Password e Confirmação não são iguais!';
        
        // Checa se o e-mail é válido
        if(!regexEmail.test(email)){
            alert('E-mail inválido!');
            return;
        }
        
        // Checa se a senha é válida e se a confirmação bate com a senha informada.
        regex.test(password) 
            ? (password === confirmaPassword 
                ? authorized(user)
                : alert(confirmationDoesNotMatch))
            : alert(formato);
        
    }

    return(
        <Main>
            <LogoDiv id='logo'><Logo src={logo} alt='Logo da Elogroup, com um fundo preto e letras brancas.'/></LogoDiv>
            <Form onSubmit={handleSignUp}>
                <Paragraph>
                    <Label>
                        Usuário*
                        <TextField type='text' value={email} placeholder='E-mail' required onChange={handleEmail}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Password*
                        <TextField type='password' value={password} placeholder='Senha' required onChange={handlePassword}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Confirmação Password*
                        <TextField type='password' value={confirmaPassword} placeholder='Repita sua senha' required onChange={handleConfirma}/>
                    </Label>
                </Paragraph>
                <Button type='submit' value='Registrar'/>
                <Link href='/'>Voltar ao Login</Link>
            </Form>
        </Main>
    );
}