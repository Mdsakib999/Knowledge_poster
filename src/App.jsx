import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import LoadData from './components/Data/LoadData';
import SideCard from './components/SideCard/SideCard';

function App() {
  const [reading, setReading] = useState("");

  const readTime = (time) => {
    const previousTime = (localStorage.getItem("readTime"));

    if(previousTime) {
      let sum = parseInt(previousTime) + parseInt(time);
      localStorage.setItem("readTime", sum);
      
      setReading(sum)
    }
    else{
      localStorage.setItem("readTime", time);
      setReading(time);
    }
  };



  
  return (
    <div>
      <Header></Header>
      <div className='home'>
        <LoadData readTime={readTime}></LoadData>
        <div className='side-card'>
        <SideCard reading={reading}></SideCard>
        </div>
      </div>
      
      <div className='qns'>
        <div className="que">
          <h2>Question 1: What is the difference between props and state?</h2>
          <p>Ans: Props are the configuration of a component. They are derived from above and are immutable as far as their derived material is concerned. A component cannot change its props, but it is responsible for combining the props of its child components.
          State is a data structure that is initialized with a default value when a component is mounted. It is mutable, meaning that it can be changed by the component itself. State allows a component to keep track of its own data and trigger a re-render when that data changes. State can be changed by calling the setState() method, which is provided by React.
          Props are read-only and cannot be changed by the child component, while the component itself can change state using the setState() method.</p>
        </div>

        <div className="que">
          <h2>Question 2: How useState() works?</h2>
          <p>Ans: In React, the useState() hook is used to add state to a functional component. The useState() hook is a function that takes an initial value as its argument and returns an array of two items, the current state value and a function to update the state.
          useState inside a function component creates a section of state associated with that component. Whereas state in a class is always an object, state can be any type, including hooks. Each part of the state holds a single value, which is an object, an array, a boolean, or any other type you can imagine.</p>
        </div>
        <div className="que">
          <h2>Question 3: How does React work?</h2>
          <p>Ans: 

              React is a popular JavaScript library used for building user interfaces. ReactJS divides the UI into isolated reusable pieces of code known as components. React uses a virtual DOM (Document Object Model) to manage and efficiently update user interface state.
              React uses components as the building blocks of the user interface. Components can be thought of as functions that take in data (called "props") and return a description of the user interface (called "JSX").
              When a component is rendered, it returns a description of the user interface in the form of JSX. React takes this JSX and uses it to create a tree of virtual DOM nodes. The Virtual DOM is a lightweight representation of the actual DOM, which allows React to update the user interface efficiently without needing to manipulate the real DOM.
              React uses a Virtual DOM to keep track of the state of the user interface. React provides a way to handle user interactions (such as button clicks) through an event system. When an event is triggered, React updates the state of the user interface, which triggers the reconciliation and update process described above.
              Once React understands what has changed in the virtual DOM, it updates the original DOM to match the new virtual DOM. Instead of updating every single element in the real DOM, React only updates the elements that have changed, making the update process very efficient.
              In short we can say, React uses components, a Virtual DOM, and an efficient update process to manage the state of the user interface and provide a responsive user experience.</p>
        </div>
        <div className="que">
          <h2>Question 4: What else useEffect() do without load data?</h2>
          <p>Ans: The useEffect() hook in React is used to perform side effects in function components.  Here are some examples of how useEffect() can be used without loading data:
          We can use useEffect() to add event listeners to the document or window. This can be useful for handling global events like keyboard shortcuts or detecting when the user scrolls the page.
          We can use useEffect() to dynamically update the document title based on the state of the component.
          We can use useEffect() to clean up any side effects that your component creates, like removing a class from the body of the document when the component unmounts.
          In short, while useEffect() can be used to perform other side effects like adding event listeners, updating the document title, or cleaning up side effects when a component unmounts.</p>
        </div>
      </div>
    </div>
  );
}


export default App
