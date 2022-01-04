import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
    name: 'create_form',
    components: {
        adminLayout,
    },
    data() {
        return {
                form:{},
                model:{},
                validation: {
                    invalid: {},
                    valid: {}
                }
            };
    },
    methods: {
        clearValidation: function() {
            // this.validation.valid[field] = '';
            // this.validation.invalid[field] = '';
            // this.$forceUpdate();
        },
        getData(){
            const id = this.$route.query.id;
            httpAxios({
                url: '/submit_case/'+id,
                method: 'GET',
            }).then(async (response) => {
                this.form = response.data;
            });
        },
        submit() {
            const self = this.model;
            const id = this.$route.query.id;
            console.log(self)
            if(!self.case_status || !self.case_status == '-'){
                this.validation.invalid.case_status = 'Require Field Case Status';
            }
            if(!self.current_value_of_improvement){
                this.validation.invalid.current_value_of_improvement = 'Require Field Final Price';
            }
            httpAxios({
                url: 'submit_case/start_manually?id='+id,
                method: 'PUT',
                data : {
                        case_status:self.case_status, 
                        current_value_of_improvement:self.current_value_of_improvement
                        }
            }).then(async (response) => {
                this.model = response.data;
                if(response.data){
                    window.location.reload()
                }
            });
        }
    },
    mounted(){
        this.getData();
    }
};

