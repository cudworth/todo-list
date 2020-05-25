
import {createAndAppendElement} from './library';

const myView = (function(){
    const self = {};

    const init = function(){
        self.parent = document.body;
        self.root = createAndAppendElement(self.parent,'div',{id:'root',class:'root'});
        self.navbar = createAndAppendElement(self.root,'div',{id:'navbar',class:'navbar'});
        self.content = createAndAppendElement(self.root, 'div',{id:'content',class:'content'});
        _createLink(self.navbar, 'Projects', renderList({}));
        _createLink(self.navbar, 'New Project', renderForm({}));
        _createLink(self.navbar, 'Todos', renderList({}));
        _createLink(self.navbar, 'New Todo', renderForm({}));
    };

    


    
    const _createLink = function(parent, text, fn){
        const link = createAndAppendElement(parent,'a',{class:'navlink'});
        link.textContent = text;
        link.addEventListener('click',fn);
    };

    const renderItem = function(item){
        self.content.innerHTML = '';

    };

    const renderList = function(list){
        self.content.innerHTML = '';
        Object.keys(list).forEach(function(key){
            const card = createAndAppendElement(self.content, 'div',{})
            card.textContent = list[key]
        });
    };

    const renderForm = function(){

    };

    /*
    const setModel = function(model){
        self.model = model;
    };
    */

    init();

    return {
        renderForm,
        renderItem,
        renderList,
    };


})();



export{
    myView,
}
