import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  var [Emoji, setEmoji] = useState("🚀");

  const emojiGreeting = () => {
    if (Emoji / 2 !== 0) {
      <button>🚀 </button>;
    } else {
      return <button>🇩🇰 </button>;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Freddy. This is our initial skeleton - lets roll. I wrote this
          code in
          <code>src/App.js</code> check it out and play around if you want 🚀
        </p>
        <button style={style} onClick={() => setEmoji((Emoji += "🚀"))}>
          {Emoji}
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const style = {
  backgroundColor: "#282c34",
  fontSize: 200,
};

export default App;
