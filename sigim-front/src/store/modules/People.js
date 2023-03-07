import {
  getPeople,
  getPeopleAll,
  createPerson,
  updatePerson,
  deletePerson,
  getPersonById,
} from "../../service/PeopleApi";
import { getStates } from "../../service/StatesApi";
import {
  createRelationshipMany,
  getRelationshipByPersonId,
  deleteRelationship,
  updateRelationship,
} from "../../service/RelationshipsApi";
import {
  createPeopleAddressMany,
  getPeopleAddressByPerson,
  deletePeopleAddress,
  updatePeopleAddress,
} from "../../service/PeopleAddressApi";
import {
  createPeopleContactMany,
  getPeopleContactByPerson,
  deletePeopleContact,
  updatePeopleContact,
} from "../../service/PeopleContactsApi";
import { getContactsTypes } from "../../service/ContactsTypesApi";
import { getCitiesByStateId } from "../../service/CityApi";
import { getNeighborhoodsByCityId } from "../../service/NeighborhoodsApi";
import Vue from "vue";

const state = {
  editRelashionship: [],
  person: {
    id: null,
    name: "",
    place_of_birth_id: 0,
    gender_id: 0,
    gender_identity_id: 0,
    sexual_orientation_id: 0,
    breed_id: 0,
    skin_color_id: 0,
    ethnicity_id: 0,
    civil_status_id: 0,
    scholarity_id: 0,
    gender: null,
    gender_identity: null,
    scholarity: null,
    ethnicity: null,
    sexual_orientation: null,
    civil_status: null,
    breed: null,
    skin_color: null,
    place_of_birth: null,
    place_of_birth_state: null,
    cpf: "",
    rg: "",
    voter_registration: "",
    work_card: "",
    social_name: "",
    nickname: "",
    birth_date: "",
    average_income: 0,
    chemical_dependent: false,
    psychological_disorder: false,
    pwd: false,
    active: false,
    roles_attributes: [],
    risk_level_id: 0,
    source_system_id: 0,
  },
  emptyPerson: {
    id: null,
    name: "",
    place_of_birth_id: 0,
    gender_id: 0,
    gender_identity_id: 0,
    sexual_orientation_id: 0,
    breed_id: 0,
    skin_color_id: 0,
    ethnicity_id: 0,
    civil_status_id: 0,
    scholarity_id: 0,
    gender: null,
    gender_identity: null,
    scholarity: null,
    ethnicity: null,
    sexual_orientation: null,
    civil_status: null,
    breed: null,
    skin_color: null,
    place_of_birth: null,
    place_of_birth_state: null,
    cpf: "",
    rg: "",
    voter_registration: "",
    work_card: "",
    social_name: "",
    nickname: "",
    birth_date: "",
    average_income: 0,
    chemical_dependent: false,
    psychological_disorder: false,
    pwd: false,
    active: false,
    roles_attributes: [],
    risk_level_id: 0,
    source_system_id: 0,
  },
  relationship: [
    {
      person_id: 0,
      relationship_id: 0,
      relationship_degree_id: 0,
      relationship_degree: null,
      relationship_person: null,
      responsible: false,
      observation: "",
      editRelashionship: false,
    },
  ],
  new_relationship: [],
  empty_new_relationship: [
    {
      person_id: 0,
      relationship_id: 0,
      relationship_degree_id: 0,
      relationship_degree: null,
      relationship_person: null,
      responsible: false,
      observation: "",
      editRelashionship: true,
    },
  ],
  empty_relationship: [
    {
      person_id: 0,
      relationship_id: 0,
      relationship_degree_id: 0,
      relationship_degree: null,
      relationship_person: null,
      responsible: false,
      observation: "",
      editRelashionship: false,
    },
  ],
  contact: [
    {
      person_id: 0,
      contact_type_id: 0,
      contact_type: null,
      contact: null,
      observation: "",
    },
  ],
  new_contact: [],
  empty_new_contact: [
    {
      editContact: false,
      person_id: 0,
      contact_type_id: 0,
      contact_type: null,
      contact: null,
      observation: "",
    },
  ],
  empty_contact: [
    {
      person_id: 0,
      contact_type_id: 0,
      contact_type: null,
      contact: null,
      observation: "",
    },
  ],
  address: [
    {
      person_id: 0,
      street_name: "",
      street_number: 0,
      address_complement: "",
      neighborhood_id: 0,
      neighborhood: null,
      state: null,
      city: null,
      cep: "",
      observation: "",
    },
  ],
  new_address: [],
  empty_new_address: [
    {
      id: 0,
      editAddress: false,
      person_id: null,
      street_name: null,
      street_number: null,
      address_complement: null,
      neighborhood_id: null,
      neighborhood: null,
      state: null,
      city: null,
      cep: null,
      observation: null,
    },
  ],
  empty_address: [
    {
      person_id: null,
      street_name: null,
      street_number: null,
      address_complement: null,
      neighborhood_id: null,
      neighborhood: null,
      state: null,
      city: null,
      cep: null,
      observation: null,
    },
  ],
  filter_people: {
    name_people: "",
    risk_level: null,
    filter_genderIdentidy: null,
  },
  paginate: [],
  contactsTypes: [],
  states: [],
  state: null,
  cities: [],
  citie: null,
  people: [],
  peopleAll: [],
  neighborhoods: null,
  filterPeople: [],
  modalToggle: false,
  modalConfirmDeletePerson: false,
  modalConfirmDeleteRelativesNew: false,
  modalConfirmDeleteAddressNew: false,
  modalConfirmDeleteContactsNew: false,
  modalDeletePeopleConfirmationOpen: false,
  personIdForDeletion: null,
  relativesIdForDeletion: null,
  addressIdForDeletion: null,
  errorMessages: [],
  personId: 0,
  relativesId: 0,
  addressId: 0,
  contactsId: 0,
  offset: 0,
  limit: 50,
  total: 0,
};

const mutations = {
  setOffsetMutation: (state, payload) => {
    state.offset = payload;
    // console.log("people", state.people);
  },
  setTotalMutation: (state, payload) => {
    state.total = payload;
    // console.log("people", state.people);
  },
  setPeopleMutation: (state, people) => {
    state.people = people;
    state.filterPeople = people;
    // console.log("people", state.people);
  },
  setPeopleAllMutation: (state, people) => {
    state.peopleAll = people;
    // console.log("people", state.people);
  },
  clearQuery: (state) => {
    // state.filter_people = [];
    state.filter_people.risk_level = null;
    state.filter_people.name = "";
    state.filter_people.filter_genderIdentidy = null;
    state.people = [];
    state.filterPeople = [];
    // console.log("clear query", state.filter_people);
  },
  setPeoplePaginateMutation: (state, paginate) => {
    state.paginate = paginate;
    // console.log("state.paginate", state.paginate);
  },
  setRelatesByPersonMutation: (state, relationships) => {
    console.log("relationships", relationships);
    relationships.forEach((relate) => {
      state.new_relationship.push({
        id: relate.id,
        person_id: relate.person.id,
        relationship_id: relate.relationship.id,
        relationship_degree_id: relate.relationship_degree.id,
        relationship_degree: relate.relationship_degree,
        relationship_person: relate.relationship,
        responsible: relate.responsible,
        observation: relate.observation,
        editRelashionship: false,
      });
    });
    console.log("state.new_relationship", state.new_relationship);
  },
  setAddressByPersonMutation: (state, address) => {
    // console.log("setAddressByPersonMutation", address);
    address.forEach((addre) => {
      state.new_address.push({
        id: addre.id,
        editAddress: false,
        person_id: addre.person.id,
        street_name: addre.street_name,
        street_number: addre.street_number,
        address_complement: addre.address_complement,
        neighborhood_id: addre.neighborhood.id,
        neighborhood: addre.neighborhood,
        state: addre.state,
        city: addre.city,
        cep: addre.cep,
        observation: addre.observation,
      });
    });
    // console.log("state.new_address", state.new_address);
  },
  setContactsByPersonMutation: (state, contacts) => {
    contacts.forEach((contact) => {
      state.new_contact.push({
        id: contact.id,
        person_id: contact.person.id,
        contact_type_id: contact.contact_type.id,
        contact_type: contact.contact_type,
        contact: contact.contact,
        observation: contact.observation,
        editContact: false,
      });
    });
    // console.log("state.new_contact", state.new_contact);
  },
  setEditRelashionshipMutation: (state, edits) => {
    state.editRelashionship = edits;
    // console.log("EDDDDDIIIIIIIIIIIITTTTTTTTTTAR ", edits);
  },
  setIdEditRelashionshipMutation: (state, payload) => {
    // console.log("CHEGOU AQUI CARAI ", state.new_relationship);
    let index = payload.index;
    // console.log("obs", payload.value);
    state.new_relationship.forEach((relative, i) => {
      if (index === i) {
        relative.editRelashionship = true;
      }
    });
  },
  addPersonMutation: (state, person) => {
    state.people.push(person);
  },
  filterListMutation: (state, input) => {
    let people = state.people;
    state.filterPeople = people.filter((obj) => {
      let name = obj.name.toLowerCase().indexOf(input.value.toLowerCase());
      let cpf = obj.cpf.toLowerCase().indexOf(input.value.toLowerCase());

      return name > -1 || cpf > -1;
    });
  },
  filterListByNameMutation: (state, payload) => {
    state.filter_people.name_people = payload.value;
    // console.log("filter by name", payload);
  },
  filterListByGenderIdentidyMutation: (state, payload) => {
    // console.log("gender identidy payload", payload);
    state.filter_people.filter_genderIdentidy = payload;
  },
  filterListByRiskLevelMutation: (state, payload) => {
    state.filter_people.risk_level = payload;
  },
  toggleModalDeleteConfirmation: (state) => {
    state.modalConfirmDeletePerson = !state.modalConfirmDeletePerson;
  },
  toggleModalDeleteRelativesConfirmation: (state) => {
    state.modalConfirmDeleteRelativesNew = !state.modalConfirmDeleteRelativesNew;
    // console.log("state.modalConfirmDeleteRelativesNew", state.modalConfirmDeleteRelativesNew);
  },
  toggleModalDeleteAddressConfirmation: (state) => {
    state.modalConfirmDeleteAddressNew = !state.modalConfirmDeleteAddressNew;
    // console.log("state.modalConfirmDeleteAddressNew", state.modalConfirmDeleteAddressNew);
  },
  toggleModalDeleteContactsConfirmation: (state) => {
    state.modalConfirmDeleteContactsNew = !state.modalConfirmDeleteContactsNew;
    // console.log("state.modalConfirmDeleteContactsNew", state.modalConfirmDeleteContactsNew);
  },
  personForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.personId = payload;
  },
  relativesForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.relativesId = payload;
  },
  addressForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.addressId = payload;
  },
  contactsForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.contactsId = payload;
  },
  setIdMutation: (state, id) => {
    state.person.id = id;
  },
  setNameMutation: (state, name) => {
    state.person.name = name;
  },
  setGenderMutation: (state, gender) => {
    state.person.gender_id = gender.id;
    state.person.gender = gender;
  },
  setStatesMutation: (state, payload) => {
    state.states = payload;
  },
  setContactsTypesMutation: (state, payload) => {
    state.contactsTypes = payload;
  },
  setCitiesMutation: (state, cities) => {
    state.cities = cities;
  },
  setNeighborhoodsMutation: (state, neighborhoods) => {
    state.neighborhoods = neighborhoods;
  },
  setStateMutation: (state, payload) => {
    state.person.place_of_birth_state = payload;
  },
  setCityMutation: (state, payload) => {
    state.person.place_of_birth_id = payload.id;
    state.person.place_of_birth = payload;
  },
  setNeighborhoodMutation: (state, payload) => {
    state.person.place_of_birth_id = payload.id;
    state.person.neighborhood = payload;
  },
  setGenderIdentidyMutation: (state, gender_identity) => {
    state.person.gender_identity_id = gender_identity.id;
    state.person.gender_identity = gender_identity;
    // console.log("gender ident state.person.gender_identity", state.person.gender_identity);
    // console.log("gender ident state.person", state.person);
  },
  setFilterGenderIdentidyMutation: (state, payload) => {
    state.filter_people.filter_genderIdentidy = payload;
    // console.log("gender ident", payload);
  },
  setBreedMutation: (state, breed) => {
    // console.log("breed", breed);
    state.person.breed_id = breed.id;
    state.person.breed = breed;
  },
  setCpfMutation: (state, cpf) => {
    state.person.cpf = cpf;
    // console.log("state.person.cpf", state.person.cpf);
    // console.log("cpf", cpf);
  },
  setEthnicitieMutation: (state, ethnicity) => {
    state.person.ethnicity_id = ethnicity.id;
    state.person.ethnicity = ethnicity;
  },
  setCivilStatusMutation: (state, civil_status) => {
    state.person.civil_status_id = civil_status.id;
    state.person.civil_status = civil_status;
  },
  setEscholaritieMutation: (state, scholarity) => {
    console.log("scholarity", scholarity);
    state.person.scholarity_id = scholarity.id;
    state.person.scholarity = scholarity;
  },
  setRgMutation: (state, rg) => {
    state.person.rg = rg;
  },
  setVoterRegistrationMutation: (state, voter_registration) => {
    state.person.voter_registration = voter_registration;
  },
  setSocialNameMutation: (state, social_name) => {
    state.person.social_name = social_name;
  },
  setNicknameMutation: (state, nickname) => {
    state.person.nickname = nickname;
  },
  setBIrthDateMutation: (state, birth_date) => {
    state.person.birth_date = birth_date;
  },
  clearPersonMutation: (state) => {
    state.person = Object.assign(state.person, state.emptyPerson);
    state.state = null;
    // console.log("state.person", state.person);
    // console.log("state.emptyperson", state.emptyPerson);
  },
  clearRelativesMutation: (state) => {
    state.relationship = Object.assign(state.relationship, state.empty_relationship);
    // console.log("state.person", state.person);
    // console.log("state.emptyperson", state.emptyPerson);
  },
  clearRelativesNewMutation: (state) => {
    state.new_relationship = [];
    // console.log("state.person", state.person);
    // console.log("state.emptyperson", state.emptyPerson);
  },
  removeRelatesNewMutation: (state, payload) => {
    console.log("removeRelatesNew payload", payload);
    console.log("removeRelatesNew state1", state.new_relationship);
    let key = state.new_relationship.findIndex((item) => {
      return payload === item.id;
    });
    console.log("removeRelatesNew key", key);
    state.new_relationship.splice(key, 1);
    console.log("removeRelatesNew state2", state.new_relationship);
  },
  clearAddressMutation: (state) => {
    state.address = Object.assign(state.address, state.empty_address);
    // console.log("state.person", state.person);
    // console.log("state.emptyperson", state.emptyPerson);
  },
  clearContactsMutation: (state) => {
    state.contact = Object.assign(state.contact, state.empty_contact);
    // console.log("state.person", state.person);
    // console.log("state.emptyperson", state.emptyPerson);
  },
  setWorkCardMutation: (state, work_card) => {
    state.person.work_card = work_card;
  },
  setAverageIncomeMutation: (state, average_income) => {
    state.person.average_income = average_income;
  },
  setPwdMutation: (state, pwd) => {
    state.person.pwd = pwd;
  },
  setRiskLevelMutation: (state, risk_level) => {
    // console.log("risk_level", risk_level);
    state.filter_people.risk_level = risk_level;
  },
  setChemicalDependencieMutation: (state, chemical_dependent) => {
    state.person.chemical_dependent = chemical_dependent;
  },
  setPsycholicalDisorderMutation: (state, psychological_disorder) => {
    state.person.psychological_disorder = psychological_disorder;
  },
  setSkinColorMutation: (state, skin_color) => {
    state.person.skin_color_id = skin_color.id;
    state.person.skin_color = skin_color;
    // console.log("skin color", skin_color);
  },
  setSexualOrientationMutation: (state, sexual_orientation) => {
    state.person.sexual_orientation_id = sexual_orientation.id;
    state.person.sexual_orientation = sexual_orientation;
  },
  toggleModalMutation: (state) => {
    state.modalToggle = !state.modalToggle;
    // console.log("state.modalToggle", state.modalToggle);
  },
  setPersonMutation: (state, person) => {
    console.log("setPersonMutation person", person);
    state.person = Object.assign(state.person, person);
  },
  setRoleMutation: (state, role) => {
    // console.log("role", role);
    state.person.roles_attributes = [role];
  },
  setRelationshipDegreeMutation: (state, payload) => {
    state.relationship.relationship_id = payload.id;
    state.relationship.relationship_degree = payload;
  },
  setRelationshipPersonMutation: (state, payload) => {
    state.relationship.relationship_person = payload;
  },
  setRelationshipObs: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;
    // console.log("obs", payload.value);
    state.relationship.forEach((relative, i) => {
      if (index === i) {
        relative.observation = obs;
      }
    });
  },
  setRelationshipObsNew: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;
    // console.log("obs", payload.value);
    state.new_relationship.forEach((relative, i) => {
      if (index === i) {
        relative.observation = obs;
      }
    });
  },
  setDegreeKinship: (state, payload) => {
    console.log("setDegreeKinship payload", payload);
    let index = payload.index;
    let degreeKinship = { id: payload.id, name: payload.name };

    state.relationship.forEach((relative, i) => {
      if (index === i) {
        relative.relationship_degree = degreeKinship;
        relative.relationship_degree_id = degreeKinship.id;
      }
    });
  },
  setDegreeKinshipNew: (state, payload) => {
    let index = payload.index;
    let degreeKinship = { id: payload.id, name: payload.name };

    state.new_relationship.forEach((relative, i) => {
      if (index === i) {
        relative.relationship_degree = degreeKinship;
        relative.relationship_degree_id = degreeKinship.id;
      }
    });
  },
  setPersonKinship: (state, payload) => {
    console.log("setPersonKinship payload", payload);
    let index = payload.index;
    let KinPerson = { id: payload.id, name: payload.name };
    console.log("PESSOA PRINCIPAL 1", state.person);
    console.log("PESSOA ", KinPerson);

    state.relationship.forEach((relative, i) => {
      if (index === i) {
        relative.relationship_person = KinPerson;
        relative.relationship_id = KinPerson.id;
        relative.person_id = state.person.id;
      }
    });
    console.log("state.relationship", state.relationship);
  },
  setPersonKinshipNew: (state, payload) => {
    let index = payload.index;
    let KinPerson = { id: payload.id, name: payload.name };
    // console.log("PESSOA PRINCIPAL 1", state.person);
    // console.log("PESSOA ", KinPerson);

    state.new_relationship.forEach((relative, i) => {
      if (index === i) {
        relative.relationship = KinPerson;
        relative.relationship_id = KinPerson.id;
        relative.person_id = state.person.id;
      }
    });
  },
  setModeEditRelashionshipMutation: (state, payload) => {
    // console.log("setModeEditRelashionshipMutation ", payload);
    state.new_relationship.forEach((relative, i) => {
      if (payload.index === i) {
        relative.editRelashionship = !relative.editRelashionship;
      }
    });
    // console.log("state.new_relationship ", state.new_relationship[payload.index]);
  },
  setModeEditAddressMutation: (state, payload) => {
    // console.log("setModeEditAddressMutation ", payload);
    state.new_address.forEach((address, i) => {
      if (payload.index === i) {
        address.editAddress = !address.editAddress;
      }
    });
    // console.log("state.new_relationship ", state.new_relationship[payload.index]);
  },
  setModeEditContactMutation: (state, payload) => {
    // console.log("setModeEditContactMutation ", payload);
    state.new_contact.forEach((contact, i) => {
      if (payload.index === i) {
        contact.editContact = !contact.editContact;
      }
    });
    // console.log("state.new_relationship ", state.new_relationship[payload.index]);
  },
  setContactTypeMutation: (state, payload) => {
    let index = payload.index;
    let cont = { id: payload.id, name: payload.name };

    state.contact.forEach((contac, i) => {
      if (index === i) {
        contac.contact_type = cont;
        contac.contact_type_id = cont.id;
        contac.person_id = state.person.id;
      }
    });
  },
  setContactMutation: (state, payload) => {
    let index = payload.index;
    let contactName = payload.value;

    state.contact.forEach((contac, i) => {
      if (index === i) {
        contac.contact = contactName;
      }
    });
  },
  setContactObsMutation: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;

    state.contact.forEach((contac, i) => {
      if (index === i) {
        contac.observation = obs;
      }
    });
  },
  setContactTypeNewMutation: (state, payload) => {
    let index = payload.index;
    let cont = { id: payload.id, name: payload.name };

    state.new_contact.forEach((contac, i) => {
      if (index === i) {
        contac.contact_type = cont;
        contac.contact_type_id = cont.id;
        contac.person_id = state.person.id;
      }
    });
  },
  setContactNewMutation: (state, payload) => {
    let index = payload.index;
    let contactName = payload.value;

    state.new_contact.forEach((contac, i) => {
      if (index === i) {
        contac.contact = contactName;
      }
    });
  },
  setContactObsNewMutation: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;

    state.new_contact.forEach((contac, i) => {
      if (index === i) {
        contac.observation = obs;
      }
    });
  },
  setResponsible: (state, payload) => {
    // console.log("Responsible payload", payload);
    state.relationship.forEach((relative, i) => {
      if (i === payload.value) {
        relative.responsible = true;
      } else {
        relative.responsible = false;
      }
    });
    console.log("state.relationship", state.relationship);
  },
  setResponsibleNew: (state, payload) => {
    // console.log("Responsible payload", payload);
    state.new_relationship.forEach((relative, i) => {
      if (i === payload.value) {
        relative.responsible = true;
      } else {
        relative.responsible = false;
      }
    });
  },
  setPersonCityMutation: (state, payload) => {
    let index = payload.index;
    let city = { id: payload.id, name: payload.name };

    state.address.forEach((addresCity, i) => {
      if (index === i) {
        addresCity.city = city;
      }
    });
  },
  setPersonStateMutation: (state, payload) => {
    let index = payload.index;
    let AddState = { id: payload.id, name: payload.name };
    state.address.forEach((addresState, i) => {
      if (index === i) {
        addresState.state = AddState;
      }
    });
  },
  setPersonAddress: (state, payload) => {
    let index = payload.index;
    let address = { id: payload.id, name: payload.name };

    state.address.forEach((personAddress, i) => {
      if (index === i) {
        personAddress.neighborhood = address;
        personAddress.neighborhood_id = address.id;
        personAddress.person_id = state.person.id;
      }
    });
  },
  setStreetMutation: (state, payload) => {
    let index = payload.index;
    let streetName = payload.value;

    state.address.forEach((address, i) => {
      if (index === i) {
        address.street_name = streetName;
      }
    });
  },
  setStreetNumberMutation: (state, payload) => {
    let index = payload.index;
    let streetNumber = payload.value;

    state.address.forEach((address, i) => {
      if (index === i) {
        address.street_number = streetNumber;
      }
    });
  },
  setStreetCepMutation: (state, payload) => {
    let index = payload.index;
    let streetCep = payload.value;

    state.address.forEach((address, i) => {
      if (index === i) {
        address.cep = streetCep;
      }
    });
  },
  setStreetCompMutation: (state, payload) => {
    let index = payload.index;
    let streetComp = payload.value;

    state.address.forEach((address, i) => {
      if (index === i) {
        address.address_complement = streetComp;
      }
    });
  },
  setAddressObsMutation: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;

    state.address.forEach((address, i) => {
      if (index === i) {
        address.observation = obs;
      }
    });
  },
  setPersonNeighMutation: (state, payload) => {
    let index = payload.index;
    let neigh = { id: payload.id, name: payload.name };

    state.address.forEach((neighborhood, i) => {
      // console.log("neighborhood", neighborhood);
      if (index === i) {
        neighborhood.neighborhood = neigh;
        neighborhood.neighborhood_id = neigh.id;
        neighborhood.person_id = state.person.id;
      }
    });
  },
  setPersonCityNewMutation: (state, payload) => {
    let index = payload.index;
    let city = { id: payload.id, name: payload.name };

    state.new_address.forEach((addresCity, i) => {
      if (index === i) {
        addresCity.city = city;
      }
    });
  },
  setPersonStateNewMutation: (state, payload) => {
    let index = payload.index;
    let AddState = { id: payload.id, name: payload.name };
    state.new_address.forEach((addresState, i) => {
      if (index === i) {
        addresState.state = AddState;
      }
    });
  },
  setPersonAddressNew: (state, payload) => {
    let index = payload.index;
    let address = { id: payload.id, name: payload.name };

    state.new_address.forEach((personAddress, i) => {
      if (index === i) {
        personAddress.neighborhood = address;
        personAddress.neighborhood_id = address.id;
        personAddress.person_id = state.person.id;
      }
    });
  },
  setStreetNewMutation: (state, payload) => {
    let index = payload.index;
    let streetName = payload.value;

    state.new_address.forEach((address, i) => {
      if (index === i) {
        address.street_name = streetName;
      }
    });
  },
  setStreetNumberNewMutation: (state, payload) => {
    let index = payload.index;
    let streetNumber = payload.value;

    state.new_address.forEach((address, i) => {
      if (index === i) {
        address.street_number = streetNumber;
      }
    });
  },
  setStreetCepNewMutation: (state, payload) => {
    let index = payload.index;
    let streetCep = payload.value;

    state.new_address.forEach((address, i) => {
      if (index === i) {
        address.cep = streetCep;
      }
    });
  },
  setStreetCompNewMutation: (state, payload) => {
    let index = payload.index;
    let streetComp = payload.value;

    state.new_address.forEach((address, i) => {
      if (index === i) {
        address.address_complement = streetComp;
      }
    });
  },
  setAddressObsNewMutation: (state, payload) => {
    let index = payload.index;
    let obs = payload.value;

    state.new_address.forEach((address, i) => {
      if (index === i) {
        address.observation = obs;
      }
    });
  },
  setPersonNeighNewMutation: (state, payload) => {
    let index = payload.index;
    let neigh = { id: payload.id, name: payload.name };

    state.new_address.forEach((neighborhood, i) => {
      // console.log("neighborhood", neighborhood);
      if (index === i) {
        neighborhood.neighborhood = neigh;
        neighborhood.neighborhood_id = neigh.id;
        neighborhood.person_id = state.person.id;
      }
    });
  },
  addRelative: (state) => {
    state.relationship.push({
      person_id: null,
      relationship_id: null,
      relationship_degree: null,
      relationship_person: null,
      responsible: false,
      observation: null,
    });
  },
  deleteRelative: (state) => {
    state.relationship.pop({
      person_id: null,
      relationship_id: null,
      relationship_degree: null,
      relationship_person: null,
      responsible: false,
      observation: null,
    });
  },
  addContactMutation: (state) => {
    state.contact.push({
      person_id: null,
      contact_type_id: null,
      contact_type: null,
      contact: null,
      observation: "",
    });
  },
  deleteContactMutation: (state) => {
    state.contact.pop({
      person_id: null,
      contact_type_id: null,
      contact_type: null,
      contact: null,
      observation: "",
    });
  },
  addAddressMutation: (state) => {
    state.address.push({
      person_id: null,
      street_name: null,
      street_number: null,
      address_complement: null,
      neighborhood_id: null,
      neighborhood: null,
      state: null,
      city: null,
      cep: null,
      observation: null,
    });
    // console.log("state.address", state.address);
  },
  deleteAddressMutation: (state) => {
    state.address.pop({
      person_id: null,
      street_name: null,
      street_number: null,
      address_complement: null,
      neighborhood_id: null,
      neighborhood: null,
      cep: null,
      observation: null,
    });
  },
  // setScholaritie: (state, payload) => {
  //   state.person.escholarity_id = payload.id;
  //   state.escholarity = payload.name;
  // },
  // setCivilStatusMutation: (state, payload) => {
  //   state.person.civil_status_id = payload.id;
  //   state.civil_status = payload.name;
  //   console.log("state.civil_status", state.civil_status);
  // },
  setActiveMutation: (state, active) => {
    state.person.active = active;
  },
  setErrorMessagesMutation: (state, errorMessages) => {
    state.errorMessages = errorMessages;
  },
};

const actions = {
  setOfsset: ({ commit }, payload) => {
    commit("setOfsettMutation", payload);
  },
  setTotal: ({ commit }, payload) => {
    commit("setTotalMutation", payload);
  },
  setPeople: ({ commit }, people) => {
    commit("setPeopleMutation", people);
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  addPerson: ({ commit }, person) => {
    commit("addPersonMutation", person);
  },
  filterList: ({ commit }, payload) => {
    commit("filterListMutation", payload);
  },
  filterListByName: ({ commit }, payload) => {
    commit("filterListByNameMutation", payload);
  },
  filterListByGenderIdentidy: ({ commit }, payload) => {
    commit("filterListByGenderIdentidyMutation", payload);
  },
  filterListByRiskLevel: ({ commit }, payload) => {
    commit("setRiskLevelMutation", payload);
  },
  setName: ({ commit }, payload) => {
    commit("setNameMutation", payload.value);
  },
  setGender: ({ commit }, payload) => {
    commit("setGenderMutation", payload);
  },
  setState: ({ commit, dispatch }, payload) => {
    // console.log("state payload", payload);
    commit("setStateMutation", payload);
    dispatch("loadCities", payload.id);
  },
  setCitie: ({ commit }, payload) => {
    commit("setCitieMutation", payload);
  },
  setPersonCityNew: ({ commit }, payload) => {
    commit("setPersonCityNewMutation", payload);
    commit("loadNeghborhoodsMutation", payload.id);
  },
  setNeighborhood: ({ commit }, payload) => {
    // console.log("neghborhoods", payload);
    commit("setNeighborhoodMutation", payload);
  },
  setPersonCity: ({ commit, dispatch }, payload) => {
    commit("setPersonCityMutation", payload);
    dispatch("loadNeighborhoods", payload.id);
  },
  setPersonState: ({ commit, dispatch }, payload) => {
    commit("setPersonStateMutation", payload);
    dispatch("loadCities", payload.id);
  },
  addAddress: ({ commit }) => {
    commit("addAddressMutation");
  },
  deleteAddress: ({ commit }, payload) => {
    commit("deleteAddressMutation", payload);
  },
  setContactType: ({ commit }, payload) => {
    commit("setContactTypeMutation", payload);
  },
  setContact: ({ commit }, payload) => {
    commit("setContactMutation", payload);
  },
  setContactObs: ({ commit }, payload) => {
    commit("setContactObsMutation", payload);
  },
  setContactTypeNew: ({ commit }, payload) => {
    commit("setContactTypeNewMutation", payload);
  },
  setContactNew: ({ commit }, payload) => {
    commit("setContactNewMutation", payload);
  },
  setContactObsNew: ({ commit }, payload) => {
    commit("setContactObsNewMutation", payload);
  },
  addContact: ({ commit }, payload) => {
    commit("addContactMutation", payload);
  },
  deleteContact: ({ commit }, payload) => {
    commit("deleteContactMutation", payload);
  },
  setGenderIdentidy: ({ commit }, payload) => {
    // console.log("setGenderIdent", payload);
    commit("setGenderIdentidyMutation", payload);
  },
  // setFilterGenderIdentidy: ({ commit }, payload) => {
  //   // console.log("setGenderIdent", payload);
  //   commit("setFilterGenderIdentidyMutation", payload);
  // },
  setBreed: ({ commit }, payload) => {
    // console.log("setBreed", payload);
    commit("setBreedMutation", payload);
  },
  setCpf: ({ commit }, payload) => {
    commit("setCpfMutation", payload.value);
  },
  setEthnicitie: ({ commit }, payload) => {
    commit("setEthnicitieMutation", payload);
  },
  setCivilState: ({ commit }, payload) => {
    commit("setCivilStateMutation", payload);
  },
  setScholaritie: ({ commit }, payload) => {
    // console.log("setEscolar", payload);
    commit("setEscholaritieMutation", payload);
  },
  setAverageIncome: ({ commit }, payload) => {
    commit("setAverageIncomeMutation", payload.value);
  },
  setSkinColor: ({ commit }, payload) => {
    commit("setSkinColorMutation", payload);
  },
  setRg: ({ commit }, payload) => {
    commit("setRgMutation", payload.value);
  },
  setSocialName: ({ commit }, payload) => {
    commit("setSocialNameMutation", payload.value);
  },
  setNickname: ({ commit }, payload) => {
    commit("setNicknameMutation", payload.value);
  },
  setBIrthDate: ({ commit }, payload) => {
    commit("setBIrthDateMutation", payload.value);
  },
  setPwd: ({ commit }, payload) => {
    commit("setPwdMutation", payload.value);
  },
  // setRiskLevel: ({ commit }, payload) => {
  //   console.log("setRiskLevel payload", payload);
  //   commit("setRiskLevelMutation", payload);
  // },
  setChemicalDependencie: ({ commit }, payload) => {
    commit("setChemicalDependencieMutation", payload.value);
  },
  setPsycholicalDisorder: ({ commit }, payload) => {
    commit("setPsycholicalDisorderMutation", payload.value);
  },
  setVoterRegistration: ({ commit }, payload) => {
    commit("setVoterRegistrationMutation", payload.value);
  },
  setWorkCard: ({ commit }, payload) => {
    commit("setWorkCardMutation", payload.value);
  },
  setsexualOrientation: ({ commit }, payload) => {
    // console.log("setSexualOri", payload);
    commit("setSexualOrientationMutation", payload);
  },
  setCivilStatus: ({ commit }, payload) => {
    commit("setCivilStatusMutation", payload);
  },
  setRelatioshipDegree: ({ commit }, payload) => {
    commit("setRelationshipDegreeMutation", payload);
  },
  setRelativeObs: ({ commit }, payload) => {
    commit("setRelationshipObs", payload);
  },
  setRelativeObsNew: ({ commit }, payload) => {
    commit("setRelationshipObsNew", payload);
  },
  setActive: ({ commit }, payload) => {
    commit("setActiveMutation", payload.value);
  },
  loadContactstypes: ({ commit }) => {
    getContactsTypes()
      .then((resp) => {
        // console.log("COntatos", resp);
        commit("setContactsTypesMutation", resp.data.contact_types);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadStates: ({ commit }) => {
    getStates()
      .then((resp) => {
        console.log("Stados", resp);
        commit("setStatesMutation", resp.data.states);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadCities: ({ commit }, city_id) => {
    getCitiesByStateId(city_id)
      .then((response) => {
        // console.log("cities", response);
        commit("setCitiesMutation", response.data.cities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setCity: ({ commit, dispatch }, payload) => {
    commit("setCityMutation", payload);
    dispatch("loadNeighborhoods", payload.id);
  },
  loadNeighborhoods: ({ commit }, payload) => {
    // console.log("city id", payload);
    let id = payload;
    getNeighborhoodsByCityId(id)
      .then((response) => {
        // console.log("neghborhoods", response);
        commit("setNeighborhoodsMutation", response.data.neighborhoods);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadPeople: ({ commit }) => {
    const filters = {
      name: state.filter_people.name_people ? state.filter_people.name_people : "",
      risk_level_id: state.filter_people.risk_level ? state.filter_people.risk_level.id : null,
      gender_identity_id: state.filter_people.filter_genderIdentidy
        ? state.filter_people.filter_genderIdentidy.id
        : null,
    };
    // console.log("People filters", filters);
    // console.log("response People payload", payload);
    getPeople(filters)
      .then((response) => {
        // console.log("response People", response);
        commit("setPeopleMutation", response.data.people);
        commit("setPeoplePaginateMutation", response.data.paginate);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadPeopleAll: ({ commit }) => {
    // console.log("People filters", filters);
    // console.log("response People payload", payload);
    getPeopleAll()
      .then((response) => {
        console.log("response PeopleAll", response);
        commit("setPeopleAllMutation", response.data.people);
        commit("setPeoplePaginateMutation", response.data.paginate);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadRelativesByPerson: ({ commit }, person_id) => {
    // console.log("person_id", person_id);
    getRelationshipByPersonId(person_id)
      .then((response) => {
        console.log("response Relates by Person", response);
        let editRelashionship = [];
        response.data.relationships.forEach((relate) => {
          editRelashionship[relate.id] = false;
        });
        commit("setEditRelashionshipMutation", editRelashionship);
        commit("setRelatesByPersonMutation", response.data.relationships);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  setIdEditRelashionship: ({ commit, state }, id) => {
    commit("setIdEditRelashionshipMutation", state.editRelashionship[id]);
  },
  loadAddressByPerson: ({ commit }, person_id) => {
    // console.log("person_id", person_id);
    getPeopleAddressByPerson(person_id)
      .then((response) => {
        // console.log("response Address by Person", response);
        commit("setAddressByPersonMutation", response.data.people_addresses);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadContactByPerson: ({ commit }, person_id) => {
    // console.log("person_id", person_id);
    getPeopleContactByPerson(person_id)
      .then((response) => {
        // console.log("response Contacts by Person", response);
        commit("setContactsByPersonMutation", response.data.people_contacts);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  closeModal: ({ commit }) => {
    commit("toggleModalMutation");
    commit("clearPersonMutation");
    commit("clearRelativesMutation");
    commit("clearRelativesNewMutation");
    commit("clearContactsMutation");
    commit("clearAddressMutation");
    commit("setErrorMessagesMutation", []);
  },
  setPerson: ({ commit }, payload) => {
    getPersonById(payload.id).then((resp) => {
      console.log("resp person", resp.data.person);
      commit("setPersonMutation", resp.data.person);
    });
  },
  openModal: ({ commit }) => {
    commit("toggleModalMutation");
  },
  openEditModal: ({ dispatch }, payload) => {
    dispatch("setPerson", payload);
    dispatch("loadRelativesByPerson", payload.id);
    dispatch("loadAddressByPerson", payload.id);
    dispatch("loadContactByPerson", payload.id);
    dispatch("loadCities", payload.place_of_birth.state_id);
    dispatch("loadNeighborhoods", payload.place_of_birth.id);
    dispatch("openModal", payload);
    // dispatch("setBreed", payload.breed);
    // dispatch("setGender", payload.gender);
    // dispatch("setGenderIdentidy", payload.gender_identity);
    // dispatch("setEthnicitie", payload.ethnicity);
    // dispatch("setCivilStatus", payload.civil_status);
    // dispatch("setScholaritie", payload.scholarity);
    // dispatch("setsexualOrientation", payload.sexual_orientation);
    // dispatch("setSkinColor", payload.skin_color);
    // dispatch("setCity", payload.place_of_birth);
  },
  addRelative: ({ commit }) => {
    commit("addRelative");
  },
  deleteRelative: ({ commit }) => {
    commit("deleteRelative");
  },
  // deleteNewRelative: ({ dispatch }, relate_id) => {
  //   deleteRelationship(relate_id).then((resp) => {
  //     console.log("delete relate", resp);
  //   });
  // },
  // deleteAddress: ({ commit }) => {
  //   commit("deleteAddress");
  // },
  setDegreeKinship: ({ commit }, payload) => {
    commit("setDegreeKinship", payload);
  },
  setDegreeKinshipNew: ({ commit }, payload) => {
    commit("setDegreeKinshipNew", payload);
  },
  setPersonKinship: ({ commit }, payload) => {
    commit("setPersonKinship", payload);
  },
  setPersonKinshipNew: ({ commit }, payload) => {
    commit("setPersonKinshipNew", payload);
  },
  setModeEditRelashionship: ({ commit }, payload) => {
    commit("setModeEditRelashionshipMutation", payload);
  },
  setModeEditAddress: ({ commit }, payload) => {
    commit("setModeEditAddressMutation", payload);
  },
  setModeEditContact: ({ commit }, payload) => {
    commit("setModeEditContactMutation", payload);
  },
  setPersonAddress: ({ commit }, payload) => {
    commit("setPersonAddress", payload);
  },
  setStreet: ({ commit }, payload) => {
    commit("setStreetMutation", payload);
  },
  setStreetNumber: ({ commit }, payload) => {
    commit("setStreetNumberMutation", payload);
  },
  setStreetCep: ({ commit }, payload) => {
    commit("setStreetCepMutation", payload);
  },
  setStreetComp: ({ commit }, payload) => {
    commit("setStreetCompMutation", payload);
  },
  setAddressObs: ({ commit }, payload) => {
    commit("setAddressObsMutation", payload);
  },
  setPersonAddressNew: ({ commit }, payload) => {
    commit("setPersonAddressNew", payload);
  },
  setStreetNew: ({ commit }, payload) => {
    commit("setStreetNewMutation", payload);
  },
  setStreetNumberNew: ({ commit }, payload) => {
    commit("setStreetNumberNewMutation", payload);
  },
  setStreetCepNew: ({ commit }, payload) => {
    commit("setStreetCepNewMutation", payload);
  },
  setStreetCompNew: ({ commit }, payload) => {
    commit("setStreetCompNewMutation", payload);
  },
  setAddressObsNew: ({ commit }, payload) => {
    commit("setAddressObsNewMutation", payload);
  },
  setPersonNeigh: ({ commit }, payload) => {
    commit("setPersonNeighMutation", payload);
  },
  setResponsible: ({ commit }, payload) => {
    commit("setResponsible", payload);
  },
  setResponsibleNew: ({ commit }, payload) => {
    commit("setResponsibleNew", payload);
  },
  setPersonContact: ({ commit }, payload) => {
    commit("setPersonContactMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    const person = state.person;
    // console.log("person", person);
    const objPerson = {
      id: person.id,
      name: person.name,
      gender_id: person.gender_id,
      gender_identity_id: person.gender_identity_id,
      sexual_orientation_id: person.sexual_orientation_id,
      breed_id: person.breed_id,
      skin_color_id: person.skin_color_id,
      ethnicity_id: person.ethnicity_id,
      civil_status_id: person.civil_status_id,
      scholarity_id: person.scholarity_id,
      cpf: person.cpf,
      rg: person.rg,
      place_of_birth_id: person.place_of_birth_id,
      voter_registration: person.voter_registration,
      work_card: person.work_card,
      social_name: person.social_name,
      nickname: person.nickname,
      birth_date: person.birth_date,
      average_income: person.average_income,
      chemical_dependent: person.chemical_dependent,
      psychological_disorder: person.psychological_disorder,
      pwd: person.pwd,
      active: person.active,
      risk_level_id: 1,
      source_system_id: 1,
    };
    // console.log("objPerdon", objPerson);
    createPerson(objPerson)
      .then((response) => {
        // console.log("Create Person", response);
        Vue.$toast.success("Criado com sucesso");
        dispatch("People/addPerson", response.data, { root: true });
        commit("toggleModalMutation");
        dispatch("People/loadPeople", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o usuário! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
        commit("setErrorMessagesMutation", e.response.data.errors);
      });
  },
  update: ({ dispatch, state }) => {
    const person = state.person;
    // console.log("person", person);
    const objPerson = {
      id: person.id,
      name: person.name,
      gender_id: person.gender.id,
      gender_identity_id: person.gender_identity.id,
      sexual_orientation_id: person.sexual_orientation.id,
      breed_id: person.breed.id,
      skin_color_id: person.skin_color.id,
      ethnicity_id: person.ethnicity.id,
      civil_status_id: person.civil_status.id,
      scholarity_id: person.scholarity.id,
      cpf: person.cpf,
      rg: person.rg,
      place_of_birth_id: person.place_of_birth.id,
      voter_registration: person.voter_registration,
      work_card: person.work_card,
      social_name: person.social_name,
      nickname: person.nickname,
      birth_date: person.birth_date,
      average_income: person.average_income,
      chemical_dependent: person.chemical_dependent,
      psychological_disorder: person.psychological_disorder,
      pwd: person.pwd,
      active: person.active,
    };
    // console.log("objPerson", objPerson);
    if (state.relationship) {
      const objRelate = [];
      console.log("state.relationship", state.relationship);
      state.relationship.forEach((relate) => {
        objRelate.push({
          person_id: relate.person_id,
          relationship_id: relate.relationship_id,
          relationship_degree_id: relate.relationship_degree_id,
          responsible: relate.responsible,
          observation: relate.observation,
        });
      });
      console.log("objRelate", objRelate);
      createRelationshipMany(objRelate).then((resp) => {
        // console.log("update relationship", resp);
        if (resp.status === 201 || resp.status === 200) {
          Vue.$toast.success("Parente(s) inserido com sucesso");
          // commit("clearRelativesNewMutation");
        } else {
          Vue.$toast.error(
            "Não foi possivel cadastrar Parente(s)! " +
              "Por favor verifique se todos os campos com ( * ) foram preenchidos"
          );
        }
      });
    }
    if (state.address) {
      const objAddress = [];
      // console.log("state.address", state.address);
      state.address.forEach((addres) => {
        objAddress.push({
          person_id: addres.person_id,
          neighborhood_id: addres.neighborhood_id,
          cep: addres.cep,
          address_complement: addres.address_complement,
          street_name: addres.street_name,
          street_number: addres.street_number,
          observation: addres.observation,
        });
      });
      createPeopleAddressMany(objAddress).then((resp) => {
        // console.log("update relationship", resp);
        if (resp.status === 201 || resp.status === 200) {
          Vue.$toast.success("Endereço(s) inserido com sucesso");
        } else {
          Vue.$toast.error(
            "Não foi possivel cadastrar Endereço(s)! " +
              "Por favor verifique se todos os campos com ( * ) foram preenchidos"
          );
        }
      });
    }
    if (state.contact) {
      // console.log("state.contact", state.contact);
      const objContact = [];
      state.contact.forEach((cont) => {
        objContact.push({
          person_id: cont.person_id,
          contact_type_id: cont.contact_type_id,
          contact: cont.contact,
          observation: cont.observation,
        });
      });
      createPeopleContactMany(objContact).then((resp) => {
        // console.log("update relationship", resp);
        if (resp.status === 201 || resp.status === 200) {
          Vue.$toast.success("Contato(s) inserido com sucesso");
        } else {
          Vue.$toast.error(
            "Não foi possivel cadastrar Contato(s)! " +
              "Por favor verifique se todos os campos com ( * ) foram preenchidos"
          );
        }
      });
    }
    updatePerson(objPerson).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Atualizado com sucesso");
        dispatch("People/loadPeople", null, { root: true });
        dispatch("closeModal");
      } else {
        Vue.$toast.error(
          "Não foi possivel cadastrar o usuário! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateRelatesNew: ({ commit }, payload) => {
    commit("setRoleMutation", payload.obs);
    console.log("objRelativesNew payload", payload);
    const objRelativesNew = {
      person_id: payload.person_id,
      relationship_id: payload.relationship_id,
      relationship_degree_id: payload.relationship_degree_id,
      responsible: payload.responsible,
      observation: payload.observation,
    };
    console.log("objRelativesNew", objRelativesNew);
    updateRelationship(payload.id, objRelativesNew).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Relacionamento atualizado com sucesso");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar relacionamento! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateAddressNew: ({ commit }, payload) => {
    commit("setRoleMutation", payload.obs);
    // console.log("objAddressNew payload", payload);
    const objAddressNew = {
      person_id: payload.person_id,
      neighborhood_id: payload.neighborhood_id,
      cep: payload.cep,
      address_complement: payload.address_complement,
      street_name: payload.street_name,
      street_number: payload.street_number,
      observation: payload.observation,
    };
    // console.log("objAddressNew", objAddressNew);
    updatePeopleAddress(payload.id, objAddressNew).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Enderço atualizado com sucesso");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar endereço! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateContactsNew: ({ commit }, payload) => {
    commit("setRoleMutation", payload.obs);
    // console.log("objContactsNew payload", payload);
    const objContactsNew = {
      person_id: payload.person_id,
      contact_type_id: payload.contact_type_id,
      contact: payload.contact,
      observation: payload.observation,
    };
    // console.log("objContactsNew", objContactsNew);
    updatePeopleContact(payload.id, objContactsNew).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Contato atualizado com sucesso");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar contato! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  openCloseDeletePersonConfirmation: ({ commit, state }, payload) => {
    // console.log("payload user", payload);
    commit("toggleModalDeleteConfirmation");
    if (state.modalConfirmDeletePerson) {
      commit("personForDeletion", payload.id);
    } else {
      commit("personForDeletion", null);
    }
  },
  openCloseDeleteRelativesConfirmation: ({ commit, state }, payload) => {
    // console.log("payload user", payload);
    commit("toggleModalDeleteRelativesConfirmation");

    if (state.modalConfirmDeleteRelativesNew) {
      commit("relativesForDeletion", payload);
    } else {
      commit("relativesForDeletion", null);
    }
  },
  openCloseDeleteAddressConfirmation: ({ commit, state }, payload) => {
    // console.log("payload user", payload);
    commit("toggleModalDeleteAddressConfirmation");

    if (state.modalConfirmDeleteAddressNew) {
      commit("addressForDeletion", payload);
    } else {
      commit("addressForDeletion", null);
    }
  },
  openCloseDeleteContactsConfirmation: ({ commit, state }, payload) => {
    // console.log("payload user", payload);
    commit("toggleModalDeleteContactsConfirmation");

    if (state.modalConfirmDeleteContactsNew) {
      commit("contactsForDeletion", payload);
    } else {
      commit("contactsForDeletion", null);
    }
  },
  deletePerson: ({ commit, dispatch, state }) => {
    const personId = state.personId;
    // console.log("person_id", prof_id);
    deletePerson(personId).then((resp) => {
      console.log("resp delete person", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Usuário deletado com sucesso");
        dispatch("People/loadPeople", null, { root: true });
        commit("toggleModalDeleteConfirmation");
      }
    });
  },
  deleteRelatives: ({ commit, state }) => {
    const relativesId = state.relativesId;
    // console.log("person_id", prof_id);
    deleteRelationship(relativesId).then((resp) => {
      console.log("resp delete realtives", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Relacionamento deletado com sucesso");
        commit("removeRelatesNewMutation", relativesId);
        // commit("clearRelativesNewMutation");
        // dispatch("People/loadRelativesByPerson", state.person.id, { root: true });
        commit("toggleModalDeleteRelativesConfirmation");
      }
    });
  },
  deleteAddresses: ({ commit, dispatch, state }) => {
    const addressId = state.addressId;
    // console.log("person_id", prof_id);
    deletePeopleAddress(addressId).then((resp) => {
      console.log("resp delete address", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Enderesso deletado com sucesso");
        dispatch("People/loadAddressByPerson", state.person.id, { root: true });
        commit("toggleModalDeleteAddressConfirmation");
      }
    });
  },
  deleteContacts: ({ commit, dispatch, state }) => {
    const contactsId = state.contactsId;
    // console.log("person_id", prof_id);
    deletePeopleContact(contactsId).then((resp) => {
      console.log("resp delete contacts", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Contato deletado com sucesso");
        dispatch("People/loadContactByPerson", state.person.id, { root: true });
        commit("toggleModalDeleteContactsConfirmation");
      }
    });
  },
};

const getters = {
  getErrorMessage: (state) => (key, field) => {
    let error = state.errorMessages.find((errorMessage) => {
      return errorMessage.attribute === key;
    });

    if (error) {
      switch (error.type) {
        case "blank":
          if (field === "" || field === " " || field === undefined || field === null || field.length === 0) {
            return error.message;
          } else {
            return null;
          }

        case "invalid_cpf":
          return error.message;

        case "invalid":
          return error.message;

        case "taken":
          return error.message;

        default:
          return null;
      }
    } else {
      return null;
    }
  },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};
