import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../API/api";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateAll } from "./tasksSlice";

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.value);
  const dispatch = useAppDispatch();

  async function onchange(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.name;

    await api.put(`/tasks/${id}`, { done: event.target.checked });

    const response = await api.get("/tasks");
    dispatch(updateAll(response.data.tasks));
  }

  function onclick(taskId: string) {
    return async () => {
      await api.delete(`/tasks/${taskId}`);
      const response = await api.get("/tasks");
      dispatch(updateAll(response.data.tasks));
    };
  }

  useEffect(() => {
    api.get("/tasks").then((resp) => {
      dispatch(updateAll(resp.data.tasks));
    });
  }, [dispatch]);

  return tasks.length > 0 ? (
    <div className="card position-absolute top-50 start-50 translate-middle p-3 bm-5 w-50">
      <h5 className="card-title text-center">List of Tasks</h5>
      <ul className="list-group">
        {tasks.map((task) => (
          <div key={task._id}>
            <li className="list-group-item list-group-flush d-flex justify-content-between">
              <div>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  name={task._id}
                  checked={task.done}
                  onChange={onchange}
                />
                {task.title}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                onClick={onclick(task._id)}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  ) : (
    <div className="position-absolute top-50 start-50 translate-middle ">
      You don't have any task.
      <br />
      <Link to="/new">Create a Task</Link>
    </div>
  );
};

export default Tasks;
