
import {createAndAppendElement, titleCase} from './library';

const View = (function(){
    const self = {};

    const _init = function(){
        self.parent = document.body;
        self.root = createAndAppendElement(self.parent,'div',{id:'root'});
        self.navbar = createAndAppendElement(self.root,'div',{id:'navbar'});
        self.header = createAndAppendElement(self.root, 'div',{id:'header'});
        self.content = createAndAppendElement(self.root, 'div',{id:'content'});
    };

   const drawForm = function(fields){
        const form = createAndAppendElement(self.content,'form',{});
        const ol = createAndAppendElement(form,'ol',{});
        Object.keys(fields).forEach(function(key){
            const li = createAndAppendElement(ol,'li',{});
            const label = createAndAppendElement(li,'label',{});
            const formatted_label = titleCase(fields[key]);
            label.textContent = formatted_label;
            const input = createAndAppendElement(li,'input',{type:'text',attribute:key});
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
            const formatted_key = titleCase(keys[i]);
            span.textContent = `${formatted_key}: ${values[i]}`;
        };
    };

    const drawDetailCard = function(keys, values){
        const card = createAndAppendElement(self.content,'div',{class:'detail_card'});
        for (let i = 0; i < keys.length; i++){
            const div = createAndAppendElement(card, 'div', {class:'field'});
            const formatted_key = titleCase(keys[i]);
            div.textContent = `${formatted_key}: ${values[i]}`;
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
        drawDetailCard,
        drawButton,
        createNavLink,
    };
})();


export{
    View,
}
