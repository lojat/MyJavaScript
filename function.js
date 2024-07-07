function getReminder(){
    console.log('Water the plants.')
  }
  
  function greetInSpanish(){
    getReminder();
    console.log('Buenas tardes.')
  }
  
  greetInSpanish();


//   Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:

//   Define a function called sayThanks() as a function declaration.
//   In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'

  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  sayThanks();
  sayThanks();
  

  
//   The sayThanks() function works well, but let’s add the customer’s name in the message.

//   Add a parameter called name to the function declaration for sayThanks().

function sayThanks(name) {
    console.log('Thank you for your purchase '+name+'! We appreciate your business.');
  }
  sayThanks('Cole'); 

  
//   The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

//   Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().
  
//   Change the parameters of makeShoppingList() into default parameters :
  
//   Assign ‘milk’ as the default value of item1.
//   Assign ‘bread’ as the default value of item2.
//   Assign ‘eggs’ as the default value of item3.
  function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  