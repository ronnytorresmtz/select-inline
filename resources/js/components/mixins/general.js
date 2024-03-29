export default {
    methods: {

        /*
        * Set options with values insted of labels if display using labels 
        */
        setDisplayLabelsAsValues(options) {
            Object.keys(options).forEach((key) => {
                this.field.options[key].label = options[key].value;
            });
        },

        /*
        * Set value insted of label if display using labels 
        */

       setDisplayLabel(options, value) {
            const idx = Object.keys(options).find((key) => {
                console.log(options[key].value);
                return options[key].value == value 
            });
            return options[idx].label;
        },

    }
}