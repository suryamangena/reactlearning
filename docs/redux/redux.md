## Redux
Lesson 1 - Managing State
Lesson 2 - UI + Redux
Lesson 3 - Redux Middleware
Lesson 4 - Redux with React
Lesson 5 - Asynchronous Redux
Lesson 6 - react-redux
Lesson 7 - Real World Redux

Lesson 1 - Managing State
You’ll learn techniques to make your state more predictable by moving your state to a central location and establishing strict rules for getting, listening, and updating that state.

Lesson 2 - UI + Redux
You’ll learn to move away from having state live in the DOM by creating a vanilla JavaScript application whose state is managed entirely by Redux.

Lesson 3 - Redux Middleware
You’ll learn to create custom middleware and add it to your Redux store. This middleware will allow you to enhance your store by hooking into and intercepting actions before they reach any reducers.

Lesson 4 - Redux with React
You’ll learn how to add React to a Redux application and have the state of that application be managed by Redux.

Lesson 5 - Asynchronous Redux
You’ll learn to better abstract asynchronous events by creating your own custom Thunk middleware and adding it to your store.

Lesson 6 - react-redux
You’ll learn to leverage the react-redux bindings in order to leverage the benefits of a UI library like React and a state management library like Redux.

Lesson 7 - Real World Redux
You’ll take your knowledge of Redux and utilize it by building a real world Redux application. You’ll also learn advanced Redux topics like reducer composition and normalization.

## Follow Your Instructors
The Redux ecosystem is changing often! If you want to hear breaking news about Redux, potential changes to its API, conferences and meetups to attend, or just check out some projects, follow your instructors:

@tylermcginnis
@richardkalehoff
hbkwong

## Advantages of Maintaining State in one Location
1) Improves sharing state among different parts of application 
2) Typically two parts of app relys on same data,  each have their own copy of data we have to do lot of tricky work to maintain the state in sync. We update profile image and make a new post and find out old avatar used for new post 
3) Most predicatable state changes
4) Putting state in single location called State Tree

## State Tree
One of the key points of Redux is that all of the data is stored in a single object called the state tree. But what does a state tree actually look like? Good question! Here's an example:
'''
{
  recipes: [
    { … },
    { … },
    { … }
  ],
  ingredients: [
    { … },
    { … },
    { … },
    { … },
    { … },
    { … }
  ],
  products: [
    { … },
    { … },
    { … },
    { … }
  ]
}
'''

## Interact with State Tree
1) Way to Getting the State
2) Way to Listening for changes
3) Way to update the State

## Redux
Redux is trying to offer is predictable state management. The way that Redux tries to accomplish this is through having a single state tree.

## Summary
In this lesson, we looked at the data in an application. We saw that in traditional apps, the data is mixed in with the UI and markup. This can lead to hard-to-find bugs where updating the state in one location doesn't update it in every location.

We learned that the main goal that Redux is trying to offer is predictable state management. The way that Redux tries to accomplish this is through having a single state tree. This state tree is an object that stores the entire state for an application. Now that all state is stored in one location, we discovered three ways to interact with it:

getting the state
listening for changes to the state
updating the state
Then we combine the three items above and the state tree object itself into one unit which we called the **store**

## [Store](../imgs/Store.png)
the store has the following information:

the state tree
a way to get the state tree
a way to listen and respond to the state changing
a way to update the state


## Update the State
Only an event can change the state of the store and should not allow anything or anyone to update the state which effects/decrease the predictability.
Increasing the predictability  by estabilishing the strict set of rules how updates can be made

## Rule#1 -> Increasing predictability -> Only an event can change the state of the store

## ToDo Apps
1) Add to do 
```
{
    type: "ADD_TODO"
    todo: {
        id: 0;
        name: 'Learn Redux',
        complete: false
    }
}
```
2) Remove todo
```
{
    type: "REMOVE_TODO",
    id:0
}
```
3) Todo complete
```
{
    type: "TOGGLE_TODO",
    id:0
}
```
Lets call them above all as Actions which occurs in any app change the state. *** All Actions should have type property ***. By this if the state of the app changes, we know that one of the actions occured.

## Action
When an event takes place in a Redux application, we use a plain JavaScript object to keep track of what the specific event was. This object is called an Action.

Let's take another look at an Action:
```
{
  type: "ADD_PRODUCT_TO_CART"
}
```
As you can see, an Action is clearly just a plain JavaScript object. What makes this plain JavaScript object special in Redux, is that every Action must have a type property. The purpose of the type property is to let our app (Redux) know exactly what event just took place. This Action tells us that a product was added to the cart. That's incredibly descriptive and quite helpful, isn't it?

Now, since an Action is just a regular object, we can include extra data about the event that took place:
```
{
  type: "ADD_PRODUCT_TO_CART",
  productId: 17
}
```
In this Action, we're including the productId field. Now we know exactly which product was added to the store!

*** One more note to keep in mind as you build your Action objects: it's better practice to pass as little data as possible in each action. That is, prefer passing the index or ID of a product rather than the entire product object itself. ***

### Action Creators are functions that create/return action objects. For example:
```
const addItem = item => ({
  type: ADD_ITEM,
  item
});
```
## Redux
The whole goal of Redux is to increase predictability:
*** Redux is a predictable state container for JavaScript apps. *** 

## [Rule #2 The function that returns the new state needs to be a pure function](../imgs/function-state-action.png)

So far, our rules are:

Only an event can change the state of the store.
The function that returns the new state needs to be a pure function.

## Pure Function (helps improve predictability)
Defined by below three characteristics,
1) Returns the same result if the same agruments are passed in, if even we called that function million times it gives same output for same input values
2) Depends solely on the arguments passed into them, that mean it won't access variables oustide of that function scope, final return output will be produced by the input values that passed to that function 
3) Does not produce side effects that mean no interaction with outsider world such as network request, changing external state 

## What are Pure Functions?
Pure functions are integral to how state in Redux applications is updated. By definition, pure functions:

Return the same result if the same arguments are passed in
Depend solely on the arguments passed into them
Do not produce side effects, such as API requests and I/O operations
Let’s check out an example of a pure function, square():
```
// `square()` is a pure function
const square = x => x * x;
```
square() is a pure function because it outputs the same value every single time, given that the same argument is passed into it. There is no dependence on any other values to produce that result, and we can safely expect just that result to be returned -- no side effects (more on this in a bit!).

On the other hand, let’s check out an example of an impure function, calculateTip():
```
// `calculateTip()` is an impure function
const tipPercentage = 0.15;

const calculateTip = cost => cost * tipPercentage;
```
calculateTip() calculates and returns a number value. However, it relies on a variable (tipPercentage) that lives outside the function to produce that value. Since it fails one of the requirements of pure functions, calculateTip() is an impure function. However, we could convert this function to a pure function by passing in the outside variable, tipPercentage, as a second argument to this function!
```
const calculateTip = (cost, tipPercentage = 0.15) => cost * tipPercentage;
```

### Why Pure Functions Are Great
For our purposes, the most important feature of a pure function is that it's predictable. If we have a function that takes in our state and an action that occurred, the function should (if it's pure!) return the exact same result every single time.

## Questions
### Q1 What is true about pure functions? Check all that apply.
1) Pure functions do not rely on information other than the arguments passed in to them to generate an output.
2) Pure functions can produce different outputs even with the same arguments passed in each time.
3) Pure functions do not depend on external state.
4) Pure functions are expected to modify shared state.
5) Pure functions should modify the original arguments passed in to them.
Ans: 1,3 are correct 

### [Question2](../imgs/Question2.png)

## Now we need a way to tie State and action, we can use pure function to do this 
## This pure function is called as Reducer

## Reducer 
Reducer function takes state and action, returns brand new state of application. And Reducer must be a pure function 

## Three items we have so far Actions, Reducer, Store 
1) Actions -> Represents different events that changes the state of our store 
2) Reducer -> Takes current state and action that occured and returns new state 
3) CreateStore -> Creating Actual store 


## We need a way to update the state 
## Dispatch 
Dispatch is responsible for updating the state inside the actual store. Takes action as argument and call reducer to get the new state, then loop through the listeners and update the state.

The new dispatch() method is pretty small, but is vital to our functioning store code. To briefly recap how the method functions:

dispatch() is called with an Action
the reducer that was passed to createStore() is called with the current state tree and the action...this updates the state tree
because the state has (potentially) changed, all listener functions that have been registered with the subscribe() method are called

## [Store State Subscribe Dispatch Definitions](../imgs/Store-State-Subscribe-dispatch.png)

## Summary
We've finally finished creating the createStore function! Using the image above as a guide, let's break down what we've accomplished:

we created a function called createStore() that returns a store object
createStore() must be passed a "reducer" function when invoked
the store object has three methods on it:
.getState() - used to get the current state from the store
.subscribe() - used to provide a listener function the store will call when the state changes
.dispatch() - used to make changes to the store's state

## [Store Question](../imgs/Store-true-Statement.png)

## Multiple Reducers got a problem as createStore accepts only one reducer 
To handle this we need to create root reducer 

## [Q1](../imgs/reducer-q1.png)
```
// Separate Class

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL= 'REMOVE_GOAL';

// This function is called reducer as it is taking state and action and reducing it as state. And Reducer must be a pure function
function todos(state = [], action) {
    switch(action.type){
        case ADD_TODO :
            return state.concat([action.todo]);
        case REMOVE_TODO:
            return state.filter((todo)=> todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((todo)=> todo.id !== action.id? todo: Object.assign({}, todo, {complete: !todo.complete}));
        default:
            return state;
    }
    
}

//Add Goals

function goals (state=[], action){
    switch(action.type){
        case ADD_GOAL:
            return state.concat([action.goal]);
        case REMOVE_GOAL:
            return state.filter((goal)=> goal.id!==action.id);
        default:
            return state;
    }
}

//Root Reducer
function app (state={}, action){
    return {
        todos: todos(state.todos,action),
        goals: goals(state.goals,action),
    }
}

// Separate Class
function createStore(reducer) {
    // The store should have four parts
    //1. The State
    //2. Get the state
    //3. Listen to changes on the state
    //4. Update the state
    let state;
    let listeners = [];



    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    }

    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach((listener)=> listener());
    }
    
    return {
        getState,
        subscribe,
        dispatch,
      };
}

const store = createStore(app);
store.subscribe(() => { console.log('The new state is: ', store.getState()) });


function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

store.dispatch(addToDoAction({
    id:0,
    name: 'Learn React',
    complete: false,
}))

store.dispatch({
    type: ADD_GOAL,
    goal: {
        id:0,
        name: 'React Prof',
        complete: false,
    },
})


store.dispatch({
    type: REMOVE_TODO,
    todo: {
        id:0
    },
})



const unsubscribe = store.subscribe(() => { console.log('The store changed ') });

unsubscribe();
```

## Git Project 
https://github.com/udacity/reactnd-redux-todos-goals


## References
1) https://blog.pusher.com/the-what-and-why-of-redux/
2) https://css-tricks.com/learning-react-redux/


## Three Fundamentals of Redux
Single source of truth. The global state of your application is stored in an object tree within a single store. ...
State is read-only. The only way to change the state is to emit an action, an object describing what happened. ...
Changes are made with pure functions






















