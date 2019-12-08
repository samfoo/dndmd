#!/usr/bin/env node

"use strict";

const less = require('less'),
    fs = require('fs'),
    meow = require('meow'),
    path = require('path'),
    md = require('marked');

less.renderSync = function (input, options) {
    if (!options || typeof options != "object") options = {};
    options.sync = true;
    options.syncImport = true;
    var css;
    this.render(input, options, function (err, result) {
        if (err) throw err;
        css = result.css;
    });
    return css;
};

const pagesList = function(raw) {
    return raw.split('\\page');
};

const renderPage = function(pageText, index) {
    const t = md(pageText);
    return `
<div class="phb page", id="p${index+1}">${t}</div>
    `;
};

const renderPages = function(pages) {
    return pages.map((p, i) => {
        return renderPage(p, i);
    }).join("\n\n");
};

const h = function(html, css) {
    return `
    <!DOCKTYPE html>
    <html>
        <head>
        <style>
            ${css}
        </style>
        </head>

        <body class="phbmd">
        <div class="pages">
        ${html}
        </div>
        </body>
    </html>
    `;
};

const render = function(inputFile) {
    const inputText = fs.readFileSync(inputFile, 'utf8'),
        phbLess = fs.readFileSync(path.join(__dirname, './static/phbstyle/phb.style.less'), 'utf8'),
        phbmdLess = fs.readFileSync(path.join(__dirname, './static/phbmd.less'), 'utf8'),
        allLess = phbmdLess + "\n\n" + phbLess;

    const css = less.renderSync(allLess, {
            compress: false,
            filename: path.resolve(path.join(__dirname, "./static/phbmd.less"))
        }),
        pages = pagesList(inputText),
        html = renderPages(pages),
        rendered = h(html, css);

    return rendered;
};

const cli = meow(`
    Usage
      $ dndmd <input>

    Options
      --outfile, -o  Write output to <outfile> instead of printing to stdout
      --watch,   -w  Watch the input file and write a new output file when it changes
`, {
    flags: {
        outfile: {
            type: 'string',
            alias: 'o'
        },
        watch: {
            type: 'boolean',
            alias: 'w'
        }
    }
});

function main(inputFile, options) {
    if (options.watch && (typeof options.outfile === "undefined")) {
        console.log("must use --outfile/-o with watch");
        process.exit(1);
    }

    const writeOutput = function(rendered) {
        if (typeof options.outfile !== "undefined" && options.outfile !== null) {
            fs.writeFileSync(options.outfile, rendered);
        } else {
            console.log(rendered);
        }
    };

    if (options.watch) {
        require('log-timestamp');

        const rendered = render(inputFile);
        writeOutput(rendered);

        console.log(`watching ${inputFile} for changes...`);
        fs.watchFile(inputFile, function(e, t) {
            console.log(`${inputFile} changed, rerendering...`);
            const rendered = render(inputFile);
            writeOutput(rendered);
            console.log(`re-rendering finished!`);
        });
    } else {
        const rendered = render(inputFile);
        writeOutput(rendered);
    }
};

main(cli.input[0], cli.flags);
