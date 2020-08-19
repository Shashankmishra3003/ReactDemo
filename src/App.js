import React from 'react';
import logo from './logo-white.png';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    newItem: "",
    list: []
  }
}

addItem(todoValue) {
  if(todoValue !== "") {
    const newItem = {
      id: Date.now(),
      value: todoValue,
      isDone: false
    };

    // cerating a new item and added to the list
    const list = [...this.state.list];
    list.push(newItem);

    // updating the state variables using setState
    this.setState({
      list,
      newItem: ""
    });
  }
}

  deleteItem(id) {
    // getting a copy of actual list
    const list = [...this.state.list];

    //deleting item from list
    const updatedList = list.filter(item => item.id !== id);

    // updating the original list with updated list
    this.setState({
      list: updatedList
    })
  }

  updateInput(input) {
    this.setState({newItem: input});
  }

  render() {
    return(
      <div>
        <img src={logo} width="100" height="100" alt="logo"
            className="logo"/>
        <h1 className="app-title">First React Application</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input 
            type="text" 
            className="input-text"
            placeholder="Write a TODO"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} 
            />           
          <button 
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >Add TODO
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input 
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={()=> {}}
                    />
                    {item.value}
                    <button 
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                      >Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input 
                  type="checkbox" 
                  name=""
                  id="" />
                  Record Youtube videos
                  <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;