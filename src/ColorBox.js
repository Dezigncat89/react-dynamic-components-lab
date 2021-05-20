
import React, {Component} from 'react';


class ColorBox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      anyBoxes: []
    }
    this.make = this.make.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    this.setState({
      anyBoxes: this.state.anyBoxes.filter(aBox => aBox.id !== id)
    });
  }

  make(secondBox) {
    this.setState({ anyBoxes: [...this.state.anyBoxes, secondBox] })
  }

  render() {
    const anyBoxes = this.state.anyBoxes.map(aBox => 
      <aBox 
        key={aBox.id}
        id={aBox.id}
        width={aBox.width} 
        height={aBox.height} 
        color={aBox.color} 
        deleteBox={this.delete}
      />
    )

    return (
      <div>
        <h1>Create a Color Box</h1>
        <NewBoxesForm makeBox={this.make} />
        {anyBoxes}
      </div>
    )
  }
}

export default ColorBox;

