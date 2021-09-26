## Asynchronous Redux
Allows us to call the external data using apis

class App extends React.Component {
      componentDidMount () {
        const { store } = this.props

        Promise.all([
          API.fetchTodos(),
          API.fetchGoals()
        ]).then(([ todos, goals ]) => {
          console.log('Todos', todos)
          console.log('Goals', goals)
        })
        ...
}

In the task above, you could've just fetched all of our todos and then all of our Goals, but that's serial and is just making the user wait an unnecessarily long amount of time. Since the API is Promise-based, we can use Promise.all() to wait until all Promises have resolved before displaying the content to the user.

Promises are asynchronous, and this lesson is all about working with asynchronous data and asynchronous requests. If you're feeling a little unsure about Promises, check out the Promise documentation on MDN or check out our JavaScript Promises course.


*** Remember that the render() has to be a pure function and it runs before componentDidMount() *** 

## Optimistic Updates
When dealing with asynchronous requests, there will always be some delay involved. If not taken into consideration, this could cause some weird UI issues. For example, let’s say when a user wants to delete a todo item, that whole process from when the user clicks“delete” to when that item is removed from the database takes two seconds. If you designed the UI to wait for the confirmation from the server to remove the item from the list on the client, your user would click “delete” and then would have to wait for two seconds to see that update in the UI. That’s not the best experience.

Instead what you can do is a technique called optimistic updates. Instead of waiting for confirmation from the server, just instantly remove the user from the UI when the user clicks “delete”, then, if the server responds back with an error that the user wasn’t actually deleted, you can add the information back in. This way your user gets that instant feedback from the UI, but, under the hood, the request is still asynchronous.

We’ll see this technique in the upcoming screencasts.

## Summary
In this section, swapped more functionality over to using the API. We now use the database to:

remove Todos and Goals
toggle the state of a Todos
save a new Todo or Goal
What's important is that for the removing and toggling, we're doing these actions optimistically. So we're assuming the change will succeed correctly on the server, so we update the UI immediately, and then only roll back to the original state if the API returns an error. Doing optimistic updates is better because it provides a more realistic and dynamic experience to the user.
