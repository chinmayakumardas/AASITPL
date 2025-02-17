// // src/components/ui/grid.js

// import React from 'react';

// export const Grid = ({ children, className }) => {
//   return (
//     <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default Grid;
// src/components/ui/grid.js






// export const Grid = ({ children, className }) => (
//   <div className={`grid ${className}`}>{children}</div>
// );

// export const GridItem = ({ children, className }) => (
//   <div className={`grid-item ${className}`}>{children}</div>
// );

// components/ui/grid.js

export const Grid = ({ children, container, spacing }) => {
  const containerClass = container ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : '';
  const spacingClass = spacing ? `gap-${spacing}` : '';
  return (
    <div className={`${containerClass} ${spacingClass}`}>
      {children}
    </div>
  );
};

export const GridItem = ({ children, xs, sm, md, lg }) => {
  const classes = [
    xs && `col-span-${xs}`,
    sm && `sm:col-span-${sm}`,
    md && `md:col-span-${md}`,
    lg && `lg:col-span-${lg}`,
  ].join(' ');

  return <div className={classes}>{children}</div>;
};
