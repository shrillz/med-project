import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './components/Sidebar/index.scss'; // Import Sidebar styles

/**
 * Renders the main application component, which sets up the routing and layout.
 */
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>

    </>
  )
}

export default App
