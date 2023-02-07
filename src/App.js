import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavComponent from "./component/MyNavComponent.jsx";
import MyFooterComponent from "./component/MyFooterComponent.jsx";
import WelcomeComponent from "./component/WelcomeComponent";
import AllTheBooksComponent from "./component/AllTheBooksComponet";
// import AllTheBooks from "./component/AllTheBooks.jsx";

function App() {
  return (
    <>
      <MyNavComponent />
      <WelcomeComponent />
      <AllTheBooksComponent />
      <MyFooterComponent />
    </>
  );
}

export default App;
