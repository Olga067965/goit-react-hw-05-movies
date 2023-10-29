import React, { useEffect, useState } from 'react';

const loaderStyles = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 1,
  width: '120px',
  height: '120px',
  margin: '-76px 0 0 -76px',
  border: '16px solid #f3f3f3',
  borderRadius: '50%',
  borderTop: '16px solid #3498db',
  WebkitAnimation: 'spin 2s linear infinite',
  animation: 'spin 2s linear infinite',
};

const contentStyles = {
  display: 'none',
  textAlign: 'center',
};

const animateBottomStyles = {
  position: 'relative',
  WebkitAnimationName: 'animatebottom',
  WebkitAnimationDuration: '1s',
  animationName: 'animatebottom',
  animationDuration: '1s',
};

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <div style={loaderStyles}></div>
      ) : (
        <div style={{ ...contentStyles, ...animateBottomStyles }}>
          <h2>Tada!</h2>
          <p>Some text in my newly loaded page..</p>
        </div>
      )}
    </div>
  );
}

export default Loader;
