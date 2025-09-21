import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;