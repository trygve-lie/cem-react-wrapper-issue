import React from "react";

// This enables SSR for React wrapped web components.
import '@lit-labs/ssr-react/enable-lit-ssr.js';

// Import for using wrapped web component
import { TestBox } from 'cem-react-wrapper-issue-component/react';

export default function App() {
  return (
    <>
      <h1>Plain React Example</h1> 
      <test-box custom="test">Test Box - CE syntax</test-box>
      <TestBox custom="test">Test Box - JSX syntax</TestBox>
    </>
  );
}
    