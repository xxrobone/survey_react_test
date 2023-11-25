# Hi there 👋 

## This is a Demographic Age Survey, it's built with react using tests 

The functionality is a survey form with 3 radio buttons to choose gender from, and an input for adding age
<br/>
A button to add more people, gender and age, on add the form inputs should be reset but not the states needed to do the calculation
<br/>
A submit button for seeing the result after adding the amount of people needed for the current survey (own choice)
<br/>
After submit the form and states should be reset
<br/>
A reset button to restart the process that shows up when showing the result (can be done in many ways, simple is always best)
<br/>
User should be able to choose from showing a form or a about component on the page

All tests can be found in the /src/__test__ dir

# Components and Features to include 💾

Components:     

    - Header 
    Header with a title

    - Footer 
    With a copyright symbol (additional text of own choice)

    - Form component 
    With the right input fields and types for the inputs + labels
    inputs for - male, female or other & an input for entering an age

    - About component  
    With a text About, rest is up to you

    - Selector Component 
    The user should be able to choose from showing the Form or About on screen

Util:
    
    - Count average age
    From user inputs (kept in state) which should be triggered on submitting the form to show the results on screen

Keep track of:
        total amount of males 
        total amount of females
        total amount of others 
        total age for males
        total age for females
        total age for others
        current gender and age (should be displayed on the screen when entering)
    

### Getting started

clone the repo, fork it or start a new react app

```sh
npx create-react-app
```

```sh
npm run start
```

### How to run test 

```sh
npm run test
```

Hope its not too hard and understandable
Lets go! 😊