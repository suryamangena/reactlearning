## Complete Create contact form 
## Serialize The Form Data
At this point, our form will serialize the values from user input (i.e., the name and email), adding them as a query string to the URL. We can add some additional functionality by having our app serialize these form fields on its own. After all, we want the app to ultimately handle creating the contact and saving it to the state.

To accomplish this, we'll use the form-serialize package to output this information as a regular JavaScript object for the app to use.

npm install --save form-serialize

