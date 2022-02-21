import logo from './logo.svg';
import './App.css';
import EventhandlingFC from './components/EventhandlingFC';
import PropsFC from './components/PropsFC';
import PropsCC from './components/PropsCC';
import ConditionalRendering from './components/ConditionalRendering';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import LifeCycle1 from './components/LifeCycle1';
import LifeCycle2 from './components/LifeCycle2';
import RoutingDemo from './components/RoutingDemo';
import FormDemo from './components/FormDemo';
import UserComponent, { Signup } from './components/UserComponent';
import { Employee } from './components/Employee';

function App() {
  return (
    <div className="App">
    {/*<EventhandlingFC/>
  <PropsFC uname="john" city="Pune" />
  <PropsCC username="Shyam" />
<HoverCounter />
<ClickCounter />
  <ConditionalRendering />
    <LifeCycle1 />
    <RoutingDemo />
    <FormDemo />
    <Signup />*/}
    <Employee />
  </div>  
  );
  
}

export default App;





