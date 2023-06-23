import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <AppLayout>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </AppLayout>
  );
}

export default App;
