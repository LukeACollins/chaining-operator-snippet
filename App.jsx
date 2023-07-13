import { people } from "./data";
import Person from "./tutorial/05-leverage-javascript/starter/Person";
function App() {
 return (
   <div className="container">
     {people.map((person) => (
       <Person {...person} key={person.id}/>
     ))}
   </div>
 );
}

export default App;
