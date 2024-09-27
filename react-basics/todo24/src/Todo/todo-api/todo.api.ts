import { Todo } from "../interfaces/todo.interface";
import { TodoEventEmitter } from "../todo-event-emitter/todo-event-emitter";

// ! Singleton Pattern used :)
export class TodoApi {
  private todos: Todo[] = [];
  private static instance: TodoApi;
  private constructor() {
    this.todos = [];
  }

  static getInstance(): TodoApi {
    if (!TodoApi.instance) {
      TodoApi.instance = new TodoApi();
    }
    return TodoApi.instance;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string, completed?: boolean): Todo {
    const id = this.generateRandomId();
    const newTodo = { id, title, completed: completed || false };
    this.todos.push(newTodo);
    TodoEventEmitter.emit("update");
    return newTodo;
  }

  completeTodo(todoId: number) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
    TodoEventEmitter.emit("update");
  }

  deleteTask(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    TodoEventEmitter.emit("update");
  }

  private generateRandomId() {
    return Math.floor(Math.random() * 10000);
  }
}
