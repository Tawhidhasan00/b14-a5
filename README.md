# 🚀 DevStack

## About The Project

DevStack is a technology stack builder web app where users can explore different technologies and create their own development stack. It provides a simple and clean interface to compare tools and choose the right technologies for a project.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Vite

## ✨ Features

- Browse different technologies with details like category, difficulty, rating, and description.
- Add technologies to a personal stack and remove them when needed.
- Fully responsive design for mobile, tablet, and desktop.

---

# React Questions

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. It makes creating React components easier and more readable.

---

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

---

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used to store and update changing data in React.
I used it to store the selected technologies in the user's stack.

---

### 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` runs code after a component renders. It is commonly used for fetching data or other side effects.
It can be used to load JSON data when the page starts.

---

### 5. Why does every item in a `.map()` list need a unique `key`?
The `key` helps React identify each item and update the UI efficiently.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

Example:
stack.length === 0 ? "Your Stack is empty" : "Show selected technologies"

--- 

### 7. How do you pass data from parent to child, and child to parent?

A parent passes data to a child using props.
A child sends data back by calling a function received from the parent as a prop.