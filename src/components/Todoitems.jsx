

import TodoItem from "./TodoItem.jsx";
const TodoItems = ({todoItems}) => {
  return <>
    <div className="itemsContainer">
      {
      todoItems.map(item=>
      <TodoItem todoName={item.name} todoDate={item.dueDate} />)
      }
    </div>
  </>;
};
export default TodoItems;
