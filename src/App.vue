<template>
    <div>
        {{ $tc('message', 2) }}
    </div>
    <div>
        {{ message }}
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    computed: {
        message() {
            return this.$tc('message', 2)
        }
    }
})
</script>
