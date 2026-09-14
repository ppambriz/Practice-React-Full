import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  //Validar mendiante Zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  //   return JSON.parse(localStorageState);
  return result.data;
};

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "TOGGLE_TODO":
      const updateTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

      return {
        ...state,
        todos: updateTodos,
        completed: updateTodos.filter((u) => u.completed).length,
        pending: updateTodos.filter((u) => !u.completed).length,
      };

    case "DELETE_TODO": {
      const updateTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );

      return {
        ...state,
        todos: updateTodos,
        length: updateTodos.length,
        completed: updateTodos.filter((u) => u.completed).length,
        pending: updateTodos.filter((u) => !u.completed).length,
      };
    }

    default:
      return state;
  }
};
