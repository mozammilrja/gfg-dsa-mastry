import React, { useEffect, useRef, useState } from "react";

//create custom hooks

// const useHandleToggle = () => {
//   const [isEditing, setIsEditing] = useState(null);

//   const startEditing = (index) => setIsEditing(index);
//   const stopEditing = () => setIsEditing(null);

//   return {
//     isEditing,
//     startEditing,
//     stopEditing,
//   };
// };

// const Todo = () => {
//   const [data, setData] = useState([]);
//   const [isEditing, setIsEditing] = useState(null);
//   const [editText, setEditText] = useState("");
//   let todoInput = useRef();
//   const fetchData = async () => {
//     const res = await fetch("https://dummyjson.com/todos");
//     if (res.status === 200) {
//       const data = await res.json();
//       setData(data?.todos);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const addTask = () => {
//     const newData = {
//       id: data.length + 1,
//       todo: todoInput.current.value,
//       completed: false,
//     };
//     setData([newData, ...data]);
//   };

//   const startEditing = (index) => {
//     setIsEditing(index);
//     setEditText(data[index].todo);
//   };

//   const saveEdit = (index) => {
//     const updatedData = [...data];
//     updatedData[index].todo = editText;
//     setData(updatedData);
//     setIsEditing(null);
//     setEditText("");
//   };

//   return (
//     <div>
//       <h1>Todo</h1>
//       <input type='text' ref={todoInput} />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {data?.map((item, index) => (
//           <li key={index}>
//             {isEditing === index ? (
//               <>
//                 <input
//                   type='text'
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button type='text' onClick={() => saveEdit(index)}>
//                   save
//                 </button>
//               </>
//             ) : (
//               <>
//                 <span>{item.id}</span> {item?.todo}
//                 <button type='text' onClick={() => startEditing(index)}>
//                   edit
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoList, setDotoList] = useState([]);
  const [edit, setEdit] = useState(null);

  const addTodo = () => {
    if (edit !==null) {
      const updatedTodo = [...todoList]
      updatedTodo[edit] = input
      setDotoList(updatedTodo)
    }
    setDotoList();
  };

  return (
    <div>
      <h1>Todo</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setDotoList(e.target.value)}
      />
      <button onSubmit={addEditTodo}>Submit</button>
    </div>
  );
};

export default TodoApp;
