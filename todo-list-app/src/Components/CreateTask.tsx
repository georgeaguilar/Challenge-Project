import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../API/api";

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    api
      .post("/tasks", {
        title,
        done: false,
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <div
      className="card 
    position-absolute top-50 start-50 translate-middle p-3 bm-5"
    >
      <div className="card-body">
        <h5 className="card-title text-center">Create Task</h5>
        <form onSubmit={createTask}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="title"
              placeholder="Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
