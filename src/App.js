import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import Contacto from './components/pure/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Jesus Noe Echeverria Medina
        </p> */}
        <Contacto names={"NOE"} lastname={"echeverria"} email= {"jesus@gmail.com"}></Contacto>
        <Greeting name={"NOE"}></Greeting>
        <GreetingF name="NOE"></GreetingF>
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
