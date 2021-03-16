import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // copies current state
    const fishes = { ...this.state.fishes };
    // custom name to new fish
    fishes[`fish${Date.now()}`] = fish;
    // updates state
    this.setState({ fishes });
  }

  loadSampleFish = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish} />
      </div>
    );
  }
}

export default App;