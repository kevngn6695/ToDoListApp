export const getTodo = async (setTodo) => {
  try {
    const res = await fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const allTodo = await res.json();

    await setTodo(allTodo);
  } catch (err) {
    console.error(err.message);
  }
};
