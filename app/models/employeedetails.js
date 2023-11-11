'use strict';

module.exports = (sequelize, DataTypes) => {
    const employeedetails = sequelize.define('employeedetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        empid: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        empname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailid: DataTypes.STRING,
        job: DataTypes.STRING,
        createddate: DataTypes.DATE,
        createdby: DataTypes.STRING,
        lastmodifiedby: DataTypes.STRING,
        lastmodifieddate: DataTypes.DATE,
        isactive: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        tableName: 'employeedetails',
        freezTable: true
    });
    return employeedetails;
};