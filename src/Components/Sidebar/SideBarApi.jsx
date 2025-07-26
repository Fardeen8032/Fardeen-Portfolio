import { Building, Element3, Profile2User, Setting2, Briefcase, UserTag, UserOctagon, User,Note, Chart1,People, Convertshape, DocumentText, Code, TickSquare, ArchiveBook, Warning2, Personalcard, Menu, HierarchySquare2, ProfileTick, Teacher } from "iconsax-react";
import { Users } from  "lucide-react"
import { useEffect, useState } from "react";

export const useThemeColor = () => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem("themeColor") || "#4e73df");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const newColor = rootStyles.getPropertyValue("--bg-base-color").trim() || "#4e73df";

    if (newColor !== themeColor) {
      localStorage.setItem("themeColor", newColor);
      setThemeColor(newColor);
    }
  }, [themeColor]);

  return themeColor;
};

export const SuperAdminSidebarApi = () => {
  const themeColor = useThemeColor();
  return [
    {
      title: "Home",
      icon: <Element3 variant="Bulk" size="28" color={themeColor} />,
      link: "/",
    },
    {
      title: "Experience",
      icon: <Briefcase size="28" color={themeColor}/>,
      link: "/Experience",
    },
    {
      title: "Education",
      icon: <Teacher size="28" color={themeColor}/>,
      link: "/Education",
    },
    {
      title: "Projects",
      icon: <Code size="32" color={themeColor}/>,
      link: "/Projects",
    }
  ]
}