<template>
  <tr>
    <th
      :key="headerColumn.key"
      v-for="headerColumn in headerColumns"
      class="text-xs uppercase text-left font-semibold align-middle"
    >
      {{ headerColumn.label }}
    </th>
  </tr>
</template>

<script>
export default {
  name: "BaseTableHeaderCell",

  props: {
    headerColumns: Array,
  },
};
</script>
