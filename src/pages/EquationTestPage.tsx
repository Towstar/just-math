import React from "react";
import { EquationInput } from "../components/EquationInput";

export default function EquationTestPage() {
  return (
    <>
      <div>Equation Test Page</div>
      <EquationInput testMode={true} ButtonColor="teal" />
    </>
  );
}
