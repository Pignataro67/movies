import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <title>Movies</title>
          <button id="getText">Get Text</button>
          <script>
            document.getElementById('getText').addEventListener('click', getText);

            function getText() {
              fetch('sample.txt')
              .then((res) => res.text())
              .then((data) => {
                document.getElementById('output').innerHTML = data;
              })
              .catch((err) => console.log(err))
            }
          </script>
        </body>
      </header>
    </div>
  );
}

export default App;
