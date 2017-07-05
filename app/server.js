var express = require('express');
var pdf = require('html-pdf');
const admin = require('./admin/admin');
var app = express();
var fs = require('fs')

app.use("/admin", admin());

app.get("/test", (req, res) => {
    fs.readFile('./html.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        pdf.create(data).toStream(function (err, stream) {
            if (err) {
                console.log(err);
                res.send("error");
                return;
            }
            res.setHeader("content-type", "application/pdf");
            res.setHeader("content-disposition", "attachment");
            stream.pipe(res);
        });
    });
})

app.get("/*", (req, res) => {
    res.status(404).send("pagina non trovata");
})

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});
