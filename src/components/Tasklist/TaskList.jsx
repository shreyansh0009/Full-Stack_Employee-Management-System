import React from "react";
import Accept from "./Accept";
import New from "./New";
import Complete from "./Complete";
import Failed from "./Failed";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[42%] m-7 pb-4 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <Accept key={idx} data={e} />;
        }

        if (e.newTask) {
          return <New key={idx} data={e} />;
        }

        if (e.completed) {
          return <Complete key={idx} data={e} />;
        }

        if (e.failed) {
          return <Failed key={idx} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
