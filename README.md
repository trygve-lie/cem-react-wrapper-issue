# cem-react-wrapper-issue

Demo repo to visualize an issue with [Custom Element React Wrapper](https://github.com/break-stuff/cem-tools/tree/main/packages/react-wrappers).

This repo consist of a simple [Lit component](https://github.com/trygve-lie/cem-react-wrapper-issue/tree/main/packages/component) and a plain [React application](https://github.com/trygve-lie/cem-react-wrapper-issue/tree/main/packages/react-app). The Lit component is wrapped with the [Custom Element React Wrapper](https://github.com/break-stuff/cem-tools/tree/main/packages/react-wrappers) and used in the React application.

The React application uses the [`@lit-labs/ssr-react`](https://www.npmjs.com/package/@lit-labs/ssr-react) to integrate Lit SSR with React.

## The issue

The issue is that with default options used on the Custom Element React Wrapper when the wrapper is built; the wrapped component is rendered with a set of attributes which has a `undefined` value when used in the React application.

When used like this in React:

```jsx
import { TestBox } from 'cem-react-wrapper-issue-component/react';

export default function App() {
  return (
    <>
      <TestBox custom="test">Test Box - JSX syntax</TestBox>
    </>
  );
}
```

The rendered DOM look like this:

```html
<test-box custom="test" bespoke="undefined" class="undefined" exportparts="undefined" for="undefined" part="undefined" tabindex="undefined">
    Test Box - JSX syntax
</test-box>
```

Though; a "fix" seems to be to set the option [`ssrSafe` to `true`](https://github.com/trygve-lie/cem-react-wrapper-issue/blob/main/packages/component/cem/config.react.js#L8) on the options to the Custom Element React Wrapper when the wrapper is built. When done these `undefined` attributes is not pressent when rendered in React.

Then the rendered DOM looks like this:

```html
<test-box custom="test">
    Test Box - JSX syntax
</test-box>
```

## How to install

This is a workspace repo. Run the following to install dependenceis for the whole repo:

```sh
npm install
```

## How to run

To run the demo one need to create a CEM file of the Lit component, then generate the React wrapper out of the CEM file and build the Lit component for consumption in the React application. Then the React application must be built. All this can be done with commands in the root of the workspace.

Build the CEM file and create the React wrapper:

```sh
npm run analyze
```

Built the Lit component for consumption and build the React application:

```sh
npm run build
```

Run the React application:

```sh
npm start
```

The application should now be available on [http://localhost:8000/](http://localhost:8000/).

## How to see the "fix"

In the [config to the Custom Element React Wrapper](https://github.com/trygve-lie/cem-react-wrapper-issue/blob/main/packages/component/cem/config.react.js#L8) set `ssrSafe` to `true`. Then run the steps under "How to run" again to see the change.
