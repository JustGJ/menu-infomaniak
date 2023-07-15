import React from "react";

export interface ItemsLeftPanelProps {
    title: string;
    description?: string;
    image?: string;
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ItemsLeftPanel = ({ title, description, image, onMouseOver }: ItemsLeftPanelProps) => {
  return (
    <div className="item-left-panel" onMouseOver={onMouseOver}>
      <strong>{title}</strong>
      {description && <p>{description}</p>}
    </div>
  );
};
