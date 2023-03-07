<template>
  <nav id="sidebar" :class="sidebar">
    <slot>
      <img src="../assets/images/sigimlogo.png" class="pl-8 pt-8 pb-5 pr-8" alt="" />
    </slot>
    <BaseStaggeredFade id="menus" :class="menusClass" :duration="50" tag="ul">
      <div v-for="(menu, index) in menus" :key="menu.id">
        <div :key="menu.id" :data-index="index" :id="menu.id" v-show="checkMenu(menu.name)">
          <li :class="menuClass" v-if="menu.show">
            <a
              :id="menu.id + '-button'"
              @click.prevent="toggleSubmenu(menu.id)"
              :class="button(menu.id)"
              href="/#/"
            >
              <AppMaterialIcon
                style="margin-left: 15px"
                :iconName="menu.iconName"
                :iconType="menu.iconType"
                iconSize="18"
              />
              <Label :text="menu.name" weight="semibold" class="mx-3" />
              <Label icon="angle-down" iconType="solid" :class="[angle, toggleAnimate(menu.id)]" />
            </a>
            <ul :id="menu.id + '-submenus'" :class="submenus(menu.id)">
              <li
                :key="submenu.id"
                v-for="submenu in menu.submenus"
                :id="submenu.id"
                v-show="checkSubMenu(menu.name, submenu.name)"
              >
                <router-link :class="linkSubmenu" :to="submenu.url">
                  <Label
                    :text="submenu.name"
                    icon="angle-right"
                    iconType="solid"
                    weight="semibold"
                    class="mx-5"
                  />
                </router-link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </BaseStaggeredFade>
  </nav>
</template>

<script>
import AppMaterialIcon from "./AppMaterialIcon";
import { mapState, mapActions } from "vuex";
import BaseStaggeredFade from "./BaseStaggeredFade.vue";
import Label from "./Label.vue";

export default {
  components: {
    Label,
    AppMaterialIcon,
    BaseStaggeredFade,
  },

  data() {
    return {
      menusObj: {},
      arrMenus: [],
      arrSubMenus: [],
      permit: false,
      checMenuObj: [],
      menus: [
        {
          id: "menu-1",
          name: "Home",
          show: false,
          active: false,
          iconName: "account_circle",
          iconType: "outlined",
          url: "/home",
          submenus: null,
        },
        {
          id: "menu-2",
          name: "Deshboard",
          show: false,
          active: false,
          iconName: "account_circle",
          iconType: "outlined",
          url: "/estudantes",
          submenus: null,
        },
        {
          id: "menu-3",
          name: "Cadastros",
          show: true,
          active: false,
          iconName: "person",
          iconType: "outlined",
          url: null,
          submenus: [
            { id: "menu-1-submenu-1", name: "Pessoas", url: "/people" },

            {
              id: "menu-1-submenu-3",
              name: "Tipos de Crime",
              url: "/crime_types",
            },
          ],
        },
        {
          id: "menu-14",
          name: "Controle de acesso",
          show: true,
          active: false,
          iconName: "admin_panel_settings",
          iconType: "outlined",
          roles: ["Administrador"],
          url: null,
          // submenus: [{ id: "menu-1-submenu-1", name: "Lista", url: "/usuarios" }],
          submenus: [
            { id: "menu-1-submenu-1", name: "Usuários", url: "/users" },
            {
              id: "menu-1-submenu-2",
              name: "Perfis",
              url: "/profiles",
            },
          ],
        },
      ],
      openChangeCity: false,
    };
  },

  methods: {
    // ...mapActions({ getmenus: "setUserMenus" }),
    ...mapActions({
      setUserMenus: "AccessControl/setUserMenus",
      setUserPermissions: "AccessControl/setUserPermissions",
      canAcces: "AccessControl/canAcces",
    }),
    // cityeAcces() {
    //   this.canAcces("city_index").then((resp) => {
    //     // console.log("permit city_index", resp);
    //     this.permit = resp;
    //   });
    // },
    checkMenu(menuName) {
      // console.log("menuname", menuName);
      let checkMenu = true;
      // console.log("menusObj", this.checMenuObj);
      this.checMenuObj.forEach((element) => {
        if (element.description === menuName) {
          if (element.ability_actions.length > 0 && this.arrMenus.includes(menuName)) {
            checkMenu = true;
          }
        }
      });
      return checkMenu;
    },

    checkSubMenu(menuName, subMenuName) {
      // console.log("Sub", this.arrSubMenus);
      // console.log(menuName);
      // console.log(subMenuName);
      let find = true;
      this.arrSubMenus.find((item) => {
        if (item.name === menuName) {
          if (JSON.stringify(item).includes(subMenuName)) {
            // console.log("item", JSON.stringify(item));
            find = true;
          }
          // else {
          //   // this.menu.show = false;
          //   console.log("item", JSON.stringify(item));
          // }
        }
      });
      // console.log("find", find);
      return find;
    },

    permitChangeCity() {
      // console.log("change city", this.permit);
      return this.permit;
    },
    getRole() {
      const role = this.$store.state.Session.role;
      // console.log("SideBarRole", role);
      return role;
    },
    checkRoles(arr) {
      // console.log("arr", arr);
      const role = this.$store.state.Session.role;
      return arr.includes(role);
    },
    buttonIsActive(id) {
      let menu = this.menus.find((menu) => menu.id === id);
      return menu.active;
    },
    toggleSubmenu(id) {
      if (id != this.menusObj.id && this.menusObj.open) {
        this.menusObj.open = false;
      }

      this.menusObj = {
        id: id,
        open: !this.menusObj.open,
      };

      this.menus.forEach((menu) => (menu.active = false));
      let menu = this.menus.find((menu) => menu.id === id);
      menu.active = true;
    },
    buttonIsOpen(id) {
      let open = null;

      if (this.menusObj.id && this.menusObj.id === id) {
        open = this.menusObj.open;
      }

      return open;
    },
    toggleAnimate(id) {
      let open = this.buttonIsOpen(id);
      let animate = {};

      if (open != null) {
        animate = {
          "animate-spinningUp": open,
          "animate-spinningDown": !open,
        };
      }
      return animate;
    },
    button(id) {
      let open = this.buttonIsOpen(id);
      let active = this.buttonIsActive(id);

      return {
        relative: true,
        flex: true,
        "items-center": true,
        "no-underline": true,
        "h-12": true,
        "mx-5": true,
        "rounded-full": true,
        "z-10": open,
        "text-purple-classic": active,
        "group-hover:relative": true,
        "group-hover:z-10": true,
      };
    },
    submenus(id) {
      let open = this.buttonIsOpen(id);

      let css = {
        hidden: !open,
        relative: true,
        "z-0": true,
      };

      let animate = {
        "animate-growDown": open,
        "origin-top-center": true,
      };

      let margin = {
        "-mt-5": true,
        "ml-5": true,
        "mb-2": true,
        "mr-5": true,
      };

      let padding = {
        "pt-5": true,
        "pl-0": true,
        "pb-0": true,
        "pr-0": true,
      };

      css = Object.assign(css, margin);
      css = Object.assign(css, padding);
      css = Object.assign(css, animate);

      return css;
    },
    changeCity() {
      this.$store.dispatch("City/setCity", null);
    },
  },

  computed: {
    ...mapState({
      city: (state) => state.City.city,
      cities: (state) => state.City.cities,
    }),
    sidebar() {
      return {
        fixed: true,
        "inset-0": true,
        "h-full": true,
        "w-72": true,
        "font-system": true,
        "bg-purple": true,
      };
    },
    menusClass() {
      return {
        "p-0": true,
      };
    },
    menuClass() {
      return {
        "py-1": true,
        "px-2": true,
        "m-0": true,
        "text-purple-classic": true,
        group: true,
      };
    },
    submenuClass() {
      return {
        "mb-0": true,
      };
    },
    linkSubmenu() {
      return {
        flex: true,
        "items-center": true,
        "no-underline": true,
        "h-12": true,
        "mx-3": true,
        "text-white": true,
        "rounded-full": true,
        "hover:text-white": true,
        "hover:underline": true,
      };
    },
    angle() {
      return {
        absolute: true,
        "right-4": true,
      };
    },
    bottonMenu() {
      return {
        absolute: true,
        "bottom-0": true,
        flex: true,
        "items-center": true,
        "no-underline": true,
        "h-12": true,
        "w-64": true,
        border: true,
        "cursor-pointer": true,
        "text-white": true,
        "hover:relative": true,
      };
    },
  },
  created() {
    //this.cityeAcces();
    this.setUserMenus().then((response) => {
      // console.log("Menus", response);
      this.checMenuObj = response.data;
      response.data.forEach((element) => {
        this.arrMenus.push(element.description);
        element.ability_actions.forEach((item) => {
          this.arrSubMenus.push({ name: element.description, action: item.description });
        });
      });
    });
    // this.cityeAcces();
    // this.setUserPermissions().then((response) => {
    //   let perm = response.data;
    //   console.log("Data: ", perm);
    // });
  },
};
</script>

<style>
.dropdown_item-1 {
  transform-origin: top center;
  animation: scaleZ 600ms 60ms ease-in-out forwards;
}

.dropdown_item-2 {
  transform-origin: top center;
  animation: scaleZ 600ms 120ms ease-in-out forwards;
}
</style>
