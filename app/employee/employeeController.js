var employees = [];

module.exports = {
    load: function(){
        return employees;
    },
    add: function(sources){
        employees.push({
            name:{
                first: sources.firstName,
                last: sources.lastName
            },
            jobTitle: sources.jobTitle,
            pay:{
                rate: sources.payRate,
                type: sources.payType
            }
        })
    }
}