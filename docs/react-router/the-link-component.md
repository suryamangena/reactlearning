## Link Component
When the user clicks on the link it talks to browserrouter and tells to update the url, it still works with keyboard interaction and right click on mouse open in new window

As you've seen, Link is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.
```
<Link to="/about">About</Link>
```

If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,
```
<Link to={{
 pathname: '/courses',
 search: '?sort=name',
 hash: '#the-hash',
 state: { fromDashboard: true }
}}>
 Courses
</Link>
```

## Link Recap
React Router provides a Link component which allows you to add declarative, accessible navigation around your application. You'll use it in place of anchor tags (a) as you're typically used to. React Router's <Link> component is a great way to make navigation through your app accessible for users. Passing a to prop to your link, for example, helps guide your users to an absolute path (e.g., /about):

<Link to="/about">About</Link>
Since the <Link> component fully renders a proper anchor tag (<a>) with the appropriate href, you can expect it to behave how a normal link on the web behaves.
