const key = "testKey";  
const results = { testKey: "testValue" };

const newHiddenInput = document.createElement('input')
  .setAttribute('type', 'hidden')
  .setAttribute('name', key)
  .setAttribute('value', results[key]);

