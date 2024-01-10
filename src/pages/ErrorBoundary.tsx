import type {ErrorInfo, ReactNode} from 'react';
import {Component} from 'react';
import Error from '@/pages/Error';


interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    info: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false, info: null};
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return {hasError: true, info: error};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error.toString(), errorInfo.toString());
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }
        
return this.props.children;
    }
}

export default ErrorBoundary;
