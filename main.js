const me = {
        firstName: "Nekko",
        lastName: "Street",
        age: 20,
        occupation: "Programmer"
    }
    // first time using template literals, know that backticks `` are used instead of quotation marks and strings can be concatenated without + symbol/written as plain english, know that expressions can be used by placing it between curly braces followed by $ ie ${expression}
console.log(`Hello, I'm ${me.firstName} ${me.lastName}. I'm a ${me.age} ${me.occupation}`);