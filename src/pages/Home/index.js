import React from 'react';
import { useHistory } from 'react-router-dom';
import { Main, Title, Button, Link, Logo, Cabecalho, TableArea, Info, PreTableArea } from './styles';
import LeadTable from '../../components/LeadTable/leadTable';

import logo from '../../images/logoBW.jpg'

export default function Home(){
    const history = useHistory();
        
    // Redireciona para a tela de registro de Leads.
    function handleNovoLead(){
        history.push('/register-lead');
    }
    
    // Ao sair, remove o token de autenticação. Dessa forma, páginas privadas
    // se tornam inacessíveis até que se autentique novamente o usuário.
    function handleLogout(event){
        try{
            localStorage.setItem('auth', false);
        }catch(err){
            console.log(err);
        }
    }
    
    return(
        <Main>
            <Cabecalho>
            <Logo src={logo} alt='Logo da Elogroup, com um fundo preto e letras brancas.'/>
            <Title>Painel de Leads</Title>
            </Cabecalho>
            <PreTableArea>
            <Button onClick={handleNovoLead}>Novo Lead (+)</Button>
            <Info>*Clique em um Lead na tabela para movê-lo de categoria. Se o Lead não mudar, atualize a página.</Info>
            </PreTableArea>
            <TableArea>
                <LeadTable/>
            </TableArea>
            <Link onClick={handleLogout} href ='/'>Logout</Link>
        </Main>
    );
}