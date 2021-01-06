//express
const express = require('express');
const app = express();
//pasta rotas
const path = require('path');
const router = express.Router();
//banco
const db = require('./Data/lista.js')


//atalhos
const bodyParser = require("body-parser");
const { stringify } = require('querystring');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const atalhos = {
    'home': '/pages/home.html',
    'script':'/pages/script/script.js',
    'admin':'/pages/admin.html',
    'admin-script':'/pages/script/admin.js'
}
//gets*******************
router.get('/', (req, res, next) => res.sendFile(path.join(__dirname+atalhos['home'])));
router.get('/admin', (req, res, next) => res.sendFile(path.join(__dirname+atalhos['admin'])));
router.get('/script/admin.js', (req, res, next) => res.sendFile(path.join(__dirname+atalhos['admin-script'])));
router.get('/script/script.js', (req, res, next) => res.sendFile(path.join(__dirname+atalhos['script'])));
router.get('/api/lista-cozinha', (req, res, next) => {
    db.all("select * from cozinha", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "Dados": rows
        })
        console.log(req.body.escolhido)
    });
});
router.get('/api/lista-sala', (req, res, next) => {
    db.all("select * from sala", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "Dados": rows
        })
    });
});
router.get('/api/lista-quarto', (req, res, next) => {
    db.all("select * from quarto", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "Dados": rows
        })
        console.log(req.body.escolhido)
    });
});
router.get('/api/lista-banheiro', (req, res, next) => {
    db.all("select * from banheiro", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "Dados": rows
        })
        console.log(req.body.escolhido)
    });
});
router.get('/api/lista-lavanderia', (req, res, next) => {
    db.all("select * from lavanderia", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "Dados": rows
        })
        console.log(req.body.escolhido)
    });
});
//patch********************
router.patch("/api/atualizar-cozinha/:id", (req, res, next) => {
    db.run(
        `UPDATE cozinha set 
           escolhido = COALESCE(?,escolhido) 
           WHERE id = ?`,
        [ req.body.escolhido, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: req.body.escolhido,
                changes: this.changes
            })
            console.log(req.body.escolhido)
    });
})
router.patch("/api/atualizar-sala/:id", (req, res, next) => {
    db.run(
        `UPDATE sala set 
           escolhido = COALESCE(?,escolhido) 
           WHERE id = ?`,
        [ req.body.escolhido, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: req.body.escolhido,
                changes: this.changes
            })
            console.log(req.body.escolhido)
    });
})
router.patch("/api/atualizar-quarto/:id", (req, res, next) => {
    db.run(
        `UPDATE quarto set 
           escolhido = COALESCE(?,escolhido) 
           WHERE id = ?`,
        [ req.body.escolhido, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: req.body.escolhido,
                changes: this.changes
            })
            console.log(req.body.escolhido)
    });
})
router.patch("/api/atualizar-banheiro/:id", (req, res, next) => {
    db.run(
        `UPDATE banheiro set 
           escolhido = COALESCE(?,escolhido) 
           WHERE id = ?`,
        [ req.body.escolhido, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: req.body.escolhido,
                changes: this.changes
            })
            console.log(req.body.escolhido)
    });
})
router.patch("/api/atualizar-lavanderia/:id", (req, res, next) => {
    db.run(
        `UPDATE lavanderia set 
           escolhido = COALESCE(?,escolhido) 
           WHERE id = ?`,
        [ req.body.escolhido, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: req.body.escolhido,
                changes: this.changes
            })
            console.log(req.body.escolhido)
    });
})
//ouvindo
app.use('/', router);
app.listen(process.env.PORT || 3000, () => console.log('Ouvindo'))

