
const myController = (function(){
    const self = {};

    const init = function(model, view){
        
        //view.setModel(model);
        
        view.renderItem();
    }

    return {init};
})();


export {
    myController
}
