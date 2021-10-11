## Route Component 
Route path matches the url or not, if the path matches url it display render ui -> It will make back button will work as it check change in url 
```
  <Route path='/' render={() => (
          (<  ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={this.onNavigate}
          />)
        )} />

        *** We have to use when we are passing props to component ***

        **Below no need to use the render we can use component as we are not passing any props*** 
        <Route path='/create' component={CreateContact}/>

```

## Questions
1) [Q1](../../imgs/router-q1.png)

## Route Component Recap
The main takeaway from this section is that with a Route component if you want to be able to pass props to a specific component that the router is going to render, you'll need to use Route’s render prop. As you saw, render puts you in charge of rendering the component which in turn allows you to pass any props to the rendered component as you'd like.

In summary, the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.





