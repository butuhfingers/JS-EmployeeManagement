var rtv = {};

var payCalculator = {
    "hourly" : function(employee){
        return employee.pay.rate * 40;
    },
    "salary": function(employee){
        return employee.pay.rate / 52;
    }
};

var insuranceCalculator = {
    "none" : function(){
        return 0;
    },
    "low": function(){
        return 50;
    },
    "medium" : function(){
        return 100;
    },
    "high": function(){
        return 150;
    }
}

var lineCalculator = [
    {
        describe: "Gross Pay",
        apply: function (employee, pay) {
            return pay;
        },
        newPay: function(employee, pay){
            return parseFloat(pay).toFixed(2);
        }
    },
    {
        describe: "Taxes Withheld",
        apply: function (employee, pay) {
            return pay * .25;
        },
        newPay: function(employee, pay){
            return (pay - this.apply(employee, pay)).toFixed(2);
        }
    },
    {
        describe: "Charitable Giving",
        apply: function(employee, pay){
            return 100;
        },
        newPay: function(employee, pay){
            return pay - this.apply(employee, pay).toFixed(2);
        }
    },
    {
        describe: "Health Insurance",
        apply: function(employee, pay){
            return parseFloat(employee.pay.insurance);
        },
        newPay: function(employee, pay){
            return pay - this.apply(employee, pay);
        }
    },
    {
        describe: "Take Home Pay",
        apply: function (employee, pay) {
            return pay;
        },
        newPay: function(employee, pay){
            return this.apply(employee, pay).toFixed(2);
        }
    }
];

rtv.run = function(employees, finishedCallback){
    var result = [];


    employees.forEach(function (employee){
        var employeeType = employee.pay.type;
        employee.pay.insurance = insuranceCalculator[employee.pay.insuranceType]();
        var pay = payCalculator[employeeType](employee);
        var lines = [];

        lineCalculator.forEach(function (lineCalculator){
            var result = lineCalculator.apply(employee, pay);
            pay = lineCalculator.newPay(employee, pay);
            lines.push({key: lineCalculator.describe, value: result});
        });

        result.push({
            name: employee.name.print(),
            lines: lines
        });
    });

    finishedCallback(result);
};

module.exports = rtv;