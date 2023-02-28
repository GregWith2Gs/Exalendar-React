import Iframe from './iframe.js';

function Home() {
    return (
        <div className="App">
            <h1>Home Page Test</h1>
            <Iframe source={"./test.html"} />
        </div>
    );
}

export default Home;