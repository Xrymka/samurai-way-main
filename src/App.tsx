import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <main className="main">
        <h1 className="visually-hidden">Samurai Way</h1>
        <Profile />
      </main>
    </div>
  )
}
