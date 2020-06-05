
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

   const drawForm = function(keys, obj){
        const form = createAndAppendElement(self.content,'form',{});
        const ol = createAndAppendElement(form,'ol',{});
        keys.forEach(function(key){
            const li = createAndAppendElement(ol,'li',{});
            const label = createAndAppendElement(li,'label',{for:key});
            label.textContent = titleCase(key);
            const input = createAndAppendElement(li,'input',{name:key,type:'text'});
            input.value = obj[key];
        });
    };

    const readForm = function(){
        const obj = {};
        const form = document.querySelector('form');
        const nodes = form.querySelectorAll('input');
        nodes.forEach(function(node){
            const key = node.getAttribute('name');
            obj[key] = node.value;
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

    const drawCard = function(keys, obj, click_fn){
        const card = createAndAppendElement(self.content,'div',{class:'card'});
        card.addEventListener('click',() => click_fn());
        keys.forEach(function(key){
            const span = createAndAppendElement(card, 'span', {class:'field'});
            span.textContent = `${titleCase(key)}: ${obj[key]}`;
        });
    };

    const drawDetailCard = function(keys, obj){
        const card = createAndAppendElement(self.content,'div',{class:'detail_card'});
        keys.forEach(function(key){
            const div = createAndAppendElement(card, 'div', {class:'field'});
            div.textContent = `${titleCase(key)}: ${obj[key]}`;
        });
    };        

    const drawButton = function(text, click_fn){
        const button = createAndAppendElement(self.content,'button',{});
        button.textContent = text;
        button.addEventListener('click',() => click_fn());
    };

    const createNavLink = function(text, fn){
        const link = createAndAppendElement(self.navbar,'a',{class:'navlink'});
        link.textContent = text;
        link.addEventListener('click',() => fn());
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
