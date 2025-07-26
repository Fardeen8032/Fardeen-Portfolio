import { Building, Element3, Profile2User, Setting2, UserAdd, UserTag, UserOctagon, User,Note, Chart1,People, Convertshape, DocumentText, DocumentText1, TickSquare, ArchiveBook, Warning2, Personalcard, Menu, HierarchySquare2, ProfileTick } from "iconsax-react";
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
      title: "Dashboard",
      icon: <Element3 variant="Bulk" size="28" color={themeColor} />,
      link: "/",
    },
    {
      title: "Admin",
      icon: <UserAdd variant="Bulk" size="28" color={themeColor} />,
      link: "/admin",
    },
    {
      title: "Employees",
      icon: <Profile2User variant="Bulk" size="28" color={themeColor} />,
      link: "/user",
    },
    {
      title: "Attendence",
      icon: <TickSquare variant="Bulk" size="32" color={themeColor}/>,
      link: "/attendences",
      childs: [
        {
          label: "Attendence",
          link: "/Own-Attendence",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <ProfileTick variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
        {
          label: "Mispunch",
          link: "/Mispunch",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Warning2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
      ],
    },
    {
      title: "Leads",
      icon: <UserOctagon variant="Bulk" size="32" color={themeColor} />,
      link: "/leads",
      childs: [
        {
          label: "Own Leads",
          link: "/lead1",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Personalcard variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
        {
          label: "Team's Leads",
          link: "/lead2",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <User variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
      ],
    },
    {
      title: "Groups",
      icon: <People variant="Bulk" size="32" color={themeColor}/>,
      link: "/groups",
      childs: [
        {
          label: "View Groups",
          link: "/view-groups",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Menu color={themeColor} size="28" />,
          parent: "Groups",
        },
        {
          label: "Leads Groups",
          link: "/leads-groups",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Users color={themeColor} size="28" />,
          parent: "Groups",
        },
      ],
    },
    {
      title: "Report",
      icon: <Note size="32" color={themeColor}/>,
      link: "/reports",
      childs: [
        {
          label: "Emp Report",
          link: "/empreport",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Chart1 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Leads",
        }
      ],
    },  
    {
      title: "Settings",
      icon: <Setting2 variant="Bulk" size="28" color={themeColor} />,
      link: "/settings",
      childs: [
        {
          label: "Role",
          link: "/role",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <UserTag variant="Bulk" size="26" color={themeColor} />,
          parent: "Settings",
        },
        {
          label: "Company",
          link: "/company",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Building variant="Bulk" size="26" color={themeColor} />,
          parent: "Settings",
        },
        {
          label: "TeamChanges",
          link: "/team-changes",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Convertshape variant="Bulk" size="26" color={themeColor}/>,
          parent: "Settings",
        },
        {
          label: "Emp Structure",
          link: "/employee-tree",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <HierarchySquare2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Settings",
        }
      ],
    } 
  ]
}

export const AdminSidebarApi = () => {
  const themeColor = useThemeColor();

  return [
    {
      title: "Dashboard",
      icon: <Element3 variant="Bulk" size="28" color={themeColor} />,
      link: "/",
    },
    {
      title: "Employees",
      icon: <Profile2User variant="Bulk" size="28" color={themeColor} />,
      link: "/user",
    },
    {
      title: "Attendence",
      icon: <TickSquare variant="Bulk" size="32" color={themeColor}/>,
      link: "/attendences",
      childs: [
        {
          label: " Attendence",
          link: "/Own-Attendence",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <ProfileTick variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
        {
          label: "Mispunch",
          link: "/Mispunch",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Warning2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
      ],
    },
    {
      title: "Leads",
      icon: <UserOctagon variant="Bulk" size="28" color={themeColor} />,
      link: "/leads",
      childs: [
        {
          label: "Own Leads",
          link: "/lead1",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Personalcard variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
        {
          label: "Team's Leads",
          link: "/lead2",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <User variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
      ],
    },
    {
      title: "Groups",
      icon: <People variant="Bulk" size="32" color={themeColor}/>,
      link: "/groups",
      childs: [
        {
          label: "View Groups",
          link: "/view-groups",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Menu color={themeColor} size="28" />,
          parent: "Groups",
        },
        {
          label: "Leads Groups",
          link: "/leads-groups",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Users color={themeColor} size="28" />,
          parent: "Groups",
        },
      ],
    },
    {
      title: "Report",
      icon: <Note size="32" color={themeColor}/>,
      link: "/reports",
      childs: [
        {
          label: "Emp Report",
          link: "/empreport",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Chart1 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Report",
        }
      ],
    },
    {
      title: "Settings",
      icon: <Setting2 variant="Bulk" size="28" color={themeColor} />,
      link: "/settings",
      childs: [
        {
          label: "Role",
          link: "/role",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <UserTag variant="Bulk" size="26" color={themeColor} />,
          parent: "Settings",
        },
        {
          label: "TeamChanges",
          link: "/team-changes",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Convertshape variant="Bulk" size="26" color={themeColor}/>,
          parent: "Settings",
        },
        {
          label: "Emp Structure",
          link: "/employee-tree",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <HierarchySquare2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Settings",
        }
      ],
    } 
  ]
}

export const OtherRoleSidebarApi = () => {
  const themeColor = useThemeColor();

  return [
    {
      title: "Dashboard",
      icon: <Element3 variant="Bulk" size="28" color={themeColor} />,
      link: "/",
    },
    {
      title: "Employees",
      icon: <Profile2User variant="Bulk" size="28" color={themeColor} />,
      link: "/user",
    },
    {
      title: "Attendence",
      icon: <TickSquare variant="Bulk" size="32" color={themeColor}/>,
      link: "/attendences",
      childs: [
        {
          label: "Own",
          link: "/Own-Attendence",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <ProfileTick variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
        {
          label: "Team",
          link: "/Team-Attendence",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <ArchiveBook variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
        {
          label: "Mispunch",
          link: "/Mispunch",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Warning2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Attd",
        },
      ],
    },
    {
      title: "Leads",
      icon: <UserOctagon variant="Bulk" size="32" color={themeColor} />,
      link: "/leads",
      childs: [
        {
          label: "Own Leads",
          link: "/lead1",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Personalcard variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
        {
          label: "Team's Leads",
          link: "/lead2",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <User variant="Bulk" size="32" color={themeColor} />,
          parent: "Leads",
        },
      ],
    },
    {
      title: "Report",
      icon: <Note size="32" color={themeColor}/>,
      link: "/reports",
      childs: [
        {
          label: "Emp Report",
          link: "/empreport",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <Chart1 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Report",
        }
      ],
    },
    {
      title: "Heirachy",
      icon: <DocumentText variant="Bulk" size="28" color={themeColor} />,
      link: "/employeetree",
      childs: [
        {
          label: "Emp Structure",
          link: "/employee-tree",
          view: true,
          add: true,
          edit: false,
          delete: false,
          export: false,
          icon: <HierarchySquare2 variant="Bulk" size="32" color={themeColor}/>,
          parent: "Settings",
        }
      ],
    }
  ]
}