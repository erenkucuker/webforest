import Home from "./pages/client/Home";
export const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "Hello"
        }
    },
    {
        name: "Schedule",
        path: "/schedule",
        component: () => import("./pages/client/Schedule/Schedule"),
        meta: {
            title: "Hello"
        }
    },
    {
        name: "Services",
        path: "/services",
        component: () => import("./pages/client/Services")
    },
    // {
    //     name: "Portfolio",
    //     path: "/portfolio",
    //     component: Portfolio
    // },
    {
        name: "Blog",
        path: "/blog",
        component: () => import("./pages/client/Blog/Blog")
    },
    {
        name: "Blog Detail",
        path: "/blog/details/:blogId",
        component: () => import("./pages/client/Blog/BlogDetail")
    },
    {
        name: "About",
        path: "/about",
        component: () => import("./pages/client/About")
    },
    {
        name: "Contact",
        path: "/contact",
        component: () => import("./pages/client/Contact")
    },
    {
        name: "Schedule Form",
        path: "/schedule/schedule-form",
        component: () => import("./pages/client/Schedule/ScheduleForm")
    },
    {
        name: "Privacy Policy",
        path: "/privacy",
        component: () => import("./pages/client/Privacy")
    },
    {
        name: "Disclaimer Policy",
        path: "/disclaimer",
        component: () => import("./pages/client/Disclaimer")
    },
    {
        name: "Error",
        path: "/error",
        component: () => import("./pages/client/404")
    },
    {
        path: "*",
        redirect: "/error"
    }
];
