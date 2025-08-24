import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </>
        </Route>
      </Routes>
    </>
  );
};

export default App;
