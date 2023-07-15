import React from "react";

export interface ProductProps {
    title: string;
    description: string;
    image?: string;
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Product = ({ title, description, image }: ProductProps) => {
  return (
    <div className="product">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};
