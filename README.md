React hook for dynamically attaching and de-attaching css to the page when a component mounts and unmounts, respectively.
Useful when two or more components that are mutually exclusive mount-wise use styles that may be conflicting or apply to unwanted elements due to classnames, ids, etc.
Created to solve a case where a third party library component came shipped with a css that would conflict with other third party library components.

#Example usage
```typescript
import useDynamicCSS from "@bcirealm087/use-dynamic-css";
import myCSS from "myproject/index.css";

export const MyComponent = ({} : {}) = {
  const cssLoaded = useDynamicCSS(myCSS);
  return ( (cssLoaded)
    ? <div>Example Text</div>
    : 'Loading...'
  );
}
```