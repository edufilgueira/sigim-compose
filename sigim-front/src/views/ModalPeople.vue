<template>
  <div>
    <BaseModal width="w-264" v-if="open">
      <template v-slot:header>
        <div class="grid grid-cols-2">
          <div class="justify-self-start">
            <Label
              v-if="person.id"
              text="Editar Pessoa"
              :icon="null"
              :icon-type="null"
              type="text-2xl"
              weight="bold"
              normal
              mode="normal-case"
              class="text-ashes-dark"
            />
            <Label
              v-else
              text="Adicionar Pessoa"
              :icon="null"
              :icon-type="null"
              type="text-2xl"
              weight="bold"
              normal
              mode="normal-case"
              class="text-ashes-dark"
            />
          </div>
          <div class="justify-self-end">
            <AppButtonIcon dispatch="People/closeModal" forClose />
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="grid grid-cols-2">
          <div class="col-span-2 text-purple pb-2">
            <Label
              text="Informações Gerais"
              :icon="null"
              :icon-type="null"
              type="text-sm"
              weight="semibold"
              normal
              mode="uppercase"
            />
            <div class="border-ashes-hover border-b-2 w-full"></div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-2">
          <div>
            <BaseInput
              id="name"
              input-name="name"
              input-placeholder="nome"
              input-type="text"
              show-label
              label-text="nome"
              required
              :value="person.name"
              dispatch="People/setName"
            />
          </div>
          <div>
            <Multiselect
              id="select-gender"
              select-placeholder="gênero"
              label-text="gênero"
              close-on-select
              required
              show-label
              :value="person.gender"
              :options="Genders"
              :dispatch="setGender"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-genderIdentidy"
              select-placeholder="Identidade de Gênero"
              label-text="Identidade de Gênero"
              close-on-select
              required
              show-label
              :value="person.gender_identity"
              :options="gendersIdentidy"
              :dispatch="setGenderIdentidy"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-sexualOrientation"
              select-placeholder="Orientação Sexual"
              label-text="Orientação Sexual"
              close-on-select
              required
              show-label
              :value="person.sexual_orientation"
              :options="SexualOrientations"
              :dispatch="setSexualOrientation"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-breed"
              select-placeholder="Raça"
              label-text="Raça"
              close-on-select
              required
              show-label
              :value="person.breed"
              :options="breeds"
              :dispatch="setBreed"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-ethnicitie"
              select-placeholder="Etnia"
              label-text="Etnia"
              close-on-select
              required
              show-label
              :value="person.ethnicity"
              :options="ethnicities"
              :dispatch="setEthnicitie"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-civilState"
              select-placeholder="Estado Civil"
              label-text="Estado Civil"
              close-on-select
              required
              show-label
              :value="person.civil_status"
              :options="civilStatuses"
              :dispatch="setCivilStatus"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-skin_color"
              select-placeholder="Cor da Pele"
              label-text="Cor da Pele"
              close-on-select
              required
              show-label
              :value="person.skin_color"
              :options="skinColors"
              :dispatch="setSkinColor"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-scholaritie"
              select-placeholder="escolaridade"
              label-text="escolaridade"
              close-on-select
              required
              show-label
              :value="person.scholarity"
              :options="scholarities"
              :dispatch="setScholaritie"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div>
            <Multiselect
              id="select-state"
              select-placeholder="Selecionar"
              label-text="Estado"
              :value="person.place_of_birth_state"
              close-on-select
              show-label
              required
              :multiple-option="false"
              :options="states"
              :dispatch="setState"
              class="mr-5"
            />
          </div>
          <div>
            <Multiselect
              id="select-city"
              select-placeholder="Selecionar"
              label-text="Cidade"
              :value="person.place_of_birth"
              close-on-select
              show-label
              :multiple-option="false"
              :options="cities"
              required
              :dispatch="setCity"
              class="mr-5"
            />
          </div>
          <!-- <div>
          <Multiselect
            id="select-neighborhood"
            select-placeholder="Selecionar"
            label-text="Bairro"
            :value="neighborhood"
            close-on-select
            show-label
            required
            :multiple-option="false"
            :options="neighborhoods"
            :dispatch="setNeighborhood"
            class="mr-5"
          />
        </div> -->
          <div>
            <BaseInput
              id="cpf"
              input-name="cpf"
              input-placeholder="000.000.000-00"
              input-type="text"
              show-label
              label-text="cpf"
              required
              mask="###.###.###-##"
              :value="person.cpf"
              :error-message="getErrorMessage('cpf', person.cpf)"
              dispatch="People/setCpf"
            />
          </div>
          <div>
            <BaseInput
              id="rg"
              input-name="rg"
              input-type="text"
              show-label
              label-text="rg"
              required
              :value="person.rg"
              :error-message="getErrorMessage('rg', person.rg)"
              dispatch="People/setRg"
            />
          </div>
          <div>
            <BaseInput
              id="voter_registration"
              input-name="Títulod de Eleitor"
              input-type="text"
              show-label
              label-text="Títulod de Eleitor"
              required
              :value="person.voter_registration"
              :error-message="getErrorMessage('voter_registration', person.voter_registration)"
              dispatch="People/setVoterRegistration"
            />
          </div>
          <div>
            <BaseInput
              id="social_name"
              input-name="social_name"
              input-type="text"
              show-label
              label-text="nome social"
              required
              :value="person.social_name"
              :error-message="getErrorMessage('social_name', person.social_name)"
              dispatch="People/setSocialName"
            />
          </div>
          <div>
            <BaseInput
              id="nickname"
              input-name="nickname"
              input-type="text"
              show-label
              label-text="apelido"
              required
              :value="person.nickname"
              :error-message="getErrorMessage('nickname', person.nickname)"
              dispatch="People/setNickname"
            />
          </div>
          <div>
            <BaseInput
              id="birth_date"
              input-name="birth_date"
              input-type="date"
              show-label
              label-text="data de nascimento"
              required
              :value="person.birth_date"
              :error-message="getErrorMessage('birth_date', person.birth_date)"
              dispatch="People/setBIrthDate"
            />
          </div>
          <div>
            <BaseInput
              id="work_card"
              input-name="work_card"
              input-type="text"
              show-label
              label-text="carteira de trabalho"
              required
              :value="person.work_card"
              :error-message="getErrorMessage('birth_date', person.birth_date)"
              dispatch="People/setWorkCard"
            />
          </div>
          <div>
            <BaseInput
              id="average_income"
              input-name="average_income"
              input-type="number"
              show-label
              label-text="renda familiar"
              required
              min="1"
              :value="person.average_income"
              :error-message="getErrorMessage('average_income', person.average_income)"
              dispatch="People/setAverageIncome"
            />
          </div>
          <div class="grid grid-cols-3 col-span-2">
            <AppRadioButton
              :values="[
                { name: 'pwd', value: true, description: 'Sim', checked: person.pwd === true },
                { name: 'pwd', value: false, description: 'Não', checked: person.pwd === false },
              ]"
              labelText="Pessoa Com Deficencia"
              showLabel
              dispatch="People/setPwd"
            />
            <AppRadioButton
              :values="[
                {
                  name: 'chemical_dependent',
                  value: true,
                  description: 'Sim',
                  checked: person.chemical_dependent === true,
                },
                {
                  name: 'chemical_dependent',
                  value: false,
                  description: 'Não',
                  checked: person.chemical_dependent === false,
                },
              ]"
              labelText="Dependente químico"
              showLabel
              dispatch="People/setChemicalDependencie"
            />
            <AppRadioButton
              :values="[
                {
                  name: 'pysichological_disorder',
                  value: true,
                  description: 'Sim',
                  checked: person.psychological_disorder === true,
                },
                {
                  name: 'pysichological_disorder',
                  value: false,
                  description: 'Não',
                  checked: person.psychological_disorder === false,
                },
              ]"
              labelText="problemas psicológicos"
              showLabel
              dispatch="People/setPsycholicalDisorder"
            />
          </div>
          <div v-if="person.id" class="w-full mt-5 col-span-2">
            <div class="col-span-2 text-purple pt-4" v-if="new_relationship && new_relationship.length > 0">
              <Label
                text="Editar Relacionamentos"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>

            <div :key="'N' + index" v-for="(new_relative, index) in new_relationship">
              <!-- 
                quando vier do banco... 
                mostrar somente os labels
              -->
              <div class="grid grid-cols-4 gap-5 mt-5" v-if="!new_relative.editRelashionship">
                <div>
                  <AppTextField
                    show-label
                    label-text="Grau de Parentesco"
                    :text="new_relative.relationship_degree.name"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-1 pt-5">
                  <AppTextField
                    show-label
                    label-text="Responsável?"
                    :text="new_relative.responsible === true ? 'SIM' : 'NÂO'"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-3">
                  <AppTextField
                    show-label
                    label-text="Pessoa"
                    :text="new_relative.relationship_person.name"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-5">
                  <AppTextField
                    show-label
                    label-text="Observação"
                    :text="new_relative.observation"
                    type-text="topic-details"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditRelashionship(index, new_relative)"
                    >
                      <AppMaterialIcon icon-name="edit" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="openCloseDeleteRelativesConfirmation(new_relative.id)"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
              <!-- quando estiver editando... 
                mostrando div com os campos... -->
              <div class="grid grid-cols-4 gap-5 mt-5" v-else>
                <!-- EDITANDO -->
                <div>
                  <Multiselect
                    id="select-degree-kinship"
                    select-placeholder="Selecionar"
                    label-text="grau de parentesco"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountDegreeKinshipsNew(index)"
                    :value="new_relative.relationship_degree"
                    required
                    :dispatch="setDegreeKinshipNew"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-1 pt-5">
                  <AppRadioButton
                    :id="'responsible-' + index"
                    :values="[
                      {
                        name: 'responsible',
                        value: index,
                        description: 'Marcar como responsável',
                        checked: new_relative.responsible,
                      },
                    ]"
                    dispatch="People/setResponsibleNew"
                  />
                </div>
                <!-- <div class="col-span-3">
                  <Multiselect
                    id="select-person-kinship"
                    select-placeholder="Selecionar"
                    label-text="Pessoa"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPeopleRelativesNew(index)"
                    :value="new_relative.relationship_person"
                    required
                    :dispatch="setPersonKinshipNew"
                    class="mr-5"
                  />
                </div> -->
                <div class="w-64 mx-auto">
                  <AutocompleteNew
                    v-model="selectedPerson"
                    :options="peopleAll"
                    label-key="label"
                    value-key="id"
                    placeholder="Busca pessoas"
                    :index="index"
                    source="1"
                    @shouldSearch="searchPeople"
                    @select="onSelect"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-relative"
                    :value="new_relative.observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setRelativeObsNew"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditRelashionship(index, new_relative)"
                    >
                      <AppMaterialIcon icon-name="close" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="updateRelatesNew(new_relative)"
                    >
                      <AppMaterialIcon icon-name="save" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>
            <div class="col-span-2 text-purple pt-4">
              <Label
                text="Adicionar Relacionamentos"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>
            <div :key="index" v-for="(relative, index) in relationship">
              <div class="grid grid-cols-4 gap-5 mt-5">
                <div>
                  <Multiselect
                    id="select-degree-kinship"
                    select-placeholder="Selecionar"
                    label-text="grau de parentesco"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountDegreeKinships(index)"
                    :value="relative.relationship_degree"
                    required
                    :dispatch="setDegreeKinship"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-1 pt-5">
                  <AppRadioButton
                    :id="'responsible-' + index"
                    :values="[
                      {
                        name: 'responsible',
                        value: index,
                        description: 'Marcar como responsável',
                      },
                    ]"
                    dispatch="People/setResponsible"
                  />
                </div>
                <!-- <div class="col-span-3">
                  <Multiselect
                    id="select-person-kinship"
                    select-placeholder="Selecionar"
                    label-text="Pessoa"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPeopleRelatives(index)"
                    :value="relative.relationship_person"
                    required
                    :dispatch="setPersonKinship"
                    class="mr-5"
                  />
                </div> -->
                <div class="w-64 mx-auto">
                  <AutocompleteNew
                    v-model="selectedPerson"
                    :options="peopleAll"
                    label-key="label"
                    value-key="id"
                    placeholder="Busca pessoas"
                    :index="index"
                    source="2"
                    @shouldSearch="searchPeople"
                    @select="onSelect"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-relative"
                    :value="relationship[index].observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setRelativeObs"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="deleteRelative"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>
            <a href="javascript:void(0)" class="text-purple underline" @click="addRelative">
              <AppMaterialIcon icon-name="add_circle" icon-size="36" class="align-middle" />
              <BaseText
                text="Adicionar relacionamentos"
                type-text="custom"
                weight="medium"
                size="sm"
                class="align-middle mr-2"
              />
            </a>
          </div>
          <div v-if="person.id" class="w-full mt-5 col-span-2">
            <div class="col-span-2 text-purple pt-4" v-if="new_address && new_address.length > 0">
              <Label
                text="Editar Endereços"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>

            <div :key="'F' + index" v-for="(new_address, index) in new_address">
              <div class="grid grid-cols-6 gap-5 mt-5" v-if="!new_address.editAddress">
                <!-- SEM EDITAR -->
                <div class="col-span-2">
                  <AppTextField
                    show-label
                    label-text="Rua"
                    :text="new_address.street_name"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-2">
                  <AppTextField
                    show-label
                    label-text="Número"
                    :text="new_address.street_number"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-2">
                  <AppTextField
                    show-label
                    label-text="Complemento"
                    :text="new_address.address_complement"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-2">
                  <AppTextField
                    show-label
                    label-text="Cep"
                    :text="new_address.cep"
                    type-text="topic-details"
                  />
                </div>
                <div>
                  <AppTextField
                    show-label
                    label-text="Estado"
                    :text="new_address.state.name"
                    type-text="topic-details"
                  />
                </div>
                <div>
                  <AppTextField
                    show-label
                    label-text="CIdade"
                    :text="new_address.city.name"
                    type-text="topic-details"
                  />
                </div>
                <div>
                  <AppTextField
                    show-label
                    label-text="Bairro"
                    :text="new_address.neighborhood.name"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-5">
                  <AppTextField
                    show-label
                    label-text="Observação"
                    :text="new_address.observation"
                    type-text="topic-details"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditAddress(index, new_address)"
                    >
                      <AppMaterialIcon icon-name="edit" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="openCloseDeleteAddressConfirmation(new_address.id)"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-5 mt-5" v-else>
                <!-- EDITANDO -->
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="new_address-name"
                    :value="new_address.street_name"
                    show-label
                    input-placeholder="Informe o nome da rua"
                    label-text="Rua"
                    dispatch="People/setStreetNew"
                    :payload="{ index }"
                    v-if="new_address.street_name != ''"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="new_address-number"
                    :value="new_address.street_number"
                    show-label
                    input-placeholder="Informe o número da rua"
                    label-text="Número"
                    dispatch="People/setStreetNumberNew"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="new_address-complement"
                    :value="new_address.address_complement"
                    show-label
                    input-placeholder="Informe o complemento"
                    label-text="Complemento"
                    dispatch="People/setStreetCompNew"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="new_address-cep"
                    :value="new_address.cep"
                    show-label
                    input-placeholder="Informe o cep"
                    label-text="Cep"
                    dispatch="People/setStreetCepNew"
                    :payload="{ index }"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-state"
                    select-placeholder="Selecionar"
                    label-text="Estado"
                    :value="new_address.state"
                    close-on-select
                    show-label
                    required
                    :multiple-option="false"
                    :options="mountPeopleStatesNew(index)"
                    :dispatch="setPersonStateNew"
                    class="mr-5"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-city"
                    select-placeholder="Selecionar"
                    label-text="Cidade"
                    :value="new_address.city"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPeopleCitiesNew(index)"
                    required
                    :dispatch="setPersonCityNew"
                    class="mr-5"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-neighborhood"
                    select-placeholder="Selecionar"
                    label-text="Bairro"
                    :value="new_address.neighborhood"
                    close-on-select
                    show-label
                    required
                    :multiple-option="false"
                    :options="mountPeopleNeighNew(index)"
                    :dispatch="setPersonAddressNew"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-new_address"
                    :value="new_address.observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setAddressObsNew"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditAddress(index, new_relative)"
                    >
                      <AppMaterialIcon icon-name="close" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="updateAddressNew(new_address)"
                    >
                      <AppMaterialIcon icon-name="save" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>
            <div class="col-span-2 text-purple pt-4">
              <Label
                text="Adicionar Endereços"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>
            <div :key="'B' + index" v-for="(person_address, index) in address">
              <div class="grid grid-cols-6 gap-5 mt-5">
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="address-name"
                    :value="person_address.street_name"
                    show-label
                    input-placeholder="Informe o nome da rua"
                    label-text="Rua"
                    dispatch="People/setStreet"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="address-number"
                    :value="person_address.street_number"
                    show-label
                    input-placeholder="Informe o número da rua"
                    label-text="Número"
                    dispatch="People/setStreetNumber"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="address-complement"
                    :value="person_address.street_complement"
                    show-label
                    input-placeholder="Informe o complemento"
                    label-text="Complemento"
                    dispatch="People/setStreetComp"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="address-cep"
                    :value="person_address.cep"
                    show-label
                    input-placeholder="Informe o cep"
                    label-text="Cep"
                    dispatch="People/setStreetCep"
                    :payload="{ index }"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-state"
                    select-placeholder="Selecionar"
                    label-text="Estado"
                    :value="person_address.state"
                    close-on-select
                    show-label
                    required
                    :multiple-option="false"
                    :options="mountPeopleStates(index)"
                    :dispatch="setPersonState"
                    class="mr-5"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-city"
                    select-placeholder="Selecionar"
                    label-text="Cidade"
                    :value="person_address.city"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPeopleCities(index)"
                    required
                    :dispatch="setPersonCity"
                    class="mr-5"
                  />
                </div>
                <div>
                  <Multiselect
                    id="select-neighborhood"
                    select-placeholder="Selecionar"
                    label-text="Bairro"
                    :value="person_address.neighborhood"
                    close-on-select
                    show-label
                    required
                    :multiple-option="false"
                    :options="mountPeopleNeigh(index)"
                    :dispatch="setPersonAddress"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-address"
                    :value="person_address.observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setAddressObs"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 1"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="deleteAddress"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>

            <a href="javascript:void(0)" class="text-purple underline" @click="addAddress">
              <AppMaterialIcon icon-name="add_circle" icon-size="36" class="align-middle" />
              <BaseText
                text="Adicionar endereço"
                type-text="custom"
                weight="medium"
                size="sm"
                class="align-middle mr-2"
              />
            </a>
          </div>
          <div v-if="person.id" class="w-full mt-5 col-span-2">
            <div class="col-span-2 text-purple pt-4" v-if="new_contacts && new_contacts.length > 0">
              <Label
                text="Editar Contatos"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>

            <div :key="'D' + index" v-for="(new_contact, index) in new_contacts">
              <div class="grid grid-cols-4 gap-5 mt-5" v-if="!new_contact.editContact">
                <!-- SEM EDITAR -->
                <div>
                  <AppTextField
                    show-label
                    label-text="Tipo de contato"
                    :text="new_contact.contact_type.name"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-2">
                  <AppTextField
                    show-label
                    label-text="Contato"
                    :text="new_contact.contact"
                    type-text="topic-details"
                  />
                </div>
                <div class="col-span-5">
                  <AppTextField
                    show-label
                    label-text="Observação"
                    :text="new_contact.observation"
                    type-text="topic-details"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditContact(index, new_contact)"
                    >
                      <AppMaterialIcon icon-name="edit" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="openCloseDeleteContactsConfirmation(new_contact.id)"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
              <div class="grid grid-cols-4 gap-5 mt-5" v-else>
                <!-- EDITANDO -->
                <div>
                  <Multiselect
                    id="select-new-contact-type"
                    select-placeholder="Selecionar"
                    label-text="Tipo de Contato"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPersonContactsNew(index)"
                    :value="new_contact.contact_type"
                    required
                    :dispatch="setContactTypeNew"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="new_contact"
                    :value="new_contact.contact"
                    show-label
                    input-placeholder="Informe o contato"
                    label-text="Contato"
                    dispatch="People/setContactNew"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-contact"
                    :value="new_contact.observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setContactObsNew"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="setModeEditContact(index, new_contact)"
                    >
                      <AppMaterialIcon icon-name="close" icon-size="36" class="align-bottom" />
                    </a>
                    <a
                      v-if="index >= 0"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="updateContactsNew(new_contact)"
                    >
                      <AppMaterialIcon icon-name="save" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>
            <div class="col-span-2 text-purple pt-4">
              <Label
                text="Adicionar Contatos"
                :icon="null"
                :icon-type="null"
                type="text-2xl"
                weight="bold"
                normal
                mode="normal-case"
              />
            </div>
            <div :key="'C' + index" v-for="(contact, index) in contacts">
              <div class="grid grid-cols-4 gap-5 mt-5">
                <div>
                  <Multiselect
                    id="select-contact-type"
                    select-placeholder="Selecionar"
                    label-text="Tipo de Contato"
                    close-on-select
                    show-label
                    :multiple-option="false"
                    :options="mountPersonContacts(index)"
                    :value="contact.contact_type"
                    required
                    :dispatch="setContactType"
                    class="mr-5"
                  />
                </div>
                <div class="col-span-2">
                  <BaseInput
                    active
                    input-name="contact"
                    :value="contact.contact"
                    show-label
                    input-placeholder="Informe o contato"
                    label-text="Contato"
                    dispatch="People/setContact"
                    :payload="{ index }"
                  />
                </div>
                <div class="col-span-5">
                  <BaseInput
                    active
                    input-name="obs-contact"
                    :value="contact.observation"
                    show-label
                    input-placeholder="Obs"
                    label-text="Observção"
                    dispatch="People/setContactObs"
                    :payload="{ index }"
                  />
                  <div style="margin-left: 5px; margin-top: 15px !important">
                    <a
                      v-if="index >= 1"
                      href="javascript:void(0)"
                      class="text-ashes-dark hover:text-purple underline"
                      @click="deleteContact"
                    >
                      <AppMaterialIcon icon-name="delete" icon-size="36" class="align-bottom" />
                    </a>
                  </div>
                </div>

                <div class="col-span-6 mt-5">
                  <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
                </div>
              </div>
            </div>
            <a href="javascript:void(0)" class="text-purple underline" @click="addContact">
              <AppMaterialIcon icon-name="add_circle" icon-size="36" class="align-middle" />
              <BaseText
                text="Adicionar contato"
                type-text="custom"
                weight="medium"
                size="sm"
                class="align-middle mr-2"
              />
            </a>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="grid grid-cols-2 col-auto">
          <div class="justify-self-start">
            <AppButtonEmpty text="descartar" typeButton="danger" dispatch="People/closeModal" />
          </div>
          <div class="justify-self-end">
            <AppButtonEmpty v-if="person.id" text="Atualizar" typeButton="success" dispatch="People/update" />
            <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="People/save" />
          </div>
        </div>
      </template>
    </BaseModal>
    <ModalConfirmDeleteRelatives :open="modalConfirmDeleteRelativesNew" />
    <ModalConfirmDeleteAddress :open="modalConfirmDeleteAddressNew" />
    <ModalConfirmDeleteContacts :open="modalConfirmDeleteContactsNew" />
  </div>
</template>

<script>
import ModalConfirmDeleteRelatives from "./ModalConfirmDeleteRelatives.vue";
import AutocompleteNew from "../components/AutoCompleteNew.vue";
import ModalConfirmDeleteAddress from "./ModalConfirmDeleteAddress.vue";
import ModalConfirmDeleteContacts from "./ModalConfirmDeleteContacts.vue";
import BaseModal from "../components/BaseModal.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseText from "../components/BaseText.vue";
import AppMaterialIcon from "../components/AppMaterialIcon.vue";
import Label from "../components/Label.vue";
import AppTextField from "../components/AppTextField.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import AppRadioButton from "../components/AppRadioButton.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    AutocompleteNew,
    AppMaterialIcon,
    Label,
    ModalConfirmDeleteRelatives,
    ModalConfirmDeleteAddress,
    ModalConfirmDeleteContacts,
    BaseText,
    AppButtonIcon,
    AppButtonEmpty,
    AppRadioButton,
    Multiselect,
    AppTextField,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedPerson: null,
      peopleAll: [],
    };
  },

  created() {
    // this.$store.dispatch("Roles/loadRoles");
    this.$store.dispatch("AccessControl/getProfiles");
    this.$store.dispatch("Genders/loadGenders");
    this.$store.dispatch("RelationshipDegrees/loadRelationshipDegrees");
    this.$store.dispatch("CivilStatuses/loadCivilStatuses");
    this.$store.dispatch("Breeds/loadBreeds");
    this.$store.dispatch("SkinColors/loadSkinColors");
    this.$store.dispatch("Escholarities/loadScholarities");
    this.$store.dispatch("Ethnicities/loadEthnicities");
    this.$store.dispatch("GenderIdentidy/loadGendersIdentidy");
    this.$store.dispatch("SexualOrientations/loadSexualOrientations");
    this.$store.dispatch("People/loadStates");
    // this.$store.dispatch("People/loadPeopleAll");
    this.$store.dispatch("People/loadContactstypes");
    if (this.state) {
      this.$store.dispatch("People/loadCitiesByStateId", this.state.id);
    }
    if (this.citie) {
      this.$store.dispatch("People/loadNeighborhoods", this.citie.id);
    }
  },

  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      editRelashionship: (state) => state.People.editRelashionship,
      // peopleAll: (state) => state.People.peopleAll,
      person: (state) => state.People.person,
      states: (state) => state.People.states,
      state: (state) => state.People.state,
      cities: (state) => state.People.cities,
      citie: (state) => state.People.citie,
      neighborhoods: (state) => state.People.neighborhoods,
      neighborhood: (state) => state.People.neighborhood,
      Genders: (state) => state.Genders.list,
      gendersName: (state) => state.People.gender,
      relationship: (state) => state.People.relationship,
      new_relationship: (state) => state.People.new_relationship,
      address: (state) => state.People.address,
      new_address: (state) => state.People.new_address,
      contacts: (state) => state.People.contact,
      new_contacts: (state) => state.People.new_contact,
      contactsTypes: (state) => state.People.contactsTypes,
      relationshipDegrees: (state) => state.RelationshipDegrees.list,
      relationshipDegree: (state) => state.People.relalationship_degree,
      civilStatuses: (state) => state.CivilStatuses.list,
      civilStatus: (state) => state.People.civil_status,
      breeds: (state) => state.Breeds.list,
      breed: (state) => state.People.breed,
      skinColors: (state) => state.SkinColors.list,
      skinColor: (state) => state.People.skin_color,
      scholarities: (state) => state.Escholarities.list,
      scholaritie: (state) => state.People.escholarity,
      ethnicities: (state) => state.Ethnicities.list,
      ethnicitie: (state) => state.People.ethnicity,
      SexualOrientations: (state) => state.SexualOrientations.list,
      SexualOrientation: (state) => state.People.sexual_orientation,
      gendersIdentidy: (state) => state.GenderIdentidy.list,
      genderIdentidy: (state) => state.People.genderIdentidy,
      arrayProf: (state) => state.AccessControl.profArray,
      profiles: (state) => state.AccessControl.profiles,
      modalConfirmDeleteRelativesNew: (state) => state.People.modalConfirmDeleteRelativesNew,
      modalConfirmDeleteAddressNew: (state) => state.People.modalConfirmDeleteAddressNew,
      modalConfirmDeleteContactsNew: (state) => state.People.modalConfirmDeleteContactsNew,
    }),
  },

  methods: {
    ...mapActions({
      setRole: "People/setRole",
      setState: "People/setState",
      setCity: "People/setCity",
      setContactType: "People/setContactType",
      setContactTypeNew: "People/setContactTypeNew",
      setPersonState: "People/setPersonState",
      setPersonCity: "People/setPersonCity",
      setPersonNeigh: "People/setPersonNeigh",
      setPersonAddress: "People/setPersonAddress",
      setPersonStateNew: "People/setPersonStateNew",
      setPersonCityNew: "People/setPersonCityNew",
      setPersonNeighNew: "People/setPersonNeighNew",
      setPersonAddressNew: "People/setPersonAddressNew",
      setBreed: "People/setBreed",
      setSkinColor: "People/setSkinColor",
      setDegreeKinship: "People/setDegreeKinship",
      setDegreeKinshipNew: "People/setDegreeKinshipNew",
      setPersonKinship: "People/setPersonKinship",
      setPersonKinshipNew: "People/setPersonKinshipNew",
      setGender: "People/setGender",
      setScholaritie: "People/setScholaritie",
      setCivilStatus: "People/setCivilStatus",
      setEthnicitie: "People/setEthnicitie",
      setGenderIdentidy: "People/setGenderIdentidy",
      setSexualOrientation: "People/setsexualOrientation",
      getGenders: "Genders/loadGenders",
      getGendersIdentidy: "GenderIdentidy/loadGendersIdentidy",
      getSexualOrientations: "SexualOrientations/loadSexualOrientations",
    }),

    searchPeople(query) {
      const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
      if (authHeaders) {
        const headers = {
          "access-token": authHeaders["access-token"],
          client: authHeaders["client"],
          uid: authHeaders["uid"],
        };
        var myHeaders = new Headers(headers);
        var myInit = { method: "GET", headers: myHeaders, mode: "cors", cache: "default" };
        fetch(`http://localhost:3000/api/people?name=${query}&limit=10`, myInit)
          .then((response) => response.json())
          .then((r) => {
            // console.log("R", r);
            this.peopleAll = r.people;
            // console.log("R", this.peopleAll);
          });
      }
    },
    onSelect(selectedPerson) {
      console.log(selectedPerson);
      this.selectedPerson = selectedPerson.name;
      this.$store.dispatch("People/setPersonKinship", selectedPerson);
    },

    addRelative() {
      this.$store.dispatch("People/addRelative");
    },
    openCloseDeleteRelativesConfirmation(relatives_id) {
      this.$store.dispatch("People/openCloseDeleteRelativesConfirmation", relatives_id);
    },
    openCloseDeleteAddressConfirmation(address_id) {
      this.$store.dispatch("People/openCloseDeleteAddressConfirmation", address_id);
    },
    openCloseDeleteContactsConfirmation(contact_id) {
      this.$store.dispatch("People/openCloseDeleteContactsConfirmation", contact_id);
    },
    updateRelatesNew(payload) {
      console.log("updateRelatesNew(payload)", payload);
      this.$store.dispatch("People/updateRelatesNew", payload);
    },
    setModeEditRelashionship(index, relative) {
      console.log("ID ", index);
      console.log(" relative ", relative);
      const payload = { index: index, payload: relative };
      this.$store.dispatch("People/setModeEditRelashionship", payload);
    },
    setModeEditAddress(index, address) {
      console.log("ID ", index);
      console.log(" relative ", address);
      const payload = { index: index, payload: address };
      this.$store.dispatch("People/setModeEditAddress", payload);
    },
    setModeEditContact(index, contact) {
      console.log("ID ", index);
      console.log(" relative ", contact);
      const payload = { index: index, payload: contact };
      this.$store.dispatch("People/setModeEditContact", payload);
    },
    updateAddressNew(payload) {
      console.log("updateAddressNew(payload)", payload);
      this.$store.dispatch("People/updateAddressNew", payload);
    },
    updateContactsNew(payload) {
      console.log("updateContactsNew(payload)", payload);
      this.$store.dispatch("People/updateContactsNew", payload);
    },
    deleteRelative() {
      this.$store.dispatch("People/deleteRelative");
    },

    addAddress() {
      this.$store.dispatch("People/addAddress");
    },
    deleteAddress() {
      this.$store.dispatch("People/deleteAddress");
    },

    addContact() {
      this.$store.dispatch("People/addContact");
    },
    deleteContact() {
      this.$store.dispatch("People/deleteContact");
    },

    mountDegreeKinships(index) {
      //console.log("index", index);
      return this.relationshipDegrees.map((degreeKinship) => {
        if (degreeKinship) {
          return { index, ...degreeKinship };
        }
      });
    },
    mountPersonContacts(index) {
      //console.log("index", index);
      return this.contactsTypes.map((contact) => {
        if (contact) {
          return { index, ...contact };
        }
      });
    },
    // mountPeopleRelatives(index) {
    //   const relatives = this.peopleAll.filter((item) => {
    //     return item.id != this.person.id;
    //   });
    //   console.log("relatives", relatives);
    //   return relatives.map((person) => {
    //     if (person) {
    //       return { index, ...person };
    //     }
    //   });
    // },
    mountPeopleNeigh(index) {
      // console.log("this.neighborhoods", this.neighborhoods);
      return this.neighborhoods.map((neigh) => {
        if (neigh) {
          return { index, ...neigh };
        }
      });
    },
    mountPeopleStates(index) {
      //console.log("relatives", relatives);
      return this.states.map((state) => {
        if (state) {
          return { index, ...state };
        }
      });
    },
    mountPeopleCities(index) {
      //console.log("relatives", relatives);
      return this.cities.map((city) => {
        if (city) {
          return { index, ...city };
        }
      });
    },

    mountDegreeKinshipsNew(index) {
      //console.log("index", index);
      return this.relationshipDegrees.map((degreeKinship) => {
        if (degreeKinship) {
          return { index, ...degreeKinship };
        }
      });
    },
    mountPersonContactsNew(index) {
      //console.log("index", index);
      return this.contactsTypes.map((contact) => {
        if (contact) {
          return { index, ...contact };
        }
      });
    },
    // mountPeopleRelativesNew(index) {
    //   const relatives = this.people.filter((item) => {
    //     return item.id != this.person.id;
    //   });
    //   //console.log("relatives", relatives);
    //   return relatives.map((person) => {
    //     if (person) {
    //       return { index, ...person };
    //     }
    //   });
    // },
    mountPeopleNeighNew(index) {
      //console.log("relatives", relatives);
      return this.neighborhoods.map((neigh) => {
        if (neigh) {
          return { index, ...neigh };
        }
      });
    },
    mountPeopleStatesNew(index) {
      //console.log("relatives", relatives);
      return this.states.map((state) => {
        if (state) {
          return { index, ...state };
        }
      });
    },
    mountPeopleCitiesNew(index) {
      //console.log("relatives", relatives);
      return this.cities.map((city) => {
        if (city) {
          return { index, ...city };
        }
      });
    },
    // setModeEditRelashionship(relative) {
    //   //console.log("relatives", relatives);
    //   console.log(" TESTE TESTES ", relative);
    //   //this.$store.dispatch("People/updateRelatesNew", payload);
    // },
    // isSon(index) {
    //   if (this.relationship[index].degree_kinship != null) {
    //     let degree_kinship = this.relationship[index].degree_kinship.id;
    //     if (degree_kinship == "5" || degree_kinship == "6") {
    //       return false;
    //     }
    //   }
    //   return true;
    // },
  },
};
</script>
