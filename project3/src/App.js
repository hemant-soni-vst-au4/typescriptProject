import React from "react";
import AssemblyLine from "./components/AssemblyLine";
import './App.css'
/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/
const App = props => (
  <div id="app">
    <AssemblyLine 
      stages={[
        "Idea", 
        "Development", 
        "Testing", 
        "Deployment"
      ]}
    />
  </div>
);

export default App;