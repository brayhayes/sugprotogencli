"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("../options");
const compiller_1 = require("../compiller");
const compiller = new compiller_1.Compiller(Object.assign({}, options_1.options));
compiller.compile();
