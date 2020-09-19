import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateForm extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const matches = this.getMatches.value;
        const won = this.getWon.value;
        const lost = this.getLost.value;
        const tie = this.getTie.value;
        const points = (this.getWon.value * 2) + this.getTie.value;
        const data = {
            name,
            matches,
            won,
            lost,
            points,
            tie
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id}>
                <form>
            <span class="contact2-form-title">Add Team</span>
            <div className='wrap-input2 validate-input'>
              <label>Name:
   <input name="Name" required type="text" ref={(input) => this.getName = input} className='input2'
                defaultValue={this.props.post.name} />
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
                <button onClick={this.handleEdit} className='btn btn2'>Update</button>
            </div>
        );
    }
}
export default connect()(UpdateForm);