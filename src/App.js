import React, { Component } from 'react';
import StateHook from './hooks/StateHook';
import ExampleWithManyStates from './hooks/ExampleWithManyStates';
import EffectHook from './hooks/EffectHook';

class App extends Component {
  render() {
    return (
      <EffectHook/>
    );
  }
}

export default App;
