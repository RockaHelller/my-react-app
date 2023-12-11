import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Tools from "./Tools";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Main />
        <Tools/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
