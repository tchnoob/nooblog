class Functions {
  static routeTo = (path) => {
    const nextPath = `${window.location.origin}${path}`;
    console.log("routeTo", nextPath);
    window.history.pushState(null, null, nextPath);
    window.history.go();
  };
}

export default Functions;
