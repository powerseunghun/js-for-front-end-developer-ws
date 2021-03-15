var person1 = {
    toLocaleString: function() {
        return "Nikolaos";
    },
    toString: function() {
        return "Nicholas";
    }
};

var person2 = {
    toLocaleString: function() {
        return "Grigorios";
    },
    toString: function() {
        return "Greg";
    }
};

var people = [person1, person2];
alert(people);                     // Nicholas,Greg
alert(people.toString());          // Nicholas,Greg
alert(people.toLocaleString());    // Nikolaos,Grigorios