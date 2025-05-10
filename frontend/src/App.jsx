import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskProvider";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager"; // nuevo componente combinado

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-4">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
