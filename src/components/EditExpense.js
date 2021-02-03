import React, { Component } from 'react';

export default class EditExpense extends Component {
    
    render(){
        console.log(this.props)
        return(
            <div>
                Editing the expense with ID {this.props.match.params.id}
            </div>
        )
    }
}

