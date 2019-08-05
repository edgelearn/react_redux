# ReactJS Redux

Run the following command to get a basic ReactJS application setup with Redux:

```
npx create-react-app my-app
cd my-app
npm install redux react-redux redux-thunk --save
yarn start

```

1. Setup Reducer & Store

* Create a reducer for a user's profile

* Use the combineReducers function to create a root reducer

* Create a redux store

* Provide the redux store to the application

2. Install Redux Saga

3. Use Connect function to connect store to JSX component

4. Create an Action

* Create an action to change a key and value on a user's profile

* Add 2 input fields to the App.js for the first and last name

* Bind the action so that when a key is pressed in each field, the action is triggered with an appropriate key and value

5. Update state based upon the action

* Change the reducer for the user's profile to listen to the action previously created and update the appropriate key with the new value

6. Use Thunk

* Using setTimeout function, dispatch an event before and after the timeout in the action.

7. Setup Middleware

* Add a middleware logger that logs to the console all of the actions that are performed.

8. Handle Auth status through Redux

* Add a middleware that adds a "login" object to each triggered action so that it is available to each reducer listening to that action.

9. Introduce Redux Form

* Install redux-form module

* Add a form reducer

* Create a form component similar to the work done in App.js

* Add Form Field Components

* React to the submit button

10. Replace Redux with Context

* Use what you learned about Context to make a copy of the changes done in App.js and use Context instead of redux. 

After you have completed all of the exercises, commit your changes with the following command:

```
git commit -am "ReactJS Redux Examples"
```
