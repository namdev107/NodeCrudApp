'use strict';
const { Console, log } = require('console');
module.exports = function (app) {

    const employeedetails = require('../controllers/employeedetails.controller.js');

    // todoList Routes
  app.get("/api", (req, res) => {
    res.status(200).send({
      message: "welcome to test"
    });
  })

  app.get("/getAllEmployees", employeedetails.getAllEmployees);
  app.put("/createNewEmployee", employeedetails.createNewEmployee);
  app.put("/updateAddEmployee", employeedetails.updateAddEmployee);
  app.delete("/deleteEmpData", employeedetails.deleteEmpData);

}