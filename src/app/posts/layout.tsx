import Category from "@/components/Category";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-[minmax(900px,_1fr)_200px]">
      {children}
      <Category />
    </section>
  );
}
