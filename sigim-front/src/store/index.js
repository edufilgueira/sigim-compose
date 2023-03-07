import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
import { cloneDeep } from "lodash";

import Neighborhoods from "./modules/Neighborhoods";
import User from "./modules/User";
import Users from "./modules/Users";
import AccessControl from "./modules/AccessControl";
import CrimeTypes from "./modules/CrimeTypes";
import City from "./modules/City";
import People from "./modules/People";
import Genders from "./modules/Genders";
import ContactsTypes from "./modules/ContactsTypes";
import RelationshipDegrees from "./modules/RelationshipDegrees";
import SkinColors from "./modules/SkinColors";
import CivilStatuses from "./modules/CivilStatuses";
import Breeds from "./modules/Breeds";
import Escholarities from "./modules/Escholarities";
import Ethnicities from "./modules/Ethnicities";
import SexualOrientations from "./modules/SexualOrientations";
import GenderIdentidy from "./modules/GenderIdentidy";
import States from "./modules/States";
import Session from "./modules/Session";
import Default from "./modules/Default";
import AccompanimentTypeFacilities from "./modules/AccompanimentTypeFacilities";
import Facilities from "./modules/Facilities";
import ForwardingProtocols from "./modules/ForwardingProtocols";
import IncidentReports from "./modules/IncidentReports";
import Lawsuits from "./modules/Lawsuits";
import ProtectiveMeasures from "./modules/ProtectiveMeasures";
import ViolenceTypes from "./modules/ViolenceTypes";
import ViolenceMotivations from "./modules/ViolenceMotivations";
import ProtectiveMeasuresRequesteds from "./modules/ProtectiveMeasuresRequesteds";
// --- DASHBOARDS
import DashboardWomenIncidentReports from "./modules/DashboardWomenIncidentReports";
import DashboardWomenLawsuits from "./modules/DashboardWomenLawsuits";
import DashboardWomenProtectiveMeasures from "./modules/DashboardWomenProtectiveMeasures";
// ---
import SourceSystems from "./modules/SourceSystems";
// ---
import { undoState } from "./UndoState";

Vue.use(Vuex);

const undoStatePlugin = (store) => {
  undoState.init(store);

  store.subscribe((mutation, state) => {
    if (mutation.type === "ModalInscription/setInscription") {
      undoState.addState(cloneDeep(state));
    }

    if (mutation.type === "Equipment/setEquipment") {
      undoState.addState(cloneDeep(state));
    }
  });
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === "development" ? true : false,
  plugins: [
    undoStatePlugin,
    createPersistedState({
      paths: ["City.city", "City.cities", "Session.loggedUser", "Session.role"],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  modules: {
    AccessControl,
    Neighborhoods,
    Users,
    CrimeTypes,
    States,
    Genders,
    ContactsTypes,
    RelationshipDegrees,
    SkinColors,
    CivilStatuses,
    Breeds,
    Escholarities,
    Ethnicities,
    SexualOrientations,
    GenderIdentidy,
    City,
    People,
    Session,
    Default,
    User,
    IncidentReports,
    Lawsuits,
    ProtectiveMeasures,
    ProtectiveMeasuresRequesteds,
    AccompanimentTypeFacilities,
    ForwardingProtocols,
    Facilities,
    ViolenceTypes,
    ViolenceMotivations,
    DashboardWomenIncidentReports,
    DashboardWomenLawsuits,
    DashboardWomenProtectiveMeasures,
    SourceSystems,
  },
});

export default store;
