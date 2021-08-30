import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Sentry, Azure, TrackJS
    console.error("ErrorBoundary caught en error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          You encountered with an error <Link to="/">Click here</Link> to go
          back to the home page or wait 5 seconds
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
