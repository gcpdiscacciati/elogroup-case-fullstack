import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import SelectTable from '../../components/SelectTable/selectTable';
import { Form, Main, Cabecalho, Label, Title, TextField, Button, Paragraph, Logo, Coluna } from './styles';
import logo from '../../images/logoBW.jpg'

export default function RegisterLead(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [oportunidades, setOportunidades] = useState([]);
    const history = useHistory();

    // Obtém as oportunidades através do state da tabela de seleção.
    const handleOportunidades = data => setOportunidades(data.SelectedList);

    function handleName(event){
        setName(event.target.value);
    }

    function handlePhone(event){
        setPhone(event.target.value);
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }

    // Salva um lead na lista de leads do local storage. Todos os campos são obrigatórios. Os formatos de telefone e
    // e-mail devem estar corretos.
    function handleSalvar(event){
        event.preventDefault();
        const regexPhone = /^\(\d{2}\)\d{4,5}-\d{4}$/;
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
        if(!regexPhone.test(phone)){
            alert('Telefone inválido! Informe o telefone no formato: (00)0000-0000 ou (00)00000-0000')
            return;
        }
        if(!regexEmail.test(email)){
            alert('E-mail inválido!')
            return;
        }
        if(oportunidades.length === 0){
            alert('Ao menos uma oportunidade deve ser selecionada!');
            return;
        }
        const lead = {
            "nome" : name,
            "phone" : phone,
            "email" : email,
            "status" : "Cliente em Potencial",
            "oportunidades": oportunidades,
        };
        // Atualiza o lacal storage com a inclusão do novo lead.
        const listaLeads = JSON.parse(localStorage.getItem('listaLeads'));
        listaLeads.push(lead);
        localStorage.setItem('listaLeads', JSON.stringify(listaLeads));
        alert('Lead incluído com sucesso!');
        // Retorna a página do Painel de Leads.
        history.push('/home');
    }
    
    return(
        <Main>
            <Cabecalho>
            <Logo src={logo} alt='Logo da Elogroup, com um fundo preto e letras brancas.'/>
            <Title>Novo Lead</Title>
            </Cabecalho>
            <Form onSubmit={handleSalvar}>
                <Coluna>
                <Paragraph>
                    <Label>
                        Nome*
                        <TextField type='text' value={name} placeholder='Ex.: Ind. Farm. LTDA' onChange={handleName} required/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Telefone*
                        <TextField type='text' value={phone} placeholder='(XX)12345-1234' required onChange={handlePhone}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Email*
                        <TextField type='text' value={email} placeholder='lorem@ipsum.com' required onChange={handleEmail}/>
                    </Label>
                </Paragraph>
                </Coluna>
                <Coluna>
                <Paragraph>
                    <Label>Oportunidades* </Label>
                    <SelectTable onChange={handleOportunidades}/>
                </Paragraph>
                <Button type='submit' value='Salvar'>Salvar</Button>
                </Coluna>
            </Form>
        </Main>
    );
}