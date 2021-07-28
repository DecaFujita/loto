import Ticket from './components/ticket/ticket.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ticket allNum={10} maxNum={6} title='Loto' />
    </div>
  );
}

export default App;
