
import {uniqueNumeralString} from './library'; //for unique todo & project ID generation

const sample_todo = {
    title:'The Odin Project',
    description:'Finish todo list project',
    dueDate:'5/24/2020',
    priority:'high',
    notes:'',
    checklist:'',
};

const todo_proto = {
    project:null,
    title:null,
    description:null,
    due_date:null,
    priority:null,
    notes:null,
    checklist:null,
    form_fields:['project','title','description','due date','priority','notes','checklist'],
};

const project_proto = {
    title:null,
    todos:[],
};

const todos_proto = {};
const projects_proto = {};

const no_actions = (self) => {};

const myModel = (function(){
    const todos = Object.assign({},todos_proto,no_actions);
    const projects = Object.assign({},projects_proto,no_actions);

    //PUBLIC
    const createTodo = () => _createObj(todos,todo_proto,no_actions);
    const createProject = () => _createObj(projects,project_proto,no_actions);

    const readProject = (id) => projects[id];
    const readTodo = (id) => todos[id];

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
    const _createObj = function(group, proto, actions){
        const obj = Object.assign({},proto,actions);
        const id = uniqueNumeralString(Object.keys(group));
        group[id] = obj;
        return obj;
    };

    const _updateObj = function(group, id, attributes){
        Object.keys(attributes).forEach(function(key){
            group[id].update(key, attributes[key]);
        });
    };

    return {
        createTodo,
        createProject,
        readTodo,
        readProject,
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
