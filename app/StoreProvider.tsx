"use client";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";
import { useRef } from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize store directly
  const storeRef = useRef<AppStore>(makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
}
