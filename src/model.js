
import {uniqueNumeralString} from './library'; //for unique todo & project ID generation

/*
const sample_todo = {
    title:'The Odin Project',
    description:'Finish todo list project',
    dueDate:'5/24/2020',
    priority:'high',
    notes:'',
    checklist:'',
};
*/

const todo_proto = {
    project:null,
    title:null,
    description:null,
    due_date:null,
    priority:null,
    notes:null,
    checklist:null,
    fields:['project','title','description','due date','priority','notes','checklist'],
};

const project_proto = {
    title:null,
    todos:[],
};

const myModel = (function(){
    const todos = {};
    const projects = {};

    //PUBLIC
    const createTodo = () => _createObj(todos, todo_proto);
    const createProject = () => _createObj(projects, project_proto);

    const readProject = (id) => projects[id];
    const readTodo = (id) => todos[id];

    const readProjects = () => projects;
    const readTodos = () => todos;

    const updateProject = (id, attributes) => _updateObj(projects, id, attributes);
    const updateTodo = (id, attributes)=> _updateObj(todos, id, attributes);

    const deleteProject = (id) => delete projects[id];
    const deleteTodo = (id) => delete todos[id];

    const save = function(){
        window.localStorage.setItem('todos',JSON.stringify(todos));
        window.localStorage.setItem('projects',JSON.stringify(projects));
    };

    const load = function(){
        todos = JSON.parse(window.localStorage.getItem('todos'));
        projects = JSON.parse(window.localStorage.getItem('projects'));
    };

    //PRIVATE
    const _createObj = function(group, proto){
        const id = uniqueNumeralString(Object.keys(group));
        group[id] = Object.assign({}, proto);
        return id;
    };

    const _updateObj = function(group, id, attributes){
        Object.keys(attributes).forEach(function(key){
            group[id][key] = attributes[key];
        });
    };

    return {
        createTodo,
        createProject,
        readTodo,
        readProject,
        readTodos,
        readProjects,
        updateTodo,
        updateProject,
        deleteTodo,
        deleteProject,
        save,
        load,
    };
})();

export{
    myModel,
}
