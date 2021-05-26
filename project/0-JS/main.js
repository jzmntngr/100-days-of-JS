//Concatenation OLD
    const name= "Jaz";
    const age = 18;
// console.log('My name is ' + name + ' and i am ' + age);
// Template String
    const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// Strings & String Methods
  // tags
    const tag = 'technology, computers, it, code';

    // console.log(tag.split(', '));

// Arrays

    const fruits = ['mangoes', 'strawberries', 'apples'];

      // console.log(fruits);
      // fruits[3] = 'grapes';
      // // lagay sa dulo
      // fruits.push('raspberries');
      // // lagay sa unahan
      // fruits.unshift('oranges');
      // // alisin ung dulo
      // fruits.pop();
      // console.log(Array.isArray(fruits));
      // console.log(fruits.indexOf('oranges'));
      // console.log(fruits);

// Object Literals
    const person = {
        firstName : 'John',
        lastName : 'John',
        age : 10,
        hobbies : ['tennis', 'writing', 'swimming'],
        address : {
          street : '50 main st.',
          city : 'Boston',
          state : 'MA'
        }
    }

    // console.log(person.hobbies[0]);

// Destructuring - gawing variables ES6

    const {firstName, hobbies, address : {state}} = person;
      // ^this is not assigning but pulling from person
      // console.log(hobbies[0]);
      // console.log(state);

      // Add properties directly
      person.email = 'johndoe@email.com';
      // console.log(person);

// Arrays of Objects
      const todos = [
        {
           id: 1,
           text: 'Take out trash',
           isCompleted: true

        },
        {
           id: 2,
           text: 'Meting ',
           isCompleted: true

        },
        {
           id: 3,
           text: 'Watch movies',
           isCompleted: false

        },
      ];

      // console.log(todos[2])

// Convert to JSON
        const todoJSON = JSON.stringify(todos);
        // console.log(todoJSON);

// Looping
    // FOR
      for(let i = 0; i <= 10 ; i++){
        // console.log(`For loop number: ${i}`);
      }
    // WHILE
      let i = 0;
      while( i <= 10){
          console.log(`While loop number: ${i}`);
          i++;
      }
    //
// Looping tru Arrays



