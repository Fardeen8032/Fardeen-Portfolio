import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

export default function SideBarMenu({ curElm }) {
    const childs = curElm.childs || []; // Use `childs` instead of `children`
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = (e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="sidebar-item">
            <NavLink
                to={curElm.link || "#"}
                state={{
                    edit: curElm?.edit,
                    add: curElm?.add,
                    delete: curElm?.delete,
                    view: curElm?.view,
                    export: curElm?.export,
                }}
                className={`sidebar-link ${isOpen ? "subMenu-active" : ""}`}
                onClick={childs.length > 0 ? toggleSubMenu : null}
            >
                <span className="d-flex gap-2 align-items-center">
                    {curElm.icon}
                    <h1 className="mb-0 title-font-700 fs-5 base-font-muli fw-bold">
                        {curElm.title}
                    </h1>
                </span>
                {childs.length > 0 && (
                    <div className="arrow-icon" >
                        {!isOpen ? (
                            <ArrowDown2 size="22" color="#000" className="base-animation" />
                        ) : (
                            <ArrowUp2 size="22" color="#000" className="base-animation" />
                        )}
                    </div>
                )}
            </NavLink>
            {isOpen && (
                <div className="subMenu-card">
                    {childs.map((child, index) => (
                        child.view && (
                            <NavLink
                                to={child.link}
                                state={{
                                    edit: child?.edit,
                                    add: child?.add,
                                    delete: child?.delete,
                                    view: child?.view,
                                    export: child?.export,
                                }}
                                key={index}
                                className="sidebar-link submenu-link"
                            >
                                <span className="d-flex gap-2 align-items-center pl-4">
                                    {child.icon}
                                    <h5 className="mb-0 title-font-700 fs-5 base-font-muli fw-bold submenu-title">
                                        {child.label}
                                    </h5>
                                </span>
                            </NavLink>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}
