import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css'

import AppRouter from './router'
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;