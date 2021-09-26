## Thunk
Right now, we included the API code calling in the Component code. For cleaner look, it is good to move the API code to be called in action creator.
Thunk is a middleware which verifies whether action creator returns function or object, if it returns function it will dispatch/call that function and returns the object

Thunks give asynchronicity 


Remember middleware executes in the order it is listed in the applyMiddleware() function.
```
Currently, our code for removing a todo item looks like this:

removeItem(item) {
  const { dispatch } = this.props.store

  dispatch(removeTodoAction(item.id))

  return API.deleteTodo(item.id)
    .catch(() => {
      dispatch(addTodoAction(item))
      alert('An error occured. Try again.')
    })
  }
}
```

## Benefits of Thunks
Out of the box, the Redux store can only support the synchronous flow of data. Middleware like thunk helps support asynchronicity in a Redux application. You can think of thunk as a wrapper for the store’s dispatch() method; rather than returning action objects, we can use thunk action creators to dispatch functions (or even or Promises).

Without thunks, synchronous dispatches are the default. We could still make API calls from React components (e.g., using the componentDidMount() lifecycle method to make these requests) -- but using thunk middleware gives us a cleaner separation of concerns. Components don't need to handle what happens after an asynchronous call, since API logic is moved away from components to action creators. This also lends itself to greater predictability, since action creators will become the source of every change in state. With thunks, we can dispatch an action only when the server request is resolved!


## Summary
If a web application requires interaction with a server, applying middleware such as thunk helps solve the issue of asynchronous data flow. Thunk middleware allows us to write action creators that return functions rather than objects.

By calling our API in an action creator, we make the action creator responsible for fetching the data it needs to create the action. Since we move the data-fetching code to action creators, we build a cleaner separation between our UI logic and our data-fetching logic. As a result, thunks can then be used to delay an action dispatch, or to dispatch only if a certain condition is met (e.g., a request is resolved).

## More Asynchronous Options
The most common requests I get for this course are around more advanced data-fetching topics with Redux. I've resisted because typically they bring in a lot of complexity, while the benefits aren't seen until your data-fetching needs become large enough. With that said, now that you have a solid foundation on Redux and specifically, asynchronous Redux, you'll be in a good position to read up on the different options to decide if any would work best for the type of application you're working on. I encourage to read up on both of the other (popular) options.

Redux Promise - FSA-compliant promise middleware for Redux.
Redux Saga - An alternative side effect model for Redux apps
Summary
In this section, we used the thunk library that we installed in the previous section to make our code more singularly-focused and maintainable. We converted the:

Goals code to use thunks
Todos code to use
initial data fetching to use thunks

## Questions
1) [Question1](../../../imgs/ThunkQ-1.png)
2) [Question2](../../../imgs/thunkq-2.png)

## References
1) [html code](./thunk.html)
2) Alternatives for Thunk
https://github.com/redux-utilities/redux-promise
https://github.com/redux-saga/redux-saga


