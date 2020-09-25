"use strict";
exports.__esModule = true;
var convert_1 = require("./convert");
convert_1.convert(10, 'SMALL'); // Thats give you small letter. => 10
convert_1.convert(1000000, 'CAPITAL'); // Thats give you capital letter. => 1M
convert_1.convert(1000); // as defualt give you capital letter. => 1K
convert_1.comma(1000);
