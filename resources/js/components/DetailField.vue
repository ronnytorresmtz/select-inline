<template>
    <panel-item :field="field" />
</template>

<script>
import General from './mixins/general';

export default {

    mixins: [General],

    props: ['resource', 'resourceName', 'resourceId', 'field'],

    data() {
        return {
            datafield: this.field,
        };
    },

    mounted() {
        if (! this.field.displayUsingLabels) {
           this.field.value = this.setDisplayLabel(this.field.options, this.field.value);
        }
    }
}
</script>
