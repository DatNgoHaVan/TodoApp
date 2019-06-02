import * as React from 'react';
import '../styles/sass/TodoItem.scss';
import classNames from 'classnames';
import checkImg from '../assets/checked.svg';
import unCheckImg from '../assets/multiply.svg';

interface IProps {
  item: {
    title: string,
    isComplete?: boolean
  };
  onClick: any;
}

class TodoItem extends React.Component<IProps> {
  render() {
    const { item, onClick } = this.props;
    let url = unCheckImg;
    if (item.isComplete) {
      url = checkImg;
    }

    return (
      <div className={
        classNames('TodoItem', {
          'TodoItem-complete': item.isComplete
        })
      }>
        <img onClick={onClick} src={url} width={32} height={32}/>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}

export default TodoItem;