import * as React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';

interface IState {
  todoItems: {
    title: string,
    isComplete?: boolean
  }[];
}

interface IProps {

}

class App extends React.Component<IProps, IState> {
  /**
   *
   */
  constructor(props: IProps) {
    super(props);
    this.state = {
      todoItems: [
        { title: 'shopping', isComplete: true },
        { title: 'buy a ball' },
        { title: 'shoottt' },
        { title: 'and Goall' }
      ]
    };
  }

onItemClicked(itemPicked:any) {
  return (event:any) => {
    const isCompletePicked= itemPicked.isComplete;
    const index = this.state.todoItems.indexOf(itemPicked);
    const {todoItems} = this.state;
    this.setState({
      todoItems: [
        ...todoItems.slice(0,index),
        {
          ...itemPicked,
          isComplete: !isCompletePicked
        },
        ...todoItems.slice(index+1)
      ]
    })
  }
}

  render() {
    return (
      <div className="App">
        {
          //truthy falsy operator
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
        }
        {
          this.state.todoItems.length === 0 && 'Nothing here.'
        }
        <div>
          <TrafficLight />
        </div>
      </div>
    );
  }
}

export default App;
