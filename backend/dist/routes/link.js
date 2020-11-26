"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/links', (req, res) => {
    return res.send('essa é a rota POST');
});
router.get('/links/:code', (req, res) => {
    return res.send('Essa é a rota GET');
});
router.get('/links/:code/stats', (req, res) => {
    res.send('Essa é a rota Stats');
});
exports.default = router;
