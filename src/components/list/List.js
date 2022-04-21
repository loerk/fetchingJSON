import React, { useEffect, useState } from "react";


function List({ resource }) {

  const [items, setItems] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getData = async () => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}?_limit=5`
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP Error: the status is ${response.status}`
        );
      }
      let result = await response.json();
      setItems(result);
      setError(null);
    } catch (e) {
      setError(e.message);
      setItems(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [resource]);


  if (!items) {
    return null;
  }
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <ul
      style={{
        textAlign: "start",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "1rem"
      }}
    >
      {
        items.map((item) => {
          if (resource === "users") {
            return (
              <li key={item.id} style={{ border: "1px solid black", listStyleType: "none", padding: "1rem", margin: "2rem" }}>
                <p>
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Username:<br />
                  </span>
                  {item.name}
                </p>
                <p>
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Email: <br />
                  </span>
                  {item.email}
                </p>
                <p >
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Website: <br />
                  </span>
                  {item.website}
                </p>
              </li>
            );
          }
          if (resource === "posts") {
            return (
              <li key={item.id} style={{ listStyleType: "none", padding: "1rem" }}>
                <p>
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    {item.title}<br />
                  </span>
                </p>
                <p >
                  {item.body}
                </p>
              </li>
            );
          }

          return (
            <li key={item.id} style={{ listStyleType: "none", padding: "1rem" }}>
              <p >
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                  From:<br />
                </span>
                {item.email}
              </p>
              <p >
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                  Comment: <br />
                </span>
                {item.body}
              </p>
            </li>
          );
        }
        )
      }

    </ul>
  );

}

export default List;