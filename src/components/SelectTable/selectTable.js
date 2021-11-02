import React, { Component } from "react";
import { Table, Row, Title, TableItem} from "./styles";

const Oportunidades = [
  {
    id: 1,
    selected: false,
    name: "RPA",
  },
  {
    id: 2,
    selected: false,
    name: "Produto Digital",
  },
  {
    id: 3,
    selected: false,
    name: "Analytics",
  },
  {
    id: 4,
    selected: false,
    name: "BPM",
  },
];

// Componente que cria a tabela de seleção de oportunidades, com uma caixa de seleção mestra.
class SelectTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Oportunidades,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Marca e desmarca todas as linhas
  onMasterCheck(e) {
    let tempList = this.state.List;
    tempList.map((oportunities) => (oportunities.selected = e.target.checked));

    // Atualiza o state
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Checa se todos os itens foram selecionados individualmente e atualiza o state
  // individual e da seleção mestra.
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((oportunities) => {
      if (oportunities.id === item.id) {
        oportunities.selected = e.target.checked;
      }
      return oportunities;
    });

    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidUpdate(){
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  // Inicializa sempre com as seleções desmarcadas
  componentDidMount(){
    let tempList = this.state.List;
    tempList.map((oportunities) => {
      oportunities.selected = false;
      return oportunities;
    });
      
    this.setState({
      List: tempList,
      MasterChecked: false,
      SelectedList: [],});
  }

  render() {

    return (
      <div>
        <div>
          <div>
            <Table>
              <thead>
                <Row>
                  <Title>
                    <input
                      type="checkbox"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </Title>
                  <Title/>
                </Row>
              </thead>
              <tbody>
                {this.state.List.map((oportunities) => (
                  <Row key={oportunities.id} className={oportunities.selected ? "selected" : ""}>
                    <Title>
                      <input
                        type="checkbox"
                        checked={oportunities.selected}
                        id="rowcheck{oportunities.id}"
                        onChange={(e) => this.onItemCheck(e, oportunities)}
                      />
                    </Title>
                    <TableItem>{oportunities.name}</TableItem>
                  </Row>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTable;