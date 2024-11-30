import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
});

const __dirname = path.resolve();

const template = Handlebars.compile(fs.readFileSync(__dirname + '/src/template/template.html', 'utf8'));

const filePath = `/src/assets/lang/${process.argv[2]}.json`;
const data = {
    data: JSON.parse(fs.readFileSync(__dirname + `${filePath}`, 'utf8'))
};

const output = template(data);
console.log(output);