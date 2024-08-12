import { useState, useEffect } from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      w: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="border-2 border-black mt-8 mb-16 px-8 py-4 flex flex-col items-center gap-4">
      <p className="text-xl">Mouse position:</p>
      <div className="flex gap-4">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const HocCursorPosition = () => {
  return (
    <div className="bg-slate-50 h-full flex justify-center">
      <div className="bg-white flex flex-col items-center pt-4 px-16 w-[900px]">
        <header className="text-2xl">Little Lemon Restaurant 🍋</header>
        <PanelMouseTracker />
        <PointMouseTracker />
      </div>
    </div>
  );
};

export default HocCursorPosition;
