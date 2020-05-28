
import {myModel} from './model';
import {myView} from './view';

const sample_todo = {
    title:'The Odin Project',
    description:'Finish todo list project',
    due_date:'5/24/2020',
    priority:'high',
    notes:'',
    checklist:'',
};

const myController = (function(){

    const init = function(){   
        myView.createNavLink('Projects', showProjects);
        myView.createNavLink('Todos', showTodos);
        myView.createNavLink('New Todo', showTodoForm);
        
        const id = myModel.createTodo();
        myModel.updateTodo(id,sample_todo);
        myView.renderItem(myModel.readTodo(id));
    };

    const showProjects = function(){
        myView.renderGroup(myModel.readProjects());
    };

    const showTodos = function(){
        myView.renderGroup(myModel.readTodos());
    };

    const showTodoForm = function(){
        const id = myModel.createTodo();
        const fields = myModel.readTodo(id)['fields'];
        myView.renderGroup(fields, createTodo);
        myModel.deleteTodo(id);
    };

    const createTodo = function(){
        const id = myModel.createTodo();
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
