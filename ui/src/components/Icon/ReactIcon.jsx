import React, {
  Suspense,
  lazy
} from "react";
import { IconContext } from "react-icons";

const ReactIcon = ({ ...props }) => {
  const [library, iconComponent] = props.icon.split("/");

  if (!library || !iconComponent) return <div>Could Not Find Icon</div>;

  const lib = library.toLowerCase();
  const path = `react-icons/${lib}`;
  const Icon = lazy(async () => {
    const module = await import(path);
    return { default: module[iconComponent] };
  });

  const value = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr
  };

  return (
    <Suspense fallback={<span>Icon Not Available</span>}>
      <IconContext.Provider value={value}>
        <Icon />
      </IconContext.Provider>
    </Suspense>
  );
};

export default ReactIcon;
