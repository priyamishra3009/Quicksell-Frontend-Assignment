import './App.css';
import Title from './components/elements/Names';
import KanbanBoard from './components/elements/KanbanBoard';

function App() {
  return (
    <div className="App">
      <KanbanBoard/>
      <Title/>
    </div>
  );
}

export default App;
