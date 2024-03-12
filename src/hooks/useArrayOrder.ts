import { useCallback, useMemo, useState } from "react";

export type OrderDirection = "asc" | "desc" | "";
export function useArrayOrder<T>(
  array: T[],
  compareFunc: (a: T, b: T) => number,
  initialOrder?: OrderDirection,
) {
  const [order, setOrder] = useState(initialOrder ?? "");
  const sorted = useMemo(() => {
    if (order === "") return array;
    const multiplier = order === "asc" ? 1 : -1;
    return [...array].sort((a, b) => multiplier * compareFunc(a, b));
  }, [array, order, compareFunc]);

  const toggleOrder = useCallback((newOrder: OrderDirection | undefined) => {
    if (newOrder != null) {
      setOrder(newOrder);
      return;
    }
    setOrder((prevState) =>
      prevState === "" ? "asc" : prevState === "asc" ? "desc" : "",
    );
  }, []);
  return { order, array: sorted, toggleOrder };
}
