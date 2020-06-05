/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\nconst Controller = (function(){\n\n    const init = function(){   \n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].createNavLink('Projects List', viewProjects);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].createNavLink('New Project', projectForm);\n        \n        viewProjects();\n    };\n\n    const viewProjects = function(){\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].clear();\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].setHeader('Projects');\n        const project_ids = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getProjects();\n        const keys = ['title'];\n        project_ids.forEach((project_id) => {\n            const attributes = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getProjectAttributes(project_id,keys);\n            _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawCard(keys,attributes,viewProject.bind(null,project_id));\n        });\n    };\n\n    const viewProject = function(project_id){\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].clear();\n        const attrs = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getProjectAttributes(project_id,['title']);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].setHeader(`Project - ${attrs['title']}`);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Create Todo',todoForm.bind(null,project_id));\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Edit Project',projectForm.bind(null,project_id));\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Delete Project',deleteProject.bind(null,project_id));\n\n        const keys = ['title','due_date','priority'];\n        const todo_ids = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getTodos(project_id);\n        todo_ids.forEach((todo_id) => {\n            const attributes = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getTodoAttributes(todo_id,keys);\n            _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawCard(keys,attributes,viewTodo.bind(null,todo_id));\n        });\n    };\n\n    \n    const viewTodo = function(todo_id){\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].clear();\n        const attrs = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getTodoAttributes(todo_id,['title']);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].setHeader(`Todo - ${attrs['title']}`);\n\n        const project_id = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getProject(todo_id);\n\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Edit',todoForm.bind(null,project_id,todo_id));\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Delete',deleteTodo.bind(null,todo_id));\n\n        const keys = ['title','description','due_date','priority','notes'];\n        const attributes = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getTodoAttributes(todo_id,keys);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawDetailCard(keys,attributes);\n    };\n\n    const projectForm = function(project_id){\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].clear();\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].setHeader('Project Form');\n\n        let obj = {};\n        const keys = ['title'];\n        if (project_id) {\n            console.log('pid found');\n            obj = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getProjectAttributes(project_id,keys);\n        } else {\n            keys.forEach((key) => obj[key] = '');\n        };\n\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawForm(keys, obj);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Submit',setProject.bind(null,project_id));\n    };\n\n    const todoForm = function(project_id, todo_id){\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].clear();\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].setHeader('Todo Form');\n\n        let obj = {};\n        const keys = ['title','description','due_date','priority','notes'];\n\n        if (todo_id) {\n            obj = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].getTodoAttributes(todo_id,keys);\n        } else {\n            keys.forEach((key) => obj[key] = '');\n        };\n\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawForm(keys, obj);\n        _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].drawButton('Submit',setTodo.bind(null,project_id,todo_id));\n    };\n\n    const setProject = function(project_id){\n        const attributes = _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].readForm();\n\n        if (!project_id) {\n            project_id = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].createProject();\n        }\n\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].setProjectAttributes(project_id,attributes);\n        viewProject(project_id);\n    };\n\n    const setTodo = function(project_id,todo_id){\n        const attributes = _view__WEBPACK_IMPORTED_MODULE_1__[\"View\"].readForm();\n\n        if (!todo_id) {\n            todo_id = _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].createTodo(project_id);\n        };\n\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].setTodoAttributes(todo_id,attributes);\n        viewTodo(todo_id);\n    };\n\n    const deleteProject = function(project_id){\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].deleteProject(project_id);\n        viewProjects();\n    };\n\n    const deleteTodo = function(todo_id){\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].deleteTodo(todo_id);\n        viewProjects();\n    };\n\n    return {\n        init,\n    };\n\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ \"./src/style.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n\n_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add('../assets/reset.css');\n_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add('../assets/style.css');\n\n\n\n_controller__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"].init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/*! exports provided: uniqueNumeralString, createAndAppendElement, titleCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniqueNumeralString\", function() { return uniqueNumeralString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAndAppendElement\", function() { return createAndAppendElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleCase\", function() { return titleCase; });\nconst uniqueNumeralString = function(existing){\n\n    const num_chars = 7;\n\n    const _getNumStr = function(num_chars){\n        const arr = [];  \n        while (arr.length < num_chars){\n            arr.push(Math.floor(10*Math.random()));\n        }\n        return arr.join('');\n    };\n\n    let str;\n\n    while(true){\n        str = _getNumStr(num_chars);\n        if (!existing.includes(str)){\n            break;\n        };\n    };\n\n    return str;\n};\n\nconst createAndAppendElement = function(parent, type, attributes){\n    const child = document.createElement(type);\n    parent.append(child);\n    Object.keys(attributes).forEach(key => {\n        child.setAttribute(key.toString(), attributes[key])\n    });\n    return child;\n}\n\nconst titleCase = function(string){\n    const words = string.toLowerCase().split('_');\n    const array = [];\n    words.forEach(function(word){\n        array.push(word.charAt(0).toUpperCase() + word.slice(1));\n    });\n    return array.join(' ');\n};\n\n\n\n\n//# sourceURL=webpack:///./src/library.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: Model, todo_proto, project_proto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todo_proto\", function() { return todo_proto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project_proto\", function() { return project_proto; });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\n //for unique todo & project ID generation\n\nconst todo_proto = {\n    title:null,\n    description:null,\n    due_date:null,\n    priority:null,\n    notes:null,\n};\n\nconst project_proto = {\n    title:null,\n};\n\nconst Model = (function(){\n    let projects;\n    let links;\n    let todos;\n    \n    if (0 == window.localStorage.length){\n        projects = {};\n        links = {};\n        todos = {};\n    } else {\n        projects = JSON.parse(window.localStorage.getItem('projects'));\n        todos = JSON.parse(window.localStorage.getItem('todos'));\n        links = JSON.parse(window.localStorage.getItem('links'));\n    };\n\n    //PUBLIC\n    const createTodo = function(project_id){\n        const todo_id = _createObject(todos, todo_proto);\n        links[project_id].push(todo_id);\n        _save();\n        return todo_id;\n    };\n\n    const createProject = function(){\n        const project_id = _createObject(projects, project_proto);\n        setProjectAttributes(project_id,{todos:{}});\n        links[project_id] = [];\n        _save();\n        return project_id;\n    };\n\n    const getTodoAttributes = function(todo_id, keys){\n        const todo = todos[todo_id];\n        const obj = {};\n        keys.forEach(function(key){\n            obj[key] = todo[key];\n        });\n        return obj;\n    };\n\n    const getProjectAttributes = function(project_id, keys){\n        const project = projects[project_id];\n        const obj = {};\n        keys.forEach(function(key){\n            obj[key] = project[key];\n        })\n        return obj;\n    };\n\n    const getProjects = () => Object.keys(projects);\n\n    const getTodos = (project_id) => links[project_id];\n\n    const getProject = (todo_id) => _getKey(links,todo_id);\n\n    const setProjectAttributes = function(project_id, attributes){\n        _updateObject(projects[project_id], attributes);\n        _save();\n    };\n\n    const setTodoAttributes = function(todo_id, attributes){\n        _updateObject(todos[todo_id], attributes);\n        _save();\n    };\n\n    const deleteTodo = function(todo_id){\n        Object.keys(links).forEach(function(key){\n            if(links[key].includes(todo_id)){\n                const index = links[key].indexOf(todo_id);\n                links[key].splice(index,1);\n            };\n        });\n        delete todos[todo_id];\n        _save();\n    };\n    \n    const deleteProject = function(project_id){\n        const todos = links[project_id];\n        todos.forEach((todo) => delete todos[todo]);\n        delete links[project_id];\n        delete projects[project_id];\n        delete links[project_id];\n        _save();\n    };\n\n    //PRIVATE\n    const _save = function(){\n        window.localStorage.setItem('projects',JSON.stringify(projects));\n        window.localStorage.setItem('todos',JSON.stringify(todos));\n        window.localStorage.setItem('links',JSON.stringify(links));\n    };\n\n    const _createObject = function(group, proto){\n        const id = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"uniqueNumeralString\"])(Object.keys(group));\n        group[id] = Object.assign({}, proto);\n        return id;\n    };\n\n    const _updateObject = function(obj, attributes){\n        Object.keys(attributes).forEach(function(key){\n            obj[key] = attributes[key];\n        });\n        return obj;\n    };\n\n    const _getKey = function(obj, value){\n        Object.keys(obj).forEach(function(key){\n            if(obj[key].includes(value)){return key};\n        });\n        return null;\n    };\n\n    return {\n        createTodo,\n        createProject,\n        getTodoAttributes,\n        getProjectAttributes,\n        getTodos,\n        getProjects,\n        getProject,\n        setTodoAttributes,\n        setProjectAttributes,\n        deleteTodo,\n        deleteProject,\n    };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst cascadingStyleSheets = (function(){\n\n    function add(file){\n        const link = document.createElement('link');\n        link.setAttribute('type', 'text/css');\n        link.setAttribute('rel', 'stylesheet');\n        link.setAttribute('href', file);\n        document.head.append(link);\n    }\n\n    return {\n        add,\n    }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cascadingStyleSheets);\n\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\n\n\nconst View = (function(){\n    const self = {};\n\n    const _init = function(){\n        self.parent = document.body;\n        self.root = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.parent,'div',{id:'root'});\n        self.navbar = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.root,'div',{id:'navbar'});\n        self.header = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.root, 'div',{id:'header'});\n        self.content = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.root, 'div',{id:'content'});\n    };\n\n   const drawForm = function(keys, obj){\n        const form = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.content,'form',{});\n        const ol = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(form,'ol',{});\n        keys.forEach(function(key){\n            const li = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(ol,'li',{});\n            const label = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(li,'label',{for:key});\n            label.textContent = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"titleCase\"])(key);\n            const input = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(li,'input',{name:key,type:'text'});\n            input.value = obj[key];\n        });\n    };\n\n    const readForm = function(){\n        const obj = {};\n        const form = document.querySelector('form');\n        const nodes = form.querySelectorAll('input');\n        nodes.forEach(function(node){\n            const key = node.getAttribute('name');\n            obj[key] = node.value;\n        });\n        return obj;\n    };\n\n    const clear = function(){\n        while(self.content.lastChild){\n            self.content.lastChild.remove();\n        };\n    };\n\n    const setHeader = function(string){\n        self.header.textContent = string;\n    };\n\n    const drawCard = function(keys, obj, click_fn){\n        const card = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.content,'div',{class:'card'});\n        card.addEventListener('click',() => click_fn());\n        keys.forEach(function(key){\n            const span = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(card, 'span', {class:'field'});\n            span.textContent = `${Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"titleCase\"])(key)}: ${obj[key]}`;\n        });\n    };\n\n    const drawDetailCard = function(keys, obj){\n        const card = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.content,'div',{class:'detail_card'});\n        keys.forEach(function(key){\n            const div = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(card, 'div', {class:'field'});\n            div.textContent = `${Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"titleCase\"])(key)}: ${obj[key]}`;\n        });\n    };        \n\n    const drawButton = function(text, click_fn){\n        const button = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.content,'button',{});\n        button.textContent = text;\n        button.addEventListener('click',() => click_fn());\n    };\n\n    const createNavLink = function(text, fn){\n        const link = Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"createAndAppendElement\"])(self.navbar,'a',{class:'navlink'});\n        link.textContent = text;\n        link.addEventListener('click',() => fn());\n    };\n\n    _init();\n\n    return {\n        clear,\n        drawForm,\n        readForm,\n        setHeader,\n        drawCard,\n        drawDetailCard,\n        drawButton,\n        createNavLink,\n    };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });