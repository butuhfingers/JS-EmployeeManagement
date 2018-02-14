var employees = [];

module.exports = {
    load: function(){
        return employees;
    },
    add: function(sources){
        employees.push({
            name:{
                first: sources.firstName,
                last: sources.lastName,

                print: function(){
                    return this.first + " " + this.last;
                }
            },
            jobTitle: sources.jobTitle,
            pay:{
                rate: sources.payRate,
                type: sources.payType,
                insurance: 100,
                insuranceType: sources.insuranceType,
                isHourly: sources.payType === "hourly"
            }
        })
    }
}

employees.push({
    name:{
        first: "Joe",
        last: "Smith",

        print: function(){
            return this.first + " " + this.last;
        }
    },
    jobTitle: "Muffin Man",
    pay:{
        rate: 20,
        type: "hourly",
        isHourly: true,
        insuranceType: "medium"
    }
});

employees.push({
    name:{
        first: "Jill",
        last: "Smith",

        print: function(){
            return this.first + " " + this.last;
        }
    },
    jobTitle: "Wicked Witch of the West",
    pay:{
        rate: 2000000,
        type: "salary",
        isHourly: false,
        insuranceType: "none"
    }
});