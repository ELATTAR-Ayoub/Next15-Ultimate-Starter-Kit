"use client";

import Link from "next/link";

// styles
// import styles from "@/styles/index";

// components
import { Button } from "@/components/ui/button";

// redux:
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, setUIState } from "@/store/UIConfig";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.UIConfig.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSetCount = (newCount: number) => {
    dispatch(setUIState({ count: newCount }));
  };

  return (
    <div className="grid object-center h-screen gap-4 p-8 ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Current Count (Redux): {count}</h1>
        <div className="flex gap-2">
          <Button onClick={handleIncrement}>Increment</Button>
          <Button variant={"destructive"} onClick={handleDecrement}>
            Decrement
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant={"secondary"} onClick={() => handleSetCount(10)}>
            Set Count to 10
          </Button>
          <Button variant={"secondary"} onClick={() => handleSetCount(0)}>
            Reset Count
          </Button>
        </div>
        <Link href={"/"}>Go Back</Link>
      </div>
    </div>
  );
}
