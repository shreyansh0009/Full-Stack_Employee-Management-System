import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [taskAssignedTo, settaskAssignedTo] = useState("");
  const [taskCategory, settaskCategory] = useState("");
  const [taskDescription, settaskDescription] = useState("");

  const [newTask, setnewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setnewTask({
      taskTitle,
      taskDate,
      taskCategory,
      taskDescription,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    });

    let flag = false;
    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach(function (e) {
      if (taskAssignedTo == e.firstName) {
        e.tasks.push(newTask);
        flag = true;
      }
    });

    if (!flag) {
      alert("Employee not found! Enter name correctly.");
    }

    settaskAssignedTo("");
    settaskCategory("");
    settaskDate("");
    settaskDescription("");
    settaskTitle("");
  };
  return (
    <div className="w-full mt-10 mb-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-between"
      >
        <div className="flex flex-col items-start ml-10">
          <h3>Task Tittle:</h3>
          <input
            type="text"
            placeholder="Enter task tittle"
            className="mt-2 border-2 rounded-md w-2xl"
            value={taskTitle}
            onChange={(e) => {
              settaskTitle(e.target.value);
            }}
          />
          <h3 className="mt-2">Date</h3>
          <input
            type="date"
            className="mt-2 border-2 rounded-md w-2xl"
            value={taskDate}
            onChange={(e) => {
              settaskDate(e.target.value);
            }}
          />
          <h3 className="mt-2">Assign to:</h3>
          <input
            type="text"
            placeholder="Employee name:"
            className="mt-2 border-2 rounded-md w-2xl"
            value={taskAssignedTo}
            onChange={(e) => {
              settaskAssignedTo(e.target.value);
            }}
          />
          <h3 className="mt-2">Category:</h3>
          <input
            type="text"
            placeholder="Category"
            className="mt-2 border-2 rounded-md w-2xl"
            value={taskCategory}
            onChange={(e) => {
              settaskCategory(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mr-15">
          <h3>Task Description:</h3>
          <textarea
            name=""
            id=""
            cols="40"
            rows="7"
            className="mt-2 border-2 rounded-md"
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
          />

          <button className="mt-4 bg-emerald-400 p-3 rounded-2xl cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
