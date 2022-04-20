import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import Scroll from "../components/Scroll";


function App() {
  const [resource, setResource] = useState("");

  return (
    <div style={{ textAlign: 'center', margin: "2rem auto" }}>
      <div style={{ width: "100vw", backgroundColor: "tomato", display: "flex", flexWrap: "wrap", wrapDirection: "column", alignItems: "center", justifyContent: 'space-around' }}>
        <Button name='Posts' onClick={() => { setResource("posts") }} />
        <Button name="Users" onClick={() => { setResource("users") }} />
        <Button name="Comments" onClick={() => { setResource("comments") }} />
      </div>
      <h1 style={{ color: "black", borderBottom: "1px solid black", paddingBottom: "10px", textTransform: "uppercase" }}>{resource ? resource : "Welcome"}</h1>
      <Scroll>
        <List resource={resource} />
      </Scroll>
    </div>
  );
}

export default App;
