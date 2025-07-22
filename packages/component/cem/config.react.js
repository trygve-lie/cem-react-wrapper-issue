import { customElementReactWrapperPlugin } from "custom-element-react-wrappers";

export default customElementReactWrapperPlugin({
    modulePath: (className, tagName) => {
        // return `../src/${tagName}/${className}.js`;
        return '../src/component.js';
    },
    ssrSafe: true,
});
