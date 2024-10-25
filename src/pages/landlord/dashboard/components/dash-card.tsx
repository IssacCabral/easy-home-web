import React from "react";

interface DashCardProps {
  description: string;
  icon: React.ElementType;
  detail: string;
}

export function DashCard({ description, detail, icon: Icon }: DashCardProps) {
  return (
    <article className="flex w-[370px] flex-col gap-6 rounded-xl border border-solid border-checked p-6">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-landing">{description}</p>
        <Icon size={24} />
      </div>
      <span className="text-4xl font-semibold text-landing">{detail}</span>
    </article>
  );
}
