import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';


class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>StoreResult</button>
                <ul>
                    {this.props.results.map((element) => {
                        return (<li key = {element.id}
                            onClick={()=>this.props.onRemoveResult(element.id)}>{element.value}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        ctr: state.ctr.counter, // counter in the store
        results: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch(actionCreators.increment()),
        onDecCounter: () => dispatch(actionCreators.decrement()),
        onAdd: () => dispatch(actionCreators.add(5)),
        onSubtract: () => dispatch(actionCreators.subtract(5)),
        onStoreResult: (counter) => dispatch(actionCreators.storeResult(counter)),
        onRemoveResult: (id) => dispatch(actionCreators.removeResult(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);