## Redux with React 
One of the great thing about Redux is, we can integrate redux in anything in ui
1) React apps
2) Vue apps
3) plain HTML apps
4) Vanilla JavaScript apps

*** I want you to pay attention to a few things in the next screencast:*** 


where the store.dispatch() code goes in a React component
how a React component is passed the Redux store as a prop


## Git 
https://github.com/suryamangena/redux-learning

## ref
Refs provide a way to access DOM nodes or React elements created in the render method.

When to Use Refs
The docs outline a few good use cases for refs:

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.

*** React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts. Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires. ***