import { ReactNode } from "react";

export interface StatCardProps {
  icon?: ReactNode;
  imageSrc?: string;
  value: string;
  label: string;
}
