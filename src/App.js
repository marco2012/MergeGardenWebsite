import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Privacy from "./components/Privacy";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
