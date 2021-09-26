## Folder Structure
Right now, all of our app's code is located in a single file. This isn't a very realistic way to build an app, though. Hopefully it hasn't been too frustrating scrolling up and down and up and down to find the right place to add your code! 😉

To fix this, we're going to use Create React App to scaffold out a React app for us. If, for some reason, you don't have Create React App installed on your machine, you can install it by running the following in your Terminal:


## "Rails-style" Organization
To recap, we've organized the individual elements of our app with a "Rails-style" approach. That is, assets are grouped by "type" or "capability": any action will be found in the Actions folder, any reducer will be found in Reducers, and so on. In fact, the “real world” example from Redux on GitHub structures the app this very way. Under this directory structure, if we wanted to import all actions into a component, we can get them all in a single import!
```
Frontend
   - Components
      - component1.js
      - component2.js
      - component3.js
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Util
   - Store
```

## Other Patterns
Along with the "Rails style" of organizing your folder structure, you may find other approaches that developers use to build their directory more to your liking. An alternative way to structure the same application, then, is by feature:
```
├── dashboard
│ ├── actions.js
│ ├── index.js
│ └── reducer.js
└── nav
 ├── actions.js
 ├── index.js
 └── reducer.js
 ```
This form of organization groups assets by their common feature or “concept.” That is, all assets related to a navigation component are all together in a single, modular folder. It’s a great way to visually express what the application is all about. However, if the app contains several hundred components, it can become more difficult to navigate through.

What's more: you might even see that some developers prefer a "duck" style approach, where Redux and state management files are completely separated from files that render UI.

Ultimately, the choice is yours. Whichever way you choose to organize your directory structure, just be sure that it’s something that makes sense for your app, and it’s something you’re comfortable with!


## Summary
This section didn't accomplish anything with React or Redux. All we did here was improve the structure and organization of our app by moving each portion of the app to a specific folder structure.

To say it one more time, there's no "right" way to build out the folder structure for you app. However, doing it this way is handy because we're using the structure provided by Create React App. Using this structure, it's easy to convert a plain React application over to one that includes Redux. Another benefit is that other React developers will already be comfortable with this file/folder organization.






## Git Code
https://github.com/udacity/reactnd-redux-todos-goals/blob/1177c07de724399ba9f8b1573c4c9711caa23daa/package.json

## Real World Example
https://github.com/reduxjs/redux/tree/master/examples/real-world/src


