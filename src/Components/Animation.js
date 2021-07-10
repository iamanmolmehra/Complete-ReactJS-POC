import React, { Component } from 'react';  
import { CSSTransitionGroup } from 'react-transition-group';  
  
class Animation extends React.Component {  
    constructor(props) {  
    super(props);  
    this.state = {items: ['Blockchain', 'ReactJS', 'TypeScript', 'JavaTpoint']};  
    this.handleAdd = this.handleAdd.bind(this);  
  }  
  
  handleAdd() {  
    const newItems = this.state.items.concat([  
      prompt('Enter Item Name')  
    ]);  
    this.setState({items: newItems});  
  }  
  
  handleRemove(i) {  
    let newItems = this.state.items.slice();  
    newItems.splice(i, 1);  
    this.setState({items: newItems});  
  }  
  
  render() {  
    const items = this.state.items.map((item, i) => (  
      <div key={item} onClick={() => this.handleRemove(i)}>  
        {item}  
      </div>  
    ));  
  
    return (  
      <div>  
    <h1>Animation Example</h1>  
            <button onClick={this.handleAdd}>Insert Item</button>  
            <CSSTransitionGroup  
               transitionName="example"  
           transitionEnterTimeout={800}  
               transitionLeaveTimeout={600}>  
               {items}  
            </CSSTransitionGroup>  
      </div>  
    );  
  }  
}  
export default Animation;  