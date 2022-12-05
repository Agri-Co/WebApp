import { useState, useEffect } from 'react';

const getHeight = () => window.innerHeight 
  || document.documentElement.clientHeight 
  || document.body.clientHeight;

export default function useCurrentHeight() {
  // save current window width in the state object
  let [height, setheight] = useState(getHeight());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setheight(getHeight()), 25);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return height;
}