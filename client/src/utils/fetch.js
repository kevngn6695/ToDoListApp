export const getTodo = (setTodo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const allTodo = await res.json();
      await setTodo(allTodo);
      resolve("Successfully setting up to do data");
    } catch (err) {
      reject(err);
    }
  });
};

// Function to delete an item from todos.
export const handelDeleteItem = async (id, todos, setTodo) => {
  try {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });
    setTodo(todos.filter((todo) => todo.id !== id));
  } catch (err) {
    console.error(err.message);
  }
};
