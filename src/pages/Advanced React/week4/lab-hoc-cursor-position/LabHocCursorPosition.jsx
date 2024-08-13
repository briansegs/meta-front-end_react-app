import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
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

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <div className="border-2 border-black mt-8 mb-16 px-8 py-4 flex flex-col items-center gap-4">
          <p className="text-xl">Mouse position:</p>
          <div className="flex gap-4">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )}
    />
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

const LabHocCursorPosition = () => {
  return (
    <div className="bg-slate-50 h-full flex justify-center">
      <div className="bg-white flex flex-col items-center pt-4 px-16 w-[900px]">
        <header className="text-2xl">Little Lemon Restaurant 🍕</header>
        <PanelMouseLogger />
        <PointMouseLogger />
      </div>
    </div>
  );
};

export default LabHocCursorPosition;
