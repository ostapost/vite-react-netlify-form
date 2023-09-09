import { useState } from "react";
import "./App.css";
import { Form } from "../Form";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                border: "1px solid",
                color: "white",
                minWidth: "100px ",
                minHeight: "100px",
            }}
        >
            <Form />
        </div>
    );
}

export default App;
