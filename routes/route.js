const express = require('express');
const routerApp = express.Router();

const salasCtl = require('../controller/ctlSalasDeAula');

routerApp.get('/GetAllSalasDeAula', salasCtl.GetAllSalasDeAula);
routerApp.post('/GetSalasDeAulaByID', salasCtl.GetSalasDeAulaByID);
routerApp.post('/InsertSalasDeAula', salasCtl.InsertSalasDeAula);
routerApp.post('/UpdateSalasDeAula', salasCtl.UpdateSalasDeAula);
routerApp.post('/DeleteSalasDeAula', salasCtl.DeleteSalasDeAula);

module.exports = routerApp;
