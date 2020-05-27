import {myModel} from './model';
import {myView} from './view';

const myController = (function(){
    const self = {};

    const init = function(){   

        myView.createNavLink('Projects', showProjects);
        myView.createNavLink('Todos', showTodos);
        myView.createNavLink('New Todo', showTodoForm);
        
        showTodoForm();
    }

    const showProjects = function(){console.log('show projects')};

    const showTodos = function(){};

    const showTodoForm = function(){
        const todo = myModel.createTodo();
        const fields = todo['form_fields'];
        myView.renderForm(fields, createTodo);
        myModel.deleteTodo(todo['id']);
    };

    const createTodo = function(){
        const todo = myModel.createTodo();
        myView.renderItem(todo);
    };

    const save = function(){
        myModel.save();
    };

    const readFromLocalStorage = function(){
        myModel.load();
    };

    return {
        init,

    };
})();


export {
    myController
}
