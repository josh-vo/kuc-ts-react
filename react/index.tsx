import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'},
      isVisible: true
    };
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {tableData, isVisible, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
      <Table
        columns={columns}
        data={this.state.tableData}
        defaultRowData={defaultRowData}
        onRowAdd={this.handleRowAdd}
        onRowRemove={this.handleRowRemove}
        onCellChange={this.handleCellChange}
        actionButtonsShown={true}
        isVisible={isVisible}
        />
      <button onClick={this.handleClick}>Hide table</button>
      </div>
    );
  }
}
render(<Plugin />, document.getElementById('root'));