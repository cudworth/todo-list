
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
            const values = Model.getProjectAttributes(project_id,keys);
            View.drawCard(keys,values,viewProject.bind(null,project_id));
        });
    };

    const viewProject = function(project_id){
        View.clear();
        const title = Model.getProjectAttributes(project_id,['title']);
        View.setHeader(`Project - ${title}`);
        View.drawButton('Delete Project',deleteProject.bind(null,project_id));
        View.drawButton('Create TODO',todoForm.bind(null,project_id));

        const keys = ['title','due_date','priority'];
        const todo_ids = Model.getTodos(project_id);
        todo_ids.forEach((todo_id) => {
            const values = Model.getTodoAttributes(todo_id,keys);
            View.drawCard(keys,values,viewTodo.bind(null,todo_id));
        });
    };

    
    const viewTodo = function(todo_id){
        View.clear();
        const title = Model.getTodoAttributes(todo_id,['title']);
        View.setHeader(`Todo - ${title}`);
        View.drawButton('Delete',deleteTodo.bind(null,todo_id));

        const keys = ['title','description','due_date','priority','notes','checklist'];
        const values = Model.getTodoAttributes(todo_id,keys);
        View.drawCard(keys,values,() => null);
    };

    const projectForm = function(){
        View.clear();
        View.setHeader('Project Form');
        const fields = ['title'];
        View.drawForm(fields);
        View.drawButton('Submit',createProject);
    };

    const todoForm = function(project_id){
        View.clear();
        View.setHeader('Todo Form');
        const fields = ['title','description','due_date','priority','notes','checklist'];
        View.drawForm(fields);
        View.drawButton('Submit',createTodo.bind(null,project_id));
    };

    const createProject = function(){
        const attributes = View.readForm();
        const project_id = Model.createProject();
        Model.setProjectAttributes(project_id,attributes);
        viewProject(project_id);
    };

    const createTodo = function(project_id){
        const attributes = View.readForm();
        const todo_id = Model.createTodo(project_id);
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
