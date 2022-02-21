import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ITask = {
  _id: string;
  title: string;
  done: boolean;
};

interface TasksState {
  value: ITask[];
}

const initialState: TasksState = {
  value: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateAll: (state, action: PayloadAction<ITask[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateAll } = tasksSlice.actions;
export default tasksSlice.reducer;
