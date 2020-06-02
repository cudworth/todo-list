
import {uniqueNumeralString} from './library'; //for unique todo & project ID generation

const todo_proto = {
    title:null,
    description:null,
    due_date:null,
    priority:null,
    notes:null,
    checklist:null,
    short_fields:['title','due_date','priority'],
    long_fields:['title','description','due_date','priority','notes','checklist'],
};

const project_proto = {
    title:null,
    todos:{},
};

const Model = (function(){
    let projects = {};

    const init = function(){
        (window.localStorage.getItem('projects'))? _load(): _save();
    };

    //PUBLIC
    const createTodo = function(project_id){
        const todo_id = _createObject(projects[project_id]['todos'], todo_proto);
        return todo_id;
    };

    const createProject = function(){
        const project_id = _createObject(projects, project_proto);
        return project_id;
    };

    const getTodoAttributes = function(project_id, todo_id, attributes){
        const todo = projects[project_id]['todos'][todo_id];
        const arr = [];
        attributes.forEach(function(attribute){
            arr.push(todo[attribute]);
        });
        return arr;
    };

    const getProjectAttributes = function(project_id, attributes){
        const project = projects[project_id];
        const arr = [];
        attributes.forEach(function(attribute){
            arr.push(project[attribute]);
        })
        return arr;
    };

    const getProjects = () => Object.keys(projects);

    const getTodos = (project_id) => Object.keys(projects[project_id]['todos']);

    const setProjectAttributes = function(project_id, attributes){
        _updateObject(projects[project_id], attributes);
    };

    const setTodoAttributes = function(project_id, todo_id, attributes){
        _updateObject(projects[project_id]['todos'][todo_id], attributes);
    };

    const deleteTodo = function(project_id, todo_id){
        delete projects[project_id]['todos'][todo_id];
    };
    
    const deleteProject = function(project_id){
        delete projects[project_id];
    };

    //PRIVATE
    const _save = function(){
        window.localStorage.setItem('projects',JSON.stringify(projects));
    };

    const _load = function(){
        projects = JSON.parse(window.localStorage.getItem('projects'));
    };

    const _createObject = function(group, proto){
        const id = uniqueNumeralString(Object.keys(group));
        group[id] = Object.assign({}, proto);
        return id;
    };

    const _updateObject = function(obj, attributes){
        Object.keys(attributes).forEach(function(key){
            obj[key] = attributes[key];
        });
        return obj;
    };

    init();

    return {
        createTodo,
        createProject,
        getTodoAttributes,
        getProjectAttributes,
        getTodos,
        getProjects,
        setTodoAttributes,
        setProjectAttributes,
        deleteTodo,
        deleteProject,
    };
})();

export{
    Model,
    todo_proto,
    project_proto,
}
