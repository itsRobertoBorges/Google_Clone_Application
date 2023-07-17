import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
          href
        />
      </header>
      <main className="content">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Google Search"
          />
          <button className="search-button" type="submit">
            Search
          </button>
          <button href="https://www.google.com/doodles" className="feeling-lucky-button" type="button">
            I'm Feeling Lucky
          </button>
        </form>
      </main>
      <footer className="footer">
        <p className="footer-text text-white">
          Google offered in: <a href="/">English</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
