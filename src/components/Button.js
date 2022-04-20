import React from "react";

function Button({ name, onClick }) {
    return (
        <button
            style={{
                width: "10rem",
                backgroundColor: "tomato",
                margin: "2rem",
                border: "none",
                padding: "1rem",
            }}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default Button;
