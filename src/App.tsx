import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import UsersPage from "./pages/users"
import RegisterPage from "./pages/register"

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
