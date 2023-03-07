<template>
  <section class="font-system">
    <table class="table-auto w-full text-ashes-dark border-collapse">
      <thead>
        <BaseTableHeaderCell :header-columns="header" />
      </thead>
      <tbody>
        <BaseTableDataCell :data-columns="body" :header-columns="header" />
      </tbody>
    </table>
    <BasePagination :total="total" :total-per-page="totalPerPage" :dispatch="dispatch" />
  </section>
</template>

<script>
import BaseTableHeaderCell from "./BaseTableHeaderCell.vue";
import BaseTableDataCell from "./BaseTableDataCell.vue";
import BasePagination from "./BasePagination.vue";

export default {
  name: "BaseTable",

  props: {
    header: {
      type: Array,
    },
    body: {
      type: Array,
    },
    total: {
      type: Number,
    },
    totalPerPage: {
      type: Number,
      default: 4,
    },
    dispatch: {
      type: String,
    },
  },

  components: {
    BaseTableHeaderCell,
    BaseTableDataCell,
    BasePagination,
  },
};
</script>
