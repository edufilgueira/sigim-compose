<template>
  <div :class="paginationTableCss">
    <div @click="goTo(1)" :class="controlFirstCss">
      <Label text="" icon="angle-double-left" />
    </div>
    <div @click="previous()" :class="controlsCss" class="previous">
      <Label text="" icon="angle-left" />
    </div>
    <div :class="controlsCss" class="numbers-page">
      <div :key="i" v-for="i in totalPage()" @click="goTo(i)" :class="numberPageClass(i)">
        {{ i }}
      </div>
    </div>
    <div @click="next()" :class="controlsCss" class="next">
      <Label text="" icon="angle-right" />
    </div>
    <div @click="goTo(totalPage())" :class="controlsCss" class="last">
      <Label text="" icon="angle-double-right" />
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    totalPerPage: {
      type: Number,
    },
    dispatch: {
      type: String,
    },
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  components: {
    Label,
  },

  methods: {
    next() {
      if (this.currentPage < this.totalPage()) {
        this.currentPage++;
      }
      this.sendDatasForFather();
      return this.currentPage;
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      this.sendDatasForFather();
      return this.currentPage;
    },
    goTo(page) {
      this.currentPage = page;
      if (page < 1) {
        this.currentPage = 1;
      }

      if (page > this.totalPage()) {
        this.currentPage = this.totalPage();
      }

      this.sendDatasForFather();
      return this.currentPage;
    },
    totalPage() {
      return Math.ceil(this.total / this.totalPerPage);
    },
    numberPageClass(page) {
      let css = {
        "hover:text-ashes-dark": true,
        "cursor-pointer": true,
        flex: true,
        "justify-center": true,
        "items-center": true,
        "h-8": true,
        "w-8": true,
      };

      let active = {
        "text-ashes-dark": page == this.currentPage,
        "border-ashes-dark": page == this.currentPage,
        "border-solid border-2": page == this.currentPage,
        "rounded-full": page == this.currentPage,
      };

      return Object.assign(css, active);
    },
    sendDatasForFather() {
      let params = {};

      let offset = this.currentPage * this.totalPerPage - this.totalPerPage;
      params.offset = offset;
      params.currentPage = this.currentPage;
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, params);
      }
    },
  },

  computed: {
    paginationTableCss() {
      let css = {
        "pagination-table": true,
        "my-5": true,
        "text-base": true,
        "text-ashes-hover": true,
      };

      return Object.assign(css, this.centralize);
    },
    controlFirstCss() {
      let css = { first: true, "cursor-pointer": true };
      return Object.assign(css, this.centralize);
    },
    controlsCss() {
      let css = { "cursor-pointer": true, "ml-5": true };
      return Object.assign(css, this.centralize);
    },
    centralize() {
      return {
        flex: true,
        "justify-center": true,
        "items-center": true,
      };
    },
  },
};
</script>
