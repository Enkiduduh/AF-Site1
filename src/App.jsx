import "./styles/App.css";
import View from "./layout/views/View";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <View />
        <Footer />
      </div>
    </>
  );
}

export default App;
