import Home from "./pages/client/Home.vue";
import Schedule from "./pages/client/Schedule/Schedule.vue";
import ScheduleForm from "./pages/client/Schedule/ScheduleForm.vue";
import Services from "./pages/client/Services.vue";
import Portfolio from "./pages/client/Portfolio.vue";
import Blog from "./pages/client/Blog/Blog.vue";
import BlogDetail from "./pages/client/Blog/BlogDetail.vue";
import About from "./pages/client/About.vue";
import Contact from "./pages/client/Contact.vue";
import Privacy from "./pages/client/Privacy.vue";
import Disclaimer from "./pages/client/Disclaimer.vue";
import Error from "./pages/client/404.vue";

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
        component: Schedule,
        meta: {
            title: "Hello"
        }
    },
    {
        name: "Services",
        path: "/services",
        component: Services
    },
    // {
    //     name: "Portfolio",
    //     path: "/portfolio",
    //     component: Portfolio
    // },
    {
        name: "Blog",
        path: "/blog",
        component: Blog
    },
    {
        name: "Blog Detail",
        path: "/blog/details/:blogId",
        component: BlogDetail
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Contact",
        path: "/contact",
        component: Contact
    },
    {
        name: "Schedule Form",
        path: "/schedule/schedule-form",
        component: ScheduleForm
    },
    {
        name: "Privacy Policy",
        path: "/privacy",
        component: Privacy
    },
    {
        name: "Disclaimer Policy",
        path: "/disclaimer",
        component: Disclaimer
    },
    {
        name: "Error",
        path: "/error",
        component: Error
    },
    {
        path: "*",
        redirect: "/error"
    }
];
