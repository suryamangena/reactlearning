## The BrowserRouter Component
As we've just seen, when the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.

## Install
npm install --save react-router-dom

## BrowserRouter -> This is the first component
It is going to listen changes in url and make sure correct screen shows up when url changes

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

When you use BrowserRouter, what you're really doing is rendering a Router component and passing it a history prop. Wait, what is history? history comes from the history library (also built by React Training). The whole purpose of this library is it abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

So in a nutshell, when you use BrowserRouter, you're creating a history object which will listen to changes in the URL and make sure your app is made aware of those changes.



 