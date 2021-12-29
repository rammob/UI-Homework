export default {
  name: 'Fields',
  props:['value','label','class','placeholder','type','validate'],
  data(){
    return {
            validation: {
              invalid: {
              },
              valid: {
              },
            }
          }   
  },
  methods: {
    clearValidation: function(field) {
        console.log(this.value)
        this.validation.valid[field] = '';
        this.validation.invalid[field] = '';
        this.$forceUpdate();
    },
    // checkValidation: function(field){
    //   if(response.data == 'Error: Attribute SubmitCaseModel.land_width is required'){
    //     this.form.validation.invalid.land_width = 'Invalid Land Width';
    //   }
    // }
  },
  mounted() {
    console.log(this)
    // this.checkValidation();
  }
};