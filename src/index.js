import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

const template = Handlebars.compile(fs.readFileSync(__dirname + '/src/template/template.html', 'utf8'));

const data = {
    languages: [{
        data: JSON.parse(fs.readFileSync(__dirname + '/src/assets/lang/en.json', 'utf8'))
    },{
        data: JSON.parse(fs.readFileSync(__dirname + '/src/assets/lang/de.json', 'utf8'))
    },{
        data: JSON.parse(fs.readFileSync(__dirname + '/src/assets/lang/pl.json', 'utf8'))
    }]
};

const output = template(data);
console.log(output);