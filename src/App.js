import Ticket from './ticket/ticket.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ticket maxNum={10} />
    </div>
  );
}

export default App;
