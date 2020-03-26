import React from 'react'

export default class AddCustomerForm extends React.Component{
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        )
      }
}

