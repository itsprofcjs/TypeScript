import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchTodos, Todo } from './actions/index';
import { StoreState } from './reducers/index';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    };

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}> Fetch </button>
            </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
