import { Block, initApp, find } from 'dwayne';
import template from './index.pug';

let id = 0;

class App extends Block {
  static template = template();

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

  findIndexById(id) {
    return this.todos.findIndex(({ id: ID }) => id === ID);
  }

  toggleTodo(id) {
    const index = this.findIndexById(id);

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

Block.block('App', App);

initApp('App', find('.root'));
