

import {uniqueNumeralString} from './library'; //for unique todo & project ID generation
import {myObject} from './library';


const sample_todo = {
    title:'The Odin Project',
    description:'Finish todo list project',
    dueDate:'5/24/2020',
    priority:'high',
    notes:'',
    checklist:'',
};

const todo_proto = {
    ID:null,
    project:null,
    title:null,
    description:null,
    dueDate:null,
    priority:null,
    notes:null,
    checklist:null,
};

const project_proto = {
    ID:null,
    title:null,
    todos:[],
};

const CRUDs = (self) => ({
    create: (key, value) => self[key] = value,
    read: (key) => self[key],
    update: (key, value) => self[key] = value,
    destroy: (key) => delete self[key],
});

const todo_actions = (self) => Object.assign({},CRUDs(self));
const project_actions = (self) => Object.assign({},CRUDs(self));
const model_actions = null; //TODO



const myModel = (function(){
    const self = {};
    self.projects = {};
    self.todos = {};

    const createTodo = function(){
        const ID = uniqueNumeralString(Object.keys(todos));
        const todo = myObject(todo_proto, todo_actions)
        todo.ID =  ID;
        self.todos[ID] = todo;
    };

    const createProject = function(){
        const ID = uniqueNumeralString(Object.keys(projects));
        const project = myObject(project_proto,project_actions);
        project.ID = ID;
        self.projects[ID] = project;        
    };

    return {
        createTodo,
        createProject,
    };
})();


export{
    myModel,
}
