import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttpRequest from "./hooks/use-http-request";

function App() {
  const [tasks, setTasks] = useState([]);
  const { error, isLoading, sendRequest: fetchTasks } = useHttpRequest();

  useEffect(() => {
    const applyData = (dataObj) => {
      const loadedTasks = [];

      for (const taskKey in dataObj) {
        loadedTasks.push({ id: taskKey, text: dataObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://udemy-react-post-test-default-rtdb.firebaseio.com/tasks.json",
      },
      applyData
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
