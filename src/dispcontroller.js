const displayController = function(){
    self = {};

    const setParent = function(parent){
        self.parent = parent;
    };

    const render = function(){
        self.parent.innerHTML = '';
        self.container = document.createElement('div');
        self.container.textContent = 'hello world';
        self.parent.append(self.container);
    }

    return {
        render,
        setParent,
    };


};

export{
    displayController,
}
