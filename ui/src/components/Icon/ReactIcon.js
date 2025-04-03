import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { IconContext } from "react-icons";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const DynamicIcon = (_a) => {
    var props = __rest(_a, []);
    const [library, iconComponent] = props.icon.split("/");
    if (!library || !iconComponent)
        return _jsx("div", { children: "Could Not Find Icon" });
    const lib = library.toLowerCase();
    const path = `react-icons/${lib}`;
    const Icon = lazy(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield import(path);
        return { default: module[iconComponent] };
    }));
    const value = {
        color: props.color,
        size: props.size,
        className: props.className,
        style: props.style,
        attr: props.attr
    };
    return (_jsx(Suspense, { fallback: _jsx("span", { children: "Icon Not Available" }), children: _jsx(IconContext.Provider, { value: value, children: _jsx(Icon, {}) }) }));
};
export default DynamicIcon;
