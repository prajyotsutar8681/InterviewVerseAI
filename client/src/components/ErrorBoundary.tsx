import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {

    if (this.state.hasError) {

      return (

        <div className="flex min-h-screen items-center justify-center bg-[#09090B]">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-red-500">
              Something went wrong
            </h1>

            <button
              onClick={() => window.location.reload()}
              className="mt-8 rounded-xl bg-violet-600 px-8 py-3 text-white"
            >
              Reload
            </button>

          </div>

        </div>

      );

    }

    return this.props.children;
  }
}

export default ErrorBoundary;