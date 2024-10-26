export declare const contactInfo: (page?: number, pageSize?: number, totalData?: number) => {
    data: {
        id: string;
        image: string;
        name: string;
        email: string;
        phone: string;
    }[];
    totalPages: number;
    currentPage: number;
    totalData: number;
};
