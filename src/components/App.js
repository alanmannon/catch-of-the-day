import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish} />
      </div>
    );
  }
}

export default App;