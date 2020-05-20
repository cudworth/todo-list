
const cascadingStyleSheets = (function(){

    function add(file){
        const link = document.createElement('link');
        link.setAttribute('type', 'text/css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', file);
        document.head.append(link);
    }

    return {
        add,
    }
})();

export default cascadingStyleSheets;
