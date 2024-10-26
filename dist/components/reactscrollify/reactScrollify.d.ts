import { default as React } from 'react';
type ScrollifyProps<T> = {
    children: React.ReactNode;
    threshold?: number;
    data: T[];
    onChangePage: (page: number) => void;
    enableDataMemorization?: boolean;
    pagination: {
        page: number;
        totalPage: number;
    };
    isLoading?: boolean;
    loadingOverlay?: React.ReactNode;
    loadMoreButton?: React.ReactNode;
    styleRootElement?: Record<string, string | number | undefined>;
    rootClassName?: string;
    rootElementId?: string;
    enableLoadMoreButton?: boolean;
    enablePulling?: boolean;
    pulingOptions?: {
        position: number | string | undefined;
    };
    onRefresh?: () => void;
    onLoadMore?: (page: number) => void;
};
declare const Scrollify: <T>({ children, threshold, onChangePage, data, pagination, isLoading, styleRootElement, rootClassName, rootElementId, enableLoadMoreButton, loadMoreButton, enablePulling, pulingOptions, onRefresh, loadingOverlay, onLoadMore, enableDataMemorization, }: ScrollifyProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Scrollify;
