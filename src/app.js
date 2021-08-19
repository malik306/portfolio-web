import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./components/main";
function App() {
  document.getElementById("nav").innerHTML = Header();
  document.getElementById("wrapper").innerHTML = Footer();
  document.getElementById("main").innerHTML = Main();
}
//Initialize the App
App();
