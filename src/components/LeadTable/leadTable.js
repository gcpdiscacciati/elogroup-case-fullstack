import React, { Component } from "react";
import { Table, Row, Title, TableItem, Panel } from "./styles";

const leads = JSON.parse(localStorage.getItem('listaLeads'))

// Componente que define e renderiza o painel de Leads.
export default class LeadTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        List: leads,
      };
    };

    // Atualiza o state quando o componente é montado.
    componentDidMount(){
        this.setState(this.state.List, ()=>{
            JSON.parse(localStorage.getItem('listaLeads'));
        });
    }

    // Atualiza o status do Lead quando solicitado. Ao clicar no nome do Lead no painel,
    // arrasta o mesmo para o lado, atualizando o seu status interno no local storage e
    // também atualiza o state, o que faz que a alteração seja renderizada e visualizada.
    atualiza(lista, index){
        if(lista[index].status === 'Cliente em Potencial'){
            lista[index].status = 'Dados Confirmados';
            localStorage.setItem('listaLeads', JSON.stringify(lista));
            this.setState(this.state.List, ()=>{JSON.parse(localStorage.getItem('listaLeads'))})
            return;
        }
        else if(lista[index].status === 'Dados Confirmados'){
            lista[index].status = 'Reunião Agendada';
            localStorage.setItem('listaLeads', JSON.stringify(lista));
            this.setState(this.state.List, ()=>{JSON.parse(localStorage.getItem('listaLeads'))})
            return;
        }
    }

    render(){
        const lista = JSON.parse(localStorage.getItem('listaLeads'));
        
        return(
            <Panel>
                <Table border='1'>
                    <Row>
                        <Title>Cliente em Potencial</Title>
                        <Title>Dados Confirmados</Title>
                        <Title>Reunião Agendada</Title>
                    </Row>
                    {/* Para cada lead na lista, cria uma linha e o adiciona na coluna respectiva ao status */}
                    {lista.map((lead, index) => (
                        <Row onClick={()=>this.atualiza(lista,index)}>
                            <TableItem>{lead.status === 'Cliente em Potencial' ? lead.nome : ''}</TableItem>
                            <TableItem>{lead.status === 'Dados Confirmados' ? lead.nome : ''}</TableItem>
                            <TableItem>{lead.status === 'Reunião Agendada' ? lead.nome : ''}</TableItem>
                        </Row>
                    )
                    )}
                </Table>
            </Panel>
        );
    };
}