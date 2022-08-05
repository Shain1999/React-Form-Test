import React, { useState } from "react";
import "./App.css";
import OrderReferral from "./components/OrderReferral/OrderReferral";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
export interface IUserData {
  fullName: string;
  age: number;
}

function App() {
  const [registerCompleted, setRegisterCompleted] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({ fullName: "", age: 0 });
  return (
    <div className="App">
      {!registerCompleted && (
        <RegistrationForm
          setRegisterCompleted={setRegisterCompleted}
          setUserData={setUserData}
        />
      )}
      {registerCompleted && (
        <OrderReferral fullName={userData.fullName} age={userData.age} />
      )}
    </div>
  );
}

export default App;
