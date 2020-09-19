import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UpdateForm from './UpdateForm';

class AddForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const matches = this.getMatches.value;
    const won = this.getWon.value;
    const lost = this.getLost.value;
    const tie = this.getTie.value;
    const points = this.getWon.value * 2;
    const data = {
      id: new Date(),
      name,
      matches,
      won,
      lost,
      points,
      tie,
      editing: false,
      update: false
    }
    var y = document.getElementById("addDiv");
    y.style.display = "none";
    this.props.dispatch({
      type: 'ADD_TEAM',
      data
    });
    this.getName.value = '';
    this.getMatches.value = '';
    this.getWon.value = '';
    this.getLost.value = '';
    this.getTie.value = '';
  }
  handleAdd = (e) => {
    e.preventDefault();
    var x = document.getElementById("addDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    this.btn.setAttribute("disabled", "disabled");
  }
  handleUpdate = (u) => {
    u.preventDefault();
    this.btn.setAttribute("disabled", "disabled");
    this.props.dispatch({ type: 'EDIT_POST', id: this.node.state.selectedRowKeys[0] });
    this.node.setState({
      selectedRowKeys: []
    });
  }
  componentDidMount() {
    this.btn.setAttribute("disabled", "disabled");
  }
  render() {
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        // ...
        console.log(isSelect);
        if (isSelect) {
          this.btn.removeAttribute("disabled");
        } else {
          this.btn.setAttribute("disabled", "disabled");
        }
        this.props.dispatch({ type: 'UPDATEBTN', id: row.id });
      }
    };
    return (
      <div>
        <div className='displayGrid'>
          <button onClick={this.handleAdd} className='btn'>Add</button>
          <button onClick={this.handleUpdate} className='btn' ref={(btn) => { this.btn = btn; }}  >Update</button>
        </div>
        <div id="addDiv" style={{ display: 'none' }}>
          <form>
            <span className="title">Add Team</span>
            <div className='wrap-input2 validate-input'>
              <label>Name:
   <input name="Name" required type="text" ref={(input) => this.getName = input} className='input2'
                />
              </label>
            </div>
            <div className='wrap-input2 validate-input'>
              <label>Matches:
   <input name="Matches" required type="number" ref={(input) => this.getMatches = input} className='input2'
                />
              </label>
            </div>
            <div className='wrap-input2 validate-input'>
              <label>Won:
   <input name="Won" required type="number" ref={(input) => this.getWon = input} className='input2' />
              </label>
            </div>
            <div className='wrap-input2 validate-input'>
              <label>Lost:
   <input name="Lost" required type="number" ref={(input) => this.getLost = input} className='input2' />
              </label>
            </div>
            <div className='wrap-input2 validate-input'>
              <label>Tie:
   <input name="Tie" required type="number" ref={(input) => this.getTie = input} className='input2' />
              </label>
            </div>
          </form>
          <button onClick={this.handleAdd} className='btn btn2'>Cancel</button>
          <button onClick={this.handleSubmit} className='btn btn2'>Create</button>
        </div>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            <p>{post.editing}</p>
            {post.editing ? <UpdateForm post={post} key={post.id} /> : <div></div>}
          </div>
        ))}
        <br />
        <div className='wrapperTable'>
        <BootstrapTable data={this.props.posts} hover={true}
          ref={(n) => this.node = n}
          selectRow={selectRow}>
          <TableHeaderColumn dataField='id' isKey={true} hidden={true} >ID</TableHeaderColumn>
          <TableHeaderColumn className='sticky' columnClassName='sticky' dataField='name'>Team</TableHeaderColumn>
          <TableHeaderColumn className='thHide' columnClassName='thHide' dataField='matches'>M</TableHeaderColumn>
          <TableHeaderColumn className='thHide' columnClassName='thHide' dataField='won'>W</TableHeaderColumn>
          <TableHeaderColumn className='thHide' columnClassName='thHide' dataField='lost'>L</TableHeaderColumn>
          <TableHeaderColumn className='thHide' columnClassName='thHide' dataField='tie'>T/NR</TableHeaderColumn>
          <TableHeaderColumn className='thHide' columnClassName='thHide' dataField='points'>P</TableHeaderColumn>
        </BootstrapTable>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(AddForm);