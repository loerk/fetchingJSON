import React, { useEffect, useState } from "react";


function List({ resource }) {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getData = async () => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}?_limit=5`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(
          `This is an HTTP Error: the status is ${response.status}`
        );
      }
      let result = await response.json();
      setData(result);


      setError(null);
      console.log(result);
    } catch (e) {
      setError(e.message);
      setData(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [resource]);



  if (!data) {
    return null;
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
        data.map((item) => {
          if (resource === "users") {
            return (
              <li style={{ border: "1px solid black", listStyleType: "none", padding: "1rem", margin: "2rem" }}>
                <li style={{ listStyleType: "none", padding: "1rem" }}>
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Username:<br />
                  </span>
                  {item.name}
                </li>
                <li style={{ listStyleType: "none", padding: "1rem", paddingTop: 0 }}>
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Email: <br />
                  </span>
                  {item.email}
                </li>
                <li style={{ listStyleType: "none", padding: "1rem", paddingTop: 0 }}>
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    Website: <br />
                  </span>
                  {item.website}
                </li>
              </li>
            );
          }
          if (resource === "posts") {
            return (
              <li style={{ listStyleType: "none", padding: "1rem" }}>
                <li style={{ listStyleType: "none", padding: "1rem" }}>
                  {" "}
                  <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                    {item.title}<br />
                  </span>
                </li>
                <li style={{ listStyleType: "none", padding: "1rem", paddingTop: 0 }}>
                  {" "}

                  {item.body}
                </li>
              </li>
            );
          }

          return (
            <li style={{ listStyleType: "none", padding: "1rem" }}>
              <li style={{ listStyleType: "none", padding: "1rem" }}>
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                  From:<br />
                </span>
                {item.email}
              </li>
              <li style={{ listStyleType: "none", padding: "1rem", paddingTop: 0 }}>
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
                  Comment: <br />
                </span>
                {item.body}
              </li>
            </li>
          );
        }
        )
      }

    </ul>
  );

}

export default List;