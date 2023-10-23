

function App(props) {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello {subject}
        </p>

          Learn React

      </header>
    </div>
  );
}

export default App;
