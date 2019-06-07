<template>
     <loading-view :loading="loading">
        <div class="flex items-center mx-2" :style = "field.maxWidth">
            <select-control
                :id="field.attribute"
                :dusk="field.attribute"
                v-model="value"
                class="w-full form-control form-select"
                :class="errorClasses"
                :options="field.options"
                :disabled="isReadonly"
                @change.prevent="handleChange(value)"
                @keydown.esc.prevent="onKeyDownEscape()">

                <option value="" selected >{{ __('Choose an option') }}</option>
            </select-control>
            
            <button v-show="showSpinButton"
                data-testid="action-confirm"
                dusk="run-action-button"
                :disabled="btnDisabled"
                class="btn btn-default btn-primary flex items-center justify-center ml-1 px-3"
                :title="__('Run Save Action')"
            >
                <font-awesome-icon :icon="['fas', 'spinner']" spin color="white" />
            </button>

        </div>
    </loading-view>
</template>

<script>
import General from './mixins/general';
import Requests from './mixins/requests';

export default {

    mixins: [General, Requests],

    props: ['resourceName', 'field'],

    data() {
        return {
            'showSpinButton': false,
        }
    },

    created() {
        this.loading = false;
        this.setInitialValue();
    },

    mounted() {
        /*
        * Set options with values insted of labels if display using labels
        */
        if (this.field.displayUsingLabels) {
            this.setDisplayLabelsAsValues(this.field.options);
         }
    },

    computed: {
            /*
            * Get resource id value from parent.
            */
            resourceId() {
                return this.$parent.resource.id.value;
            },
        },

    methods: {

         /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
        * Handle the select value when it change.
        */
        handleChange(value) {
            this.value = value
            if (value) {
                this.setButtonStatus()
                this.updateFieldStatus(value);
            }
            
        },

        /**
        * Set if the Spin Button should be shown or not.
        */
        setButtonStatus(value) {
            this.showSpinButton = (this.field.value === value || value === '') ? false : true;
        },

        /**
        * Update the resources id  with the new value.
        */
        updateFieldStatus(value) {
            this.updateResourceId(value);
        }
    },
}
</script>
