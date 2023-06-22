# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View](assets\screenshots\screenshot-01.png)
![Desktop View](assets\screenshots\screenshot-02.png)
![Mobile View](assets\screenshots\screenshot-03.png)
![Mobile View](assets\screenshots\screenshot-04.png)
![Desktop View](assets\screenshots\screenshot-05.png)
![Desktop View](assets\screenshots\screenshot-06.png)
![Desktop View](assets\screenshots\screenshot-07.png)



### Links

- Solution URL: [Frontend Mentor - Newsletter sign-up form with success message solution](https://github.com/prakashraja-0723/Frontend-Mentor-Newsletter-sign-up-form-with-success-message.git)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<input type="email" id="email" placeholder="email@company.com"/>
```
```css
.email {
    padding: 1.3em;
    border-radius: 8px;
}
```
```js
let email = document.getElementById("email");
let checkMail = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
if (email.value.match(checkMail)) {
    console.log(`User Email: ${email.value}`);
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources
- [JavaScript Program to Validate An Email Address](https://www.programiz.com/javascript/examples/validate-email) - This helped me for email valid [RegEx] . I really liked this pattern and will use it going forward.

## Author
- GitHub - [@prakashraja-0723](https://www.github.com/prakashraja-0723)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
