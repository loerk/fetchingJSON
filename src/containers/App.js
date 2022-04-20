import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import Scroll from "../components/Scroll";


function App() {
  const [resource, setResource] = useState("");

  return (
    <div style={{ textAlign: 'center', marginTop: "2rem" }}>
      <Button name='Posts' onClick={() => { setResource("posts") }} />
      <Button name="Users" onClick={() => { setResource("users") }} />
      <Button name="Comments" onClick={() => { setResource("comments") }} />
      <h1 style={{ borderBottom: "1px solid black", paddingBottom: "10px", textTransform: "uppercase" }}>{resource ? resource : "Welcome"}</h1>
      <Scroll>
        <List resource={resource} />
      </Scroll>
    </div>
  );
}

export default App;
