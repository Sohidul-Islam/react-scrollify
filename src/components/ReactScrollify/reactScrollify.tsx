/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
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

const Scrollify = <T,>({
  children,
  threshold = 0.7,
  onChangePage,
  data,
  pagination,
  isLoading = false,
  styleRootElement,
  rootClassName,
  rootElementId,
  enableLoadMoreButton = false,
  loadMoreButton,
  enablePulling,
  pulingOptions,
  onRefresh,
  loadingOverlay,
  onLoadMore,
}: ScrollifyProps<T>) => {
  const rootElement = useRef<HTMLDivElement | null>(null);

  const startYRef = useRef<number | null>(null); // Track initial Y position
  const [isPulling, setIsPulling] = useState(false); // Track pull state
  const [pullDistance, setPullDistance] = useState(0); // Track pull distance
  const refreshThreshold = 50;

  const { isIntersecting = false, ref } = useIntersectionObserver({
    threshold: threshold,
    onChange(isIntersecting) {
      console.log({ isIntersecting });
      if (isIntersecting && onChangePage && !enableLoadMoreButton) {
        let currentPage = Math.min(pagination.page + 1, pagination.totalPage);
        currentPage = Math.max(1, currentPage);
        onChangePage(currentPage);
      }
    },
    root: rootElement?.current || undefined,
  });

  const [memorizedData, setMemorizedData] = useState<T[]>([]);

  // Handle touch start (start pulling)
  const handleTouchStart = (e: TouchEvent) => {
    if (
      rootElement.current &&
      pulingOptions?.position !== "any" &&
      rootElement.current.scrollTop === (Number(pulingOptions?.position) || 0)
    ) {
      startYRef.current = e.touches[0].clientY; // Record the starting Y position
    }

    if (rootElement.current && pulingOptions?.position === "any") {
      startYRef.current = e.touches[0].clientY; // Record the starting Y position
    }
  };

  // Handle touch move (calculate pull distance)
  const handleTouchMove = (e: TouchEvent) => {
    console.log("touch start");
    if (startYRef.current !== null) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - startYRef.current;

      // Only start pulling down if pulling from the top and distance is positive
      if (distance > 0) {
        setPullDistance(distance);
        setIsPulling(true);
      }
    }
  };

  // Handle touch end (complete pull and trigger refresh if threshold is met)
  const handleTouchEnd = () => {
    if (isPulling && pullDistance > refreshThreshold && onRefresh) {
      onRefresh(); // Trigger the refresh callback
      startYRef.current = null;
    }

    // Reset pulling state
    setIsPulling(false);
    setPullDistance(0);
  };

  // Handle mouse down (start pulling)
  const handleMouseDown = (e: MouseEvent) => {
    if (
      rootElement.current &&
      pulingOptions?.position !== "any" &&
      rootElement.current.scrollTop === (Number(pulingOptions?.position) || 0)
    ) {
      startYRef.current = e.clientY; // Record the starting Y position for mouse events
    }

    if (rootElement.current && pulingOptions?.position === "any") {
      startYRef.current = e.clientY; // Record the starting Y position for mouse events
    }
  };

  // Handle mouse move (calculate pull distance)
  const handleMouseMove = (e: MouseEvent) => {
    if (startYRef.current !== null) {
      const currentY = e.clientY;
      const distance = currentY - startYRef.current;

      // Only start pulling down if pulling from the top and distance is positive
      if (distance > 0) {
        setPullDistance(distance);
        setIsPulling(true);
      }
    }
  };

  // Handle mouse up (complete pull and trigger refresh if threshold is met)
  const handleMouseUp = () => {
    if (isPulling && pullDistance > refreshThreshold && onRefresh) {
      onRefresh(); // Trigger the refresh callback
    }

    // Reset pulling state
    setIsPulling(false);
    setPullDistance(0);
    startYRef.current = null;
  };

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

  useEffect(() => {
    const container = rootElement.current;

    if (container && enablePulling) {
      container?.addEventListener("touchstart", handleTouchStart);
      container?.addEventListener("touchmove", handleTouchMove);
      container?.addEventListener("touchend", handleTouchEnd);

      // Add mouse event listeners
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp);
    }

    // Cleanup event listeners
    return () => {
      if (container && enablePulling) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);

        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [isPulling, pullDistance, enablePulling, rootElement.current]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<ChildProps<T>>(child)) {
      return React.cloneElement(child, { data: memorizedData });
    }
    return child;
  });

  return (
    <div
      ref={styleRootElement ? rootElement : null}
      id={rootElementId}
      className={rootClassName}
      onMouseLeave={() => {
        if (enablePulling) {
          setIsPulling(false);
          setPullDistance(0);
          startYRef.current = null;
        }
      }}
      style={{
        ...styleRootElement,
        cursor: isPulling ? "grabbing" : "default",
        transform: isPulling ? "translateY(10px)" : "translateY(0px)",
        transition: "all 0.3s linear",
      }}
    >
      {childrenWithProps}
      {isLoading && <>{loadingOverlay && loadingOverlay}</>}
      {!isLoading && (
        <div
          ref={ref}
          style={{
            // background: "red",
            height: "20px",
            width: "100%",
          }}
        >
          {" "}
        </div>
      )}

      {enableLoadMoreButton && (
        <div
          onClick={() => {
            let currentPage = Math.min(
              pagination.page + 1,
              pagination.totalPage
            );
            currentPage = Math.max(1, currentPage);
            if (onLoadMore) {
              onLoadMore(currentPage);
              return;
            }
            if (onChangePage) onChangePage(currentPage);
          }}
          style={{
            opacity: isIntersecting ? 1 : 0,
            pointerEvents: isIntersecting ? undefined : "none",
            transform: isIntersecting ? "translateY(0px)" : "translateY(20px)",
            cursor: "pointer",
            transition: "all 0.3s linear",
          }}
        >
          {!loadMoreButton && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "4px 10px",
                  background: "black",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                Load more
              </div>
            </div>
          )}

          {loadMoreButton}
        </div>
      )}
    </div>
  );
};

export default Scrollify;
