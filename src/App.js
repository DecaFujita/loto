import Ticket from './components/ticket/ticket.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ticket allNum={40} maxNum={6} />
    </div>
  );
}

export default App;
