import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import moment from 'moment';
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
                response.data.instructor_date = moment(String(this.form.instructor_date)).format("MMM Do YY");
                response.data.due_date = moment(String(this.form.due_date)).format("MMM Do YY");
            });
        },
        submit() {
            const self = this.model;
            const id = this.$route.query.id;
            console.log(self.case_status);
            if(!self.case_status || self.case_status == '-' || !self.current_value_of_improvement){
                this.validation.invalid.case_status = 'Require Field Case Status';
                this.validation.invalid.current_value_of_improvement = 'Require Field Final Price';
            }else{
                httpAxios({
                    url: 'submit_case/start_manually?id='+id,
                    method: 'PUT',
                    data : {
                            case_status:self.case_status, 
                            current_value_of_improvement:self.current_value_of_improvement
                            }
                }).then(async (response) => {
                    this.model = response.data;
                    window.location.reload()
                });
            }
        },
        downloadReport() {

        }
    },
    mounted(){
        this.getData();
    }
};

