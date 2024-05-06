1. You want to ensure that it can be verified accurately without any differences between languages.
2. The data attribute stores data that you want to store in HTML that can be read in JavaScript. This can be used to give information to the scripts especially if this data can be modified during user use. This is likely what is used for microdata.
3. A DOM fragment are lightweight objects used to store segments of documents but are not part of the document itself. They can be used to hold common bits of code needed that can then be added anywhere in your document.
4. It is a representation of the DOM that is easy to update and allows for quick updates to the actual DOM but creates more overhead so it more intensive on devices.
5. The word "class" conflicts with many languages so className is used instead.
6. OnClick can be embedded into the HTML code and can make for shorter code, but shorter code can mean harder to read code and it would require you to search your code to find these OnClick to fix if something goes wrong. addEventListener is done in JS and assigns an event to whatever element you want. It's longer code and is separate from the actual element and so requires you to find your element as well. It can be more annoying and quite a bit longer, but it helps with organization and separates things for easier logic and debugging.