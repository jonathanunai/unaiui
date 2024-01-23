<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column.field">{{ column.label }}</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-for="column in columns" :key="column.field">{{ item[column.field] }}</td>
                    <td class="actions">
                        <Icon @click="viewItem(item[idField])" name="material-symbols:eyeglasses" color="#212121" />
                        <Icon @click="editItem(item[idField])" name="material-symbols:edit" color="#212121" />
                        <Icon @click="deleteItem(item[idField])" name="material-symbols:delete" color="red" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['deleteItem', 'editItem', 'viewItem'])

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    },
    idField: {
        type: String,
        default: 'id',
        required: false
    }
})


function deleteItem(itemId) {
    emit('deleteItem', itemId)
}

function editItem(itemId) {
    emit('editItem', itemId)
}

function viewItem(itemId) {
    emit('viewItem', itemId)
}

</script>
<style lang="scss" scoped>
td {
    padding: 0.4rem;
    border-bottom: 1px solid #ccc;
    svg {
        cursor: pointer;
    }
    &.actions {
        display: contents;
    }
}
</style>