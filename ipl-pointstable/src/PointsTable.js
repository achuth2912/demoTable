import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class PointsTable extends Component {
  handleUpdate = (u) => {
    u.preventDefault();
    console.log(this.node.state);
    console.log(this.node.state.selectedRowKeys[0]);
    const id = this.node.state.selectedRowKeys;
    console.log(id);
    this.props.dispatch({type:'EDIT_POST',id:this.node.state.selectedRowKeys[0]});
  }
  componentDidMount () {
    this.btn.setAttribute("disabled", "disabled") ;     
  }
  render() {
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        // ...
        console.log('inside selectRow');
        this.btn.removeAttribute("disabled");
        console.log(row.id);
        this.props.dispatch({type:'UPDATEBTN',id:row.id});
      }
    };
  return (
    <div>
      <button onClick={this.handleUpdate} ref={(btn) => { this.btn = btn; }}  >Update</button>
      <br />
    <BootstrapTable data={ this.props.posts } hover={true}
  ref={ (n) => this.node = n }
  selectRow={ selectRow }>
          <TableHeaderColumn dataField='id' isKey={ true } hidden= {true} >ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='matches'>Matches</TableHeaderColumn>
          <TableHeaderColumn dataField='won'>Won</TableHeaderColumn>
          <TableHeaderColumn dataField='lost'>Lost</TableHeaderColumn>
          <TableHeaderColumn dataField='points'>Points</TableHeaderColumn>
  </BootstrapTable>
  </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

export default connect(mapStateToProps)(PointsTable);