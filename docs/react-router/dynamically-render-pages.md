## Dynamically render pages

We packed quite a bit of important changes in this little video! We created the CreateContact component that'll be in charge of the form to create new contacts. In staying with the general React theme of favoring composition, we created this as a standalone component and used composition by adding it to the render() method in the App component.

In an attempt to do an extremely simple recreation of how React Router works, we added a screen property to this.state, and used this property to control what content should display on the screen. If this.state.screen is list then we'll show the list of all existing contacts. If this.state.screen is create then we'll show the CreateContact component.

## Short-circuit Evaluation Syntax Or Guard 
In this video and when we created the Now showing section from earlier, we used a somewhat odd looking syntax:
```
{this.state.screen === 'list' && (
  <ListContacts
  contacts={this.state.contacts}
  onDeleteContact={this.removeContact}
  />
)};
```
and
```
{this.state.screen === 'create' && (
  <CreateContact />
)}
```
This can be a little confusing with both the JSX code for a component and the code to run an expression. But this is really just the logical expression &&:

expression && expression
What we're using here is a JavaScript technique called short-circuit evaluation. If the first expression evaluates to true, then the second expression is run. However, if the first expression evaluates to false, then the second expression is skipped. We're using this as a guard to first verify the value of this.state.screen before displaying the correct component.

Add A Button
Right now we have to manually change the state to get the app to display the different screens. We want the user to be able to control that in the app itself, so let's add a button!

