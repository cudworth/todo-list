

import cascadingStyleSheets from './style.js';
cascadingStyleSheets.add('../assets/reset.css');
cascadingStyleSheets.add('../assets/style.css');

import {myController} from './controller';

myController.init();
