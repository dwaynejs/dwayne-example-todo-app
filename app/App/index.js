import { Block } from 'dwayne';
import html from './index.pug';

let id = 0;

class App extends Block {
  static html = html;

  todos = [];
  task = '';

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        id: id++,
        finished: false,
        task: this.task
      }
    ];
    this.task = '';
  }

  toggleTodo(id) {
    const index = this.todos.findIndex(({ id: ID }) => id === ID);

    this.todos = [
      ...this.todos.slice(0, index),
      {
        ...this.todos[index],
        finished: !this.todos[index].finished
      },
      ...this.todos.slice(index + 1)
    ];
  }
}

export default App;
