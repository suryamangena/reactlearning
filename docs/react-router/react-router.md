## React Router
Is the tool helps to build single page applications. It keeps url and ui in sync. When you click on back button on browser application has to go previous page, this where react router comes into picture and make url and ui in sync.

## What is single page application
When user navigates to home page the request goes to server and server renders html and sends to the user, when user navigates to a new page again request goes back to the server and server renders new page html sends to user and every time user navigates this cycle repeates. In single page application  doesn't mean there is only one page in app, it mean browser  doesn't mean go back to the server  instead javascript can handle tranistion between pages, there is only one single page send by server that why it called single page applications.
React Router is the tool to build single page applications

## Single-Page Apps
Single-page applications can work in different ways. One way a single-page app loads is by downloading the entire site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. Why is this important? Bookmarkability! (pretty sure that's not a word...yet) When you bookmark a site, that bookmark is only a URL, it doesn't record the state of that page.

Have you noticed that any of the actions you perform in the app do not update the page's URL? We need to create React applications that offer bookmarkable pages!

## React Router
React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

According to the React Router website:

React Router is a collection of navigational components that compose declaratively with your application.

## [Dynamically Render Pages](./dynamically-render-pages.md)
## [Link Component](./the-link-component.md)
## [Route Component](./route-component.md)
## [Complete Contact form](./complete-contact-form.md)


## [Videos](./React+Router+Videos)

## React Nested Routes
https://ui.dev/react-router-nested-routes/


1) What is the difference between Link and Route?

2) What is the difference between match.path and match.url? Give a use case for each.

3) Create a code example where you (1) pass props to a component that's rendered by React Router and (2) use nested routes.

People to Follow
Whether it be popular blog posts or developers to follow on Twitter, a large part of getting everything out of a new technology is utilizing existing community resources. So we want to share with you with our favorite resources from the React community that we've found helpful over the last few years. Hopefully you'll find them helpful as well.

Dan Abramov - https://twitter.com/dan_abramov
Sebastian Markbåge
Henry Zhu
Peggy Rayzis
Merrick Christensen
Christopher Chedeau
React
Tyler McGinnis
Blog posts to read
You're missing the point of React
React "Aha" Moments
9 Things every React.js Beginner should know
React Elements vs React Components
If you want to learn more advanced topics in React, you can check out tylermcginnis.com.
