<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.field">
            {{ column.label }}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="column in columns" :key="column.field">
            <Icon
              v-if="column.type === 'boolean'"
              :name="
                item[column.field]
                  ? 'material-symbols:check-circle'
                  : 'material-symbols:cancel-outline-rounded'
              "
              :class="item[column.field] ? 'exists' : 'not-exists'"
            />
            <span v-else>{{ item[column.field] }}</span>
          </td>
          <td class="actions">
            <Icon
              @click="viewItem(item[idField])"
              name="material-symbols:eyeglasses"
              color="#212121"
            />
            <Icon
              @click="editItem(item[idField])"
              name="material-symbols:edit"
              color="#212121"
            />
            <Icon
              @click="deleteItem(item[idField])"
              name="material-symbols:delete"
              color="red"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const emit = defineEmits(["deleteItem", "editItem", "viewItem"]);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  idField: {
    type: String,
    default: "id",
    required: false,
  },
});

function deleteItem(itemId) {
  emit("deleteItem", itemId);
}

function editItem(itemId) {
  emit("editItem", itemId);
}

function viewItem(itemId) {
  emit("viewItem", itemId);
}
</script>
<style lang="scss" scoped>
tr {
  position: relative;
}
td {
  padding: 0.4rem;
  border-bottom: 1px solid #ccc;
  svg {
    font-size: 1.2rem;
  }
  &.actions {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    position: absolute;
    svg {
      margin: 0 0.1rem;
      cursor: pointer;
    }
  }
}
svg.exists {
  color: green;
}
svg.not-exists {
  color: rgba(0, 0, 0, 0.25);
}
</style>
