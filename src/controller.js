
import {Model, todo_proto, project_proto} from './model';
import {View} from './view';

const Controller = (function(){

    const init = function(){   
        View.createNavLink('Projects List', viewProjects);
        View.createNavLink('New Project', projectForm);
        
        viewProjects();
    };

    const viewProjects = function(){
        View.clear();
        View.setHeader('Projects');
        const project_ids = Model.getProjects();
        const keys = ['title'];
        project_ids.forEach((project_id) => {
            const attributes = Model.getProjectAttributes(project_id,keys);
            View.drawCard(keys,attributes,viewProject.bind(null,project_id));
        });
    };

    const viewProject = function(project_id){
        View.clear();
        const attrs = Model.getProjectAttributes(project_id,['title']);
        View.setHeader(`Project - ${attrs['title']}`);
        View.drawButton('Create Todo',todoForm.bind(null,project_id));
        View.drawButton('Edit Project',projectForm.bind(null,project_id));
        View.drawButton('Delete Project',deleteProject.bind(null,project_id));

        const keys = ['title','due_date','priority'];
        const todo_ids = Model.getTodos(project_id);
        todo_ids.forEach((todo_id) => {
            const attributes = Model.getTodoAttributes(todo_id,keys);
            View.drawCard(keys,attributes,viewTodo.bind(null,todo_id));
        });
    };

    
    const viewTodo = function(todo_id){
        View.clear();
        const attrs = Model.getTodoAttributes(todo_id,['title']);
        View.setHeader(`Todo - ${attrs['title']}`);

        const project_id = Model.getProject(todo_id);

        View.drawButton('Edit',todoForm.bind(null,project_id,todo_id));
        View.drawButton('Delete',deleteTodo.bind(null,todo_id));

        const keys = ['title','description','due_date','priority','notes'];
        const attributes = Model.getTodoAttributes(todo_id,keys);
        View.drawDetailCard(keys,attributes);
    };

    const projectForm = function(project_id){
        View.clear();
        View.setHeader('Project Form');

        let obj = {};
        const keys = ['title'];
        if (project_id) {
            console.log('pid found');
            obj = Model.getProjectAttributes(project_id,keys);
        } else {
            keys.forEach((key) => obj[key] = '');
        };

        View.drawForm(keys, obj);
        View.drawButton('Submit',setProject.bind(null,project_id));
    };

    const todoForm = function(project_id, todo_id){
        View.clear();
        View.setHeader('Todo Form');

        let obj = {};
        const keys = ['title','description','due_date','priority','notes'];

        if (todo_id) {
            obj = Model.getTodoAttributes(todo_id,keys);
        } else {
            keys.forEach((key) => obj[key] = '');
        };

        View.drawForm(keys, obj);
        View.drawButton('Submit',setTodo.bind(null,project_id,todo_id));
    };

    const setProject = function(project_id){
        const attributes = View.readForm();

        if (!project_id) {
            project_id = Model.createProject();
        }

        Model.setProjectAttributes(project_id,attributes);
        viewProject(project_id);
    };

    const setTodo = function(project_id,todo_id){
        const attributes = View.readForm();

        if (!todo_id) {
            todo_id = Model.createTodo(project_id);
        };

        Model.setTodoAttributes(todo_id,attributes);
        viewTodo(todo_id);
    };

    const deleteProject = function(project_id){
        Model.deleteProject(project_id);
        viewProjects();
    };

    const deleteTodo = function(todo_id){
        Model.deleteTodo(todo_id);
        viewProjects();
    };

    return {
        init,
    };

})();


export {
    Controller
}
