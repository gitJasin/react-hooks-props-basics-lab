import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} city={user.city} name={user.name}/>
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;


// [X] - In the `App` component, pass down data from the `user` object as props to the
// `Home` component so that it renders correctly. There is some starter code for
// you in the `Home` component that should give you a clue as to what props this
// component takes in.

// [X] - `App` should also pass down a prop of `bio` to the `About` component.

// [] - Finally, `App` should **also** pass down the `github` and `linkedin` links to
// the `About` component, so that `About` can pass those props down to the `Links`
// component you will create.