import Vue from "vue";
import Router from "vue-router";
// import store from "../store";
import HomeAdmin from "../views/HomeAdmin.vue";
import Users from "../views/Users.vue";
import Default from "../views/Default.vue";
import Body from "../components/BodyView.vue";
import SignInAdmin from "../views/SignInAdmin.vue";
import Profiles from "../views/ProfilesView.vue";
import People from "../views/PeopleView.vue";
import CrimesTypes from "../views/CrimesTypesView.vue";
import Permissions from "../views/PermissionsView.vue";
import IncidentReports from "../views/IncidentReportsView.vue";
import Lawsuits from "../views/LawsuitsView.vue";
import ProtectiveMeasures from "../views/ProtectiveMeasuresView.vue";
import ProtectiveMeasuresRequesteds from "../views/ProtectiveMeasuresRequesteds.vue";
import Facilities from "../views/FacilitiesView.vue";
import ForwardingProtocols from "../views/ForwardingProtocols.vue";
import AccompanimentTypeFacilities from "../views/AccompanimentTypeFacilities.vue";
// --- DASHBOARDS
import DashboardWomen from "../views/DashboardWomenView.vue";
import DashboardWomenIncidentReports from "../views/DashboardWomenIncidentReportsView.vue";
import DashboardWomenLawsuits from "../views/DashboardWomenLawsuitsView.vue";
import DashboardWomenProtectiveMeasures from "../views/DashboardWomenProtectiveMeasuresView.vue";
// import { userIsAuthenticated } from "../service/AuthenticationApi";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.use(Router);

const routes = [
  {
    path: "",
    name: "default",
    component: Default,
  },
  {
    path: "/admin",
    component: Body,
    children: [
      {
        path: "/admin",
        name: "admin",
        component: HomeAdmin,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/users",
    component: Body,
    children: [
      {
        path: "/users",
        name: "users",
        component: Users,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/permissions",
    component: Body,
    children: [
      {
        path: "/permissions",
        name: "permissions",
        component: Permissions,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/profiles",
    component: Body,
    children: [
      {
        path: "/profiles",
        name: "profiles",
        component: Profiles,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/people",
    component: Body,
    children: [
      {
        path: "/people",
        name: "people",
        component: People,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/crime_types",
    component: Body,
    children: [
      {
        path: "/crime_types",
        name: "crime_types",
        component: CrimesTypes,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/admin/entrar",
    component: SignInAdmin,
    name: "sign_in_admin",
  },
  {
    path: "/dashboard_women",
    component: Body,
    children: [
      {
        path: "/dashboard_women",
        name: "dashboard_women",
        component: DashboardWomen,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/dashboard_women_inc_rep",
    component: Body,
    children: [
      {
        path: "/dashboard_women_inc_rep",
        name: "dashboard_women_inc_rep",
        component: DashboardWomenIncidentReports,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/dashboard_women_lawsuits",
    component: Body,
    children: [
      {
        path: "/dashboard_women_lawsuits",
        name: "dashboard_women_lawsuits",
        component: DashboardWomenLawsuits,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/dashboard_women_prot_measures",
    component: Body,
    children: [
      {
        path: "/dashboard_women_prot_measures",
        name: "dashboard_women_prot_measures",
        component: DashboardWomenProtectiveMeasures,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/facilities",
    component: Body,
    children: [
      {
        path: "/facilities",
        name: "facilities",
        component: Facilities,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/accompaniment_type_facilities",
    component: Body,
    children: [
      {
        path: "/accompaniment_type_facilities",
        name: "accompaniment_type_facilities",
        component: AccompanimentTypeFacilities,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/forwarding_protocols",
    component: Body,
    children: [
      {
        path: "/forwarding_protocols",
        name: "forwarding_protocols",
        component: ForwardingProtocols,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/incident_reports",
    component: Body,
    children: [
      {
        path: "/incident_reports",
        name: "incident_reports",
        component: IncidentReports,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/protective_measures",
    component: Body,
    children: [
      {
        path: "/protective_measures",
        name: "protective_measures",
        component: ProtectiveMeasures,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/protective_measures_requesteds",
    component: Body,
    children: [
      {
        path: "/protective_measures_requesteds",
        name: "protective_measures_requesteds",
        component: ProtectiveMeasuresRequesteds,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
  {
    path: "/lawsuits",
    component: Body,
    children: [
      {
        path: "/lawsuits",
        name: "lawsuits",
        component: Lawsuits,
        meta: {
          requiresAuth: true,
          login: "sign_in_admin",
        },
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
    // console.log("authHeaders", authHeaders);
    if (authHeaders) {
      next();
    } else {
      // localStorage.removeItem("authHeaders");
      console.log("To", to);
      next({ name: to.meta.login, query: { redirect: to.fullPath } });
    }
  } else {
    next({ name: to.meta.login, query: { redirect: to.fullPath } });
  }
});

export default router;
