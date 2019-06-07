export default {
    methods: {

        updateResourceId(value) {

            let formData = new FormData();

            formData.append(this.field.attribute, value);
            formData.append('_method', 'PUT');
            
            return Nova.request().post(`/nova-api/${this.resourceName}/${this.resourceId}`, formData)
                .then(() => {
                    const option = this.getOptionLabel(this.field.options, value);
                    this.$toasted.show(`${this.field.name} updated to "${option}"`, { type: 'success' });
                }, (response) => {
                    this.$toasted.show(response, { type: 'error' });
                    console.log(response);
                })
                .finally(() => {
                    this.showSpinButton = false;
                });

        },
        
        getOptionLabel(options, value) {
            const idx = Object.keys(options).find((key) => {
                return options[key].value == value;
            });
            return options[idx].label
        }
    }
}