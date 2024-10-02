import React from "react";

export const useDynamicCSS = (href: string) => {
  const [cssLoaded, setCssLoaded] = React.useState(false);

  React.useEffect(() => {
    if(href) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => setCssLoaded(true); // Set state when CSS is loaded
      link.onerror = () => setCssLoaded(true); // Handle error case as well

      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [href]);

  return cssLoaded; // Return whether the CSS has finished loading
};