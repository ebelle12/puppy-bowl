// List of players
// see details
// form for new player
// search bar 
// delete button

// import './App.css';



// const dummyPuppies = [
//   {
//     id: 1,
//     name: "Boss",
//     breed: "Poodle",
//     status: "field"
//   }
// ]

// function App() {







//   return (

//     <>
//       <h1>Puppy Bowl</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Breed</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyPuppies.map(puppy => { })}
//         </tbody>
//       </table>
//     </>

//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
      <h1>Puppy Bowl!</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  )
}

export default App
