import { useEffect, useState } from "react";
import api from "../API/api";

interface ITask {
  _id: string;
  title: string;
  done: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  async function onchange(event: any) {
    const id = event.target.name;
    console.log(event.target.checked);

    await api.put(`/tasks/${id}`, { done: event.target.checked });
    const response = await api.get("/tasks");
    setTasks(response.data.tasks);
  }

  useEffect(() => {
    api.get("/tasks").then((resp) => {
      setTasks(resp.data.tasks);
    });
  }, []);

  return (
    <div className="card position-absolute top-50 start-50 translate-middle p-3 bm-5 w-50">
      <h5 className="card-title text-center">List Tracks</h5>
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
              <button type="submit" className="btn btn-primary btn-sm ">
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
