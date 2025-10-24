# Redux Todo App

A small Todo application demonstrating React with Redux Toolkit, Material UI inputs/buttons and Tailwind-like utility classes (styles present in project). It’s a minimal starter that shows how to wire a Redux store with slices and use actions from components.

## Live Demo:

https://todo-app-xvly.onrender.com

## Highlights
- Uses React 19 + Vite for a fast dev experience
- State management with Redux Toolkit (slice + store)
- Material UI components for inputs and buttons
- Small, focused UI with add and complete (delete) actions

## Tech stack
- React 19
- Vite
- Redux Toolkit (@reduxjs/toolkit)
- React-Redux
- Material UI (@mui/material)
- Styled-components / emotion (present in deps)
- Tailwind & PostCSS packages are present (project contains utility-style classes in components)

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node)

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project structure (important files)

- `index.html` — app shell used by Vite
- `src/main.jsx` — React entry that mounts the app
- `src/App.jsx` — root app; wraps UI with Redux `Provider`
- `src/Todo.jsx` — main UI: lists todos and renders `AddForm`
- `src/AddForm.jsx` — controlled input + submit dispatches `addTodo`
- `src/app/store.js` — Redux store configuration
- `src/features/todo/todoSlice.js` — Redux Toolkit slice (state, reducers, actions)
