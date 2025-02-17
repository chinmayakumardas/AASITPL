// src/components/ui/Timeline.js

export const Timeline = ({ children }) => {
    return (
      <div className="space-y-6">
        {children}
      </div>
    );
  };
  
  export const TimelineItem = ({ children }) => {
    return (
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="mt-2">{children}</div>
      </div>
    );
  };
  
  export const TimelineSeparator = () => {
    return <div className="w-2 h-2 bg-blue-600 rounded-full absolute left-0 top-0"></div>;
  };
  
  export const TimelineContent = ({ children }) => {
    return <div className="ml-8">{children}</div>;
  };
  
  export const TimelineConnector = () => {
    return <div className="w-1 h-full bg-blue-600 absolute left-1/2"></div>;
  };
  