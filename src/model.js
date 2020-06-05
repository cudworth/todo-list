
import {uniqueNumeralString} from './library'; //for unique todo & project ID generation

const todo_proto = {
    title:null,
    description:null,
    due_date:null,
    priority:null,
    notes:null,
};

const project_proto = {
    title:null,
};

const Model = (function(){
    let projects;
    let links;
    let todos;
    
    if (0 == window.localStorage.length){
        projects = {};
        links = {};
        todos = {};
    } else {
        projects = JSON.parse(window.localStorage.getItem('projects'));
        todos = JSON.parse(window.localStorage.getItem('todos'));
        links = JSON.parse(window.localStorage.getItem('links'));
    };

    //PUBLIC
    const createTodo = function(project_id){
        const todo_id = _createObject(todos, todo_proto);
        links[project_id].push(todo_id);
        _save();
        return todo_id;
    };

    const createProject = function(){
        const project_id = _createObject(projects, project_proto);
        setProjectAttributes(project_id,{todos:{}});
        links[project_id] = [];
        _save();
        return project_id;
    };

    const getTodoAttributes = function(todo_id, attributes){
        const todo = todos[todo_id];
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

    const getTodos = (project_id) => links[project_id];

    const setProjectAttributes = function(project_id, attributes){
        _updateObject(projects[project_id], attributes);
        _save();
    };

    const setTodoAttributes = function(todo_id, attributes){
        _updateObject(todos[todo_id], attributes);
        _save();
    };

    const deleteTodo = function(todo_id){
        Object.keys(links).forEach(function(key){
            if(links[key].includes(todo_id)){
                const index = links[key].indexOf(todo_id);
                links[key].splice(index,1);
            };
        });
        delete todos[todo_id];
        _save();
    };
    
    const deleteProject = function(project_id){
        const todos = links[project_id];
        todos.forEach((todo) => delete todos[todo]);
        delete links[project_id];
        delete projects[project_id];
        delete links[project_id];
        _save();
    };

    //PRIVATE
    const _save = function(){
        window.localStorage.setItem('projects',JSON.stringify(projects));
        window.localStorage.setItem('todos',JSON.stringify(todos));
        window.localStorage.setItem('links',JSON.stringify(links));
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
