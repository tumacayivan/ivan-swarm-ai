import React from 'react';

/**
 * Black-ink rubber stamp. Variants control size / opacity / rotation only.
 * No colors — this is a B&W document.
 *
 * Props:
 *   children   — stamp label
 *   size       — 'small' | 'normal' (default) | 'large'
 *   rotation   — degrees (e.g. -6, 12). Default -4.
 *   double     — boolean, render with double border
 *   faint      — boolean, lower opacity
 *   ghost      — boolean, very faint
 *   style      — extra inline style (used for absolute positioning)
 *   className  — extra classes
 */
function Stamp({
  children,
  size = 'normal',
  rotation,
  double = false,
  faint = false,
  ghost = false,
  style = {},
  className = '',
}) {
  const classes = [
    'stamp',
    size === 'small' && 'stamp--small',
    size === 'large' && 'stamp--large',
    double && 'stamp--double',
    faint && 'stamp--faint',
    ghost && 'stamp--ghost',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inlineStyle = {
    ...(typeof rotation === 'number' ? { transform: `rotate(${rotation}deg)` } : {}),
    ...style,
  };

  return (
    <span className={classes} style={inlineStyle}>
      {children}
    </span>
  );
}

export default Stamp;
