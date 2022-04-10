import logo from './pexels-breakingpic-3299.jpg';
import './styles.css';

const root = document.getElementById('root');

const logoImage = document.createElement('img');
logoImage.src = logo;

const todoInput = document.createElement('input');
todoInput.setAttribute('id', 'todo');
todoInput.setAttribute('placeholder', 'enter your todo');

const btn = document.createElement('button');
btn.innerText = 'make todo';

const todosDiv = document.createElement('div');
todosDiv.setAttribute('id', 'todos');
todosDiv.innerHTML = '<h2>your todos</h2>';

btn.addEventListener('click', () => {
  const inp = document.getElementById('todo').value;
  const todosDiv = document.getElementById('todos');
  const todo = document.createElement('li');
  todo.innerText = inp;
  todosDiv.append(todo);
});

root.append(logoImage, todoInput, btn, todosDiv);