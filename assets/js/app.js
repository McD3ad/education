'use strict';
// // Bootstraping
// import boot from './bootstrap';

// // App files
// import main from './app/index';

// Styles
import '../scss/app.scss';

import Worker from './oop/Worker';

let worker = new Worker('John', 'Doe', 25);

console.log(worker.details())