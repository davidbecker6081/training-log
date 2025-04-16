import { lazy } from "react";

const lazyLoad = (path, namedExport) => {
  return lazy(async () => {
    const module = await import(path);
    return namedExport ? { default: module[namedExport] } : module;
  });
};

export default lazyLoad;
