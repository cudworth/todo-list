import cascadingStyleSheets from './style.js';
cascadingStyleSheets.add('../assets/reset.css');
cascadingStyleSheets.add('../assets/style.css');

import {applicationController} from './appcontroller';
import {displayController} from './dispcontroller';

const disp = displayController();
disp.setParent(document.body);
disp.render();