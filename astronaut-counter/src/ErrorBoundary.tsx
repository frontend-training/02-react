import * as React from 'react';

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error:any) {
        console.log(error);
    }


    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;