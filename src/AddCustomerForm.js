// import React from 'react'

// export default class AddCustomerForm extends React.Component{
//     constructor(){
//         super()

//     }
//     render(){
//         return(
//             <div>
//                 <h1>fill form here</h1>
               
//             </div>

//         )

//     }
// }

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

