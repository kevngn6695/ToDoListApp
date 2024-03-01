// Function to get all item from todos.
export const getTodo = (setTodo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const allTodo = await res.json();
      await setTodo(allTodo);
      resolve("Successfully get data from the server");
    } catch (err) {
      reject(err);
    }
  });
};

// Function to delete an item from todos.
export const handleDeleteItem = (id, todos, setTodo) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      await setTodo(todos.filter((todo) => todo.id !== id));
      resolve("Successfully deleted an item in the list");
    } catch (err) {
      console.error(err.message);
    }
  });
};
