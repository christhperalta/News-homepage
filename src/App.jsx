import AppLayout from "./components/AppLayout";
import Aside from "./components/Aside";
import ContentLayout from "./components/ContentLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <AppLayout>
      <Header />
      <ContentLayout>
        <Main />
        <Aside/>
        <Footer/>
      </ContentLayout>
    </AppLayout>
  );
}

export default App;
