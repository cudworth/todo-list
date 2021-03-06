const uniqueNumeralString = function(existing){

    const num_chars = 7;

    const _getNumStr = function(num_chars){
        const arr = [];  
        while (arr.length < num_chars){
            arr.push(Math.floor(10*Math.random()));
        }
        return arr.join('');
    };

    let str;

    while(true){
        str = _getNumStr(num_chars);
        if (!existing.includes(str)){
            break;
        };
    };

    return str;
};

const createAndAppendElement = function(parent, type, attributes){
    const child = document.createElement(type);
    parent.append(child);
    Object.keys(attributes).forEach(key => {
        child.setAttribute(key.toString(), attributes[key])
    });
    return child;
}

const titleCase = function(string){
    const words = string.toLowerCase().split('_');
    const array = [];
    words.forEach(function(word){
        array.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return array.join(' ');
};

export{
    uniqueNumeralString,
    createAndAppendElement,
    titleCase,
}
