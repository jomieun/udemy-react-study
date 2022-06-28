import useHttpRequest from "../../hooks/use-http-request";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { error, isLoading, sendRequest } = useHttpRequest();

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: "https://udemy-react-post-test-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (dataOjb) => {
        const generatedId = dataOjb.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
