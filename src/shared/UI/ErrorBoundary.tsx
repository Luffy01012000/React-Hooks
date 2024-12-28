import { Component } from "react";

type ErrorState = { hasError: boolean; error: any };
type Props = {
  fallback: any;
  children: any;
};
export class ErrorBoundary extends Component<Props> {
  state: Readonly<ErrorState> = { hasError: false, error: null };
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
