function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "12/04/2004";
  return (
    <div class="container">
      <div class="row kgRow">
        <div class="col-3">{todoName}</div>
        <div class="col-2">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
