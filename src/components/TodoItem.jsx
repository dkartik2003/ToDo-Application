

function TodoItem({ todoName, todoDate }) {
  // let todoName="Buy Milk";
  // let todoDate="12/04/2004";
  return (
    <div className="container ">
      <div className="kgRow row">
        <div className="col-3">{todoName}</div>
        <div className="col-2">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="kg-button btn btn-danger" >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
