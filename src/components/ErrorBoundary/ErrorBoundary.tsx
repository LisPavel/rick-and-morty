import { Card, Result } from "antd";
import { Component, ErrorInfo, PropsWithChildren } from "react";

interface ErrorBoundaryProps extends PropsWithChildren {}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log("error", error);
    return {
      hasError: true,
    };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("error:", error);
    console.log("error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card>
          <Result status="error" title="Something went wrong!" />
        </Card>
      );
    }
    return this.props.children;
  }
}
