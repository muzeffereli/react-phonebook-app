import Users from "./components/Users";
import { Route, Routes} from 'react-router-dom';
import Status from "./components/Status";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route index element={<Users/>} />
            <Route path="/users"  element={<Users/>} />
            <Route path="/status"  element={<Status/>} />
            <Route path="*"  element={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
