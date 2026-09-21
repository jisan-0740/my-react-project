# DevStack

DevStack is a technology stack management website where users can explore different technologies and add their favorite technologies to their personal stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Vite
* React Toastify
* JSON

## Features

* Browse different technologies with their details and ratings.
* Add technologies to Your Stack and prevent duplicate selections.
* Remove individual technologies or remove all selected technologies.
* Shows a success toast when a technology is added.
* Selected technologies are highlighted with a colored border.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It is used in React to create and describe the user interface.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data that a component manages and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it in `App.tsx` to store the selected technologies and update the Your Stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects after a component renders, such as fetching data.

In this project, I did not use `useEffect` to load the JSON data. I used `fetch()` with React's `use()` instead.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to change the card border when a technology is selected:

```tsx
alreadySelected
  ? "border-blue-500"
  : "border-gray-200"
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function passed from the parent as a prop.

In this project, `App.tsx` passes `selected` and `setSelected` to the child components. The child uses `setSelected` to update the selected technologies.
