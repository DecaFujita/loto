import Ticket from './components/ticket/ticket.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ticket allNum={10} maxNum={6} title='Loto' />
      <Ticket allNum={40} maxNum={8} title='Mega' />
    </div>
  );
}

export default App;
