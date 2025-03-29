function createAndConfigureElement(tag, attributes) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    return element;
  }
  
  const key = "testKey";
  const results = { testKey: "testValue" };
  
  const newHiddenInput = createAndConfigureElement('input', {
    type: 'hidden',
    name: key,
    value: results[key]
  });
  