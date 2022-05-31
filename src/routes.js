import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import ApproveEmployee from "views/examples/ApproveEmployee.js";
import home from "views/examples/home.js";
import Maps from "views/examples/Maps.js";
import RegisterPatient from "views/examples/RegisterPatient.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Doctors from "views/examples/Doctors.js";
import RegisterEmployee from "./views/examples/RegisterEmployee";

var routes = [
    {
        path: "/home",
        name: "Smart Hospital",
        icon: "ni ni-single-02 text-yellow",
        component: home,
        layout: "/auth",
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin",
    },
        {
        path: "/ApproveEmployee",
        name: "Approve Employee",
        icon: "ni ni-tv-2 text-primary",
        component: ApproveEmployee,
        layout: "/admin",
    },
    {
        path: "/doctors",
        name: "Doctors",
        icon: "ni ni-single-02 text-yellow",
        component: Doctors,
        layout: "/admin",
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/admin",
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin",
    },
    {
        path: "/tables",
        name: "Tables",
        icon: "ni ni-bullet-list-67 text-red",
        component: Tables,
        layout: "/admin",
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/registerPatient",
        name: "RegisterPatient",
        icon: "ni ni-circle-08 text-pink",
        component: RegisterPatient,
        layout: "/auth",
    },
    {
        path: "/registerEmployee",
        name: "RegisterEmployee",
        icon: "ni ni-circle-08 text-pink",
        component: RegisterEmployee,
        layout: "/auth",
    },
];
export default routes;
