import { forwardRef } from "react"

import React from "react";

interface PanelAboutProps {
    panelAboutRef: React.RefObject<HTMLDivElement>;
  }

export const PanelAbout = ({ panelAboutRef }: PanelAboutProps) => {
    return (
        <div ref={panelAboutRef} className="panel">
            <h1>Panel about</h1>
        </div>
    )
}