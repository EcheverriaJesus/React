import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Jesus Noe Echeverria Medina
        </p> */}
        <Greeting name={"NOE"}></Greeting>
        <GreetingF name="NOE"></GreetingF>
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
