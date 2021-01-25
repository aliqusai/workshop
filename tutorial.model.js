module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees",  {
      empId: {
        field: 'empId',
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      empname: {
        type: Sequelize.STRING
      },
      empsalary: {
        type: Sequelize.INTEGER
      },
      empdesgn: {
        type: Sequelize.STRING
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Employee;
  };

  