import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import inputText from '@/components/fields/input';
import moment from 'moment';
export default {
    name: 'edit_form',
    components: {
        adminLayout,
        inputText
    },
    data() {
        return {
             form : {},
             recordTypes: ['-', 'Land', 'Building','Land and Building' ],
             propertyTypes : ['-', " Vacant Land","Agricultural Land"],
             currentUses : ['-',"Mixed Use Building","Guest Houses","Entertainment Building","Parking Facilities"],
             caseStatus : ['-', 'New', 'In Progress', 'Pending', 'Competed'],
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
            const self = this.form;
            if(!self.land_width){
                this.validation.invalid.land_width = 'Require Field Land Width';
            }
            if(!self.land_length){
                this.validation.invalid.land_length = 'Require Field Land Length';
            }
            if(!self.land_area){
                this.validation.invalid.land_area = 'Require Field Land Area';
            }
            const id = this.$route.query.id;
            const data = {
                "owner_id": 2,
                "street_no": self.street_no,
                "house_no": self.house_no,
                "address": self.address,
                "land_width": self.land_width,
                "land_length": self.land_length,
                "land_area": self.land_area,
                "building_width": self.building_width,
                "building_length": self.building_length,
                "building_area": self.building_area,
                "building_floor": self.building_floor,
                "building_story": self.building_story,
                "description": self.description,
                "record_type": self.record_type,
                "type": self.type,
                "created_by": 2,
                "updated_by":  2,
                "created_at": moment(String(new Date().toLocaleDateString())).format(),
                "updated_at": moment(String(new Date().toLocaleDateString())).format(),
                "current_use": self.current_use,
                "case_status": self.case_status,
                "instructor_date": moment(String(self.instructor_date)).format(),
                "due_date": moment(String(self.due_date)).format(),
                "indication_date": moment(String(self.instructor_date)).format()
            };
            httpAxios({
                url: '/submit_case/update_submit_case',
                method: 'PUT',
                params : { id : id },
                data: data ,
              }).then(async (response) => {
                if(response.data){
                    this.$router.back();
                } 
              });
        },
    },
    mounted(){
        this.getData();
    } 
};

