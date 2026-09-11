
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed : number;
    pending: number;
}


export type TaskAction = 
| { type: 'ADD_TODO', payload: string }
| { type: 'TOGGLE_TODO', payload: number }
| { type: 'DELETE_TODO', payload: number }


export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        pending: 0,
        length: 0,
    }
}

export const taskReducer = ( state:TaskState, action:TaskAction ):TaskState => {

    switch( action.type ) {
        case 'ADD_TODO': {

            const newTodo: Todo = {
            id: Date.now(),
            text: action.payload,
            completed: false,

        }
            return {
                ...state, 
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending +1,
            };
        }

        case 'TOGGLE_TODO':
            const updateTodos = state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed } : todo)

            return {
                ...state,
                todos: updateTodos,
                completed: updateTodos.filter((u) => u.completed).length,
                pending: updateTodos.filter((u) => !u.completed).length,
            };

        case 'DELETE_TODO':{
            const updateTodos = state.todos.filter( (todo) => todo.id !== action.payload );

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
}