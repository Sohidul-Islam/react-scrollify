import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

type ChildProps<T> = {
  data: T[];
};

type ScrollifyProps<T> = {
  children: React.ReactNode;
  threshold?: number;
  data: T[];
  onChangePage: (page: number) => void;
  pagination: {
    page: number;
    totalPage: number;
  };
  isLoading?: boolean;
};

const Scrollify = <T,>({
  children,
  threshold = 0.7,
  onChangePage,
  data,
  pagination,
  isLoading = false,
}: ScrollifyProps<T>) => {
  const { isIntersecting = false, ref } = useIntersectionObserver({
    threshold: threshold,
  });

  const [memorizedData, setMemorizedData] = useState<T[]>([]);

  useEffect(() => {
    if (isIntersecting && onChangePage) {
      let currentPage = Math.min(pagination.page + 1, pagination.totalPage);
      currentPage = Math.max(1, currentPage);
      onChangePage(currentPage);
    }
  }, [isIntersecting, onChangePage, pagination]);

  useEffect(() => {
    if (data && pagination?.page) {
      if (!isLoading) {
        setMemorizedData((prev: T[]) => {
          if (pagination.page === 1) {
            return data;
          }
          return [...prev, ...data];
        });
      }
    }
  }, [pagination?.page, data, isLoading]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<ChildProps<T>>(child)) {
      return React.cloneElement(child, { data: memorizedData });
    }
    return child;
  });

  return (
    <>
      {childrenWithProps}
      {isLoading && <p style={{ fontSize: "16px" }}>Loading...</p>}
      {!isLoading && <div ref={ref}> </div>}
    </>
  );
};

export default Scrollify;
