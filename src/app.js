import { Header } from "./components/header";
import { Footer } from "./components/footer";
function App() {
  document.getElementById("nav").innerHTML = Header();
  document.getElementById("wrapper").innerHTML = Footer();
}
//Initialize the App
App();
