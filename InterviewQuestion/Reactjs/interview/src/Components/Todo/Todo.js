import React, { useEffect, useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  console.log("data", data);
  const fetchData = async () => {
    await fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data.todos);
          console.log("data.todos", data.todos);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Todo</h1>

      {data?.map((item, index) => (
        <ul key={index}>
          <li>
            <sp>{item.id}</sp>
            {item.todo}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
