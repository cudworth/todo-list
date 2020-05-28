
import {createAndAppendElement} from './library';

const myView = (function(){
    const self = {};

    //const init = function(model){
        self.parent = document.body;
        self.root = createAndAppendElement(self.parent,'div',{id:'root',class:'root'});
        self.navbar = createAndAppendElement(self.root,'div',{id:'navbar',class:'navbar'});
        self.content = createAndAppendElement(self.root, 'div',{id:'content',class:'content'});
    //};

    const renderItem = function(obj){
        self.content.innerHTML = '';
        const fields = obj['fields'];
        const ol = createAndAppendElement(self.content, 'ol', {});
        fields.forEach(function(field){
            const li = createAndAppendElement(ol, 'li', {});
            li.textContent = `${field}: ${obj[field]}`;
        });
    };

    const renderGroup = function(group){
        self.content.innerHTML = '';
        Object.keys(group).forEach(function(item){
            const card = createAndAppendElement(self.content, 'div',{})
            const fields = group[item]['fields'];
            fields.forEach(function(field){
                const span = createAndAppendElement(card, 'span', {});
                span.textContent = `${field}: ${group[item][field]}`;
            });
        });
    };

    const renderForm = function(fields, fn){
        self.content.innerHTML = '';
        const form = createAndAppendElement(self.content,'form',{});
        const ul = createAndAppendElement(form,'ul',{});
        const btn = createAndAppendElement(self.content,'button',{});
        btn.textContent = 'Submit';
        btn.addEventListener('click',fn);

        
        fields.forEach(function(field){
            const li = createAndAppendElement(ul,'li',{});
            const label = createAndAppendElement(li,'label',{});
            label.textContent = field;
            const input = createAndAppendElement(li,'input',{type:'text'});
        });
    };


   const createNavLink = function(text, fn){
        const link = createAndAppendElement(self.navbar,'a',{class:'navlink'});
        link.textContent = text;
        link.addEventListener('click',fn);
    };

   // init();

    return {
        createNavLink,
        renderForm,
        renderItem,
        renderGroup,
    };


})();



export{
    myView,
}
