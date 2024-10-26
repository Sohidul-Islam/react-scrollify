declare function PaginationWithViewPort({ data, title, varient, }: {
    data: any[];
    title?: string;
    varient?: "default-list" | "list" | "card-list";
}): import("react/jsx-runtime").JSX.Element;
export default PaginationWithViewPort;
