
import {createAndAppendElement} from './library';

const View = (function(){
    const self = {};

    const _init = function(){
        self.parent = document.body;
        self.root = createAndAppendElement(self.parent,'div',{id:'root',class:'root'});
        self.navbar = createAndAppendElement(self.root,'div',{id:'navbar',class:'navbar'});
        self.header = createAndAppendElement(self.root, 'div',{id:'header',class:'header'});
        self.content = createAndAppendElement(self.root, 'div',{id:'content',class:'content'});
    };

    /*
    const viewProjects = function(projects,view_fn){
        self.content.innerHTML = '';

        Object.keys(projects).forEach(function(id){
            const card = createAndAppendElement(self.content,'div',{class:'card'});
            card.addEventListener('click',() => view_fn(id));
            const fields = projects[id]['short_fields'];
            fields.forEach(function(field){
                const span = createAndAppendElement(card, 'span', {});
                span.textContent = `${field}: ${projects[id][field]}`;
            });
        });
    };

    //NOT DISPLAYING TODOS CORRECTLY
    const viewProject = function(project, todos, new_fn, view_fn){
        self.content.innerHTML = '';
        const h1 = createAndAppendElement(self.content,'h1',{});
        h1.textContent = project.title;
    
        const new_todo_btn = createAndAppendElement(self.content,'button',{})
        new_todo_btn.addEventListener('click',() => new_fn(project.id));
        new_todo_btn.textContent = 'Create Todo';

        Object.keys(todos).forEach(function(id){
            const card = createAndAppendElement(self.content,'div',{class:'card'});
            card.addEventListener('click',() => view_fn(id));
            const fields = todos[id]['short-fields'];
            fields.forEach(function(field){
                const span = createAndAppendElement(card, 'span', {});
                span.textContent = `${field}: ${todos[id][field]}`;
            });
        });
    };

    const viewTodo = function(project, todo, fields){
        self.content.innerHTML = '';
        const h1 = createAndAppendElement(self.content,'h1',{});
        h1.textContent = project.title;
        //const h2 = createAndAppendElement(self.content,'h2',{});
        //h2.textContent = todo.title;

        fields.forEach(function(field){
            const card = createAndAppendElement(self.content,'div',{class:'card'});
            card.textContent = `${field}: ${todo[field]}`;
        });
    };
    */

   const drawForm = function(fields){
        const form = createAndAppendElement(self.content,'form',{});
        const ol = createAndAppendElement(form,'ol',{});
        fields.forEach(function(field){
            const li = createAndAppendElement(ol,'li',{});
            const label = createAndAppendElement(li,'label',{});
            label.textContent = field;
            const input = createAndAppendElement(li,'input',{type:'text',attribute:field});
        });
    };

    const readForm = function(){
        const obj = {};
        const form = document.querySelector('form');
        const nodes = form.querySelectorAll('input');
        nodes.forEach(function(node){
            const attribute = node.getAttribute('attribute');
            obj[attribute] = node.value;
        });
        return obj;
    };

    const clear = function(){
        while(self.content.lastChild){
            self.content.lastChild.remove();
        };
    };

    const setHeader = function(string){
        self.header.textContent = string;
    };

    const drawCard = function(keys, values, click_fn){
        const card = createAndAppendElement(self.content,'div',{class:'card'});
        card.addEventListener('click',() => click_fn());
        for (let i = 0; i < keys.length; i++){
            const span = createAndAppendElement(card, 'span', {class:'field'});
            span.textContent = `${keys[i]}: ${values[i]}`;
        };
    };

    const drawButton = function(text, click_fn){
        const button = createAndAppendElement(self.content,'button',{});
        button.textContent = text;
        button.addEventListener('click',() => click_fn());
    };

    const createNavLink = function(text, fn){
        const link = createAndAppendElement(self.navbar,'a',{class:'navlink'});
        link.textContent = text;
        link.addEventListener('click',fn);
    };

    _init();

    return {
        clear,
        drawForm,
        readForm,
        setHeader,
        drawCard,
        drawButton,
        createNavLink,
    };
})();


export{
    View,
}
