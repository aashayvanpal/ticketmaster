import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../../actions/increment.js'
import { decrement } from '../../actions/decrement.js'
import store from '../..'


function Home(props) {
    console.log(props)
    return (
        <div>

            <h1>Display state from redux store - {props.count}</h1>
            <button onClick={() => { store.dispatch(increment()) }}> UP </button>
            <button onClick={() => { store.dispatch(decrement()) }}> DOWN </button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count 
    }
}

export default connect(mapStateToProps)(Home)