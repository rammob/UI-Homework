import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import inputText from '@/components/fields/input';
import selectComponent from '@/components/fields/select';
import moment from 'moment';

export default {
    name: 'create_form',
    components: {
        adminLayout,
        inputText,
        selectComponent
    },
    data() {
        return { form : {},
                recordType: ['-', 'Land', 'Building','Land and Building' ],
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
        submit() {
            const self = this.form;
            // if(!self.record_type || self.record_type =='-'){
            //     this.form.validation.invalid.record_type = 'Require Field Record type';
            // }
            // if(!self.type || self.type == '-'){
            //     this.form.validation.invalid.type = 'Require Field Property Type';
            // }
            if(!self.land_width){
                this.validation.invalid.land_width = 'Require Field Land Width';
            }
            if(!self.land_length){
                this.validation.invalid.land_length = 'Require Field Land Length';
            }
            if(!self.land_area){
                this.validation.invalid.land_area = 'Require Field Land Area';
            }
            const data = {
                "owner_id": 2,
                "street_no": self.street_no,
                "house_no": self.house_no,
                "address": self.address,
                "land_width": self.land_width,
                "land_length": self.land_length,
                "land_area": self.land_area,
                "description": self.description,
                "record_type": self.record_type,
                "type": self.type,
                "created_by": 2,
                "updated_by":  2,
                "created_at": moment(String(new Date().toLocaleDateString())).format(),
                "updated_at": moment(String(new Date().toLocaleDateString())).format(),
                "current_use": self.current_use,
                "case_status": self.case_status,
                "instructor_date": "2021-12-29T06:47:04.499Z",
                "due_date": "2021-12-29T06:47:04.499Z",
            };
            httpAxios({
                url: '/submit_case/create_submit_case',
                method: 'POST',
                data: data,
              }).then(async (response) => {
                  this.form = response.data;
                // if(!this.street_no){
                //     this.form.validation.invalid.street_no = 'Invalid Land Width';
                // if(response.data == 'Error: Attribute SubmitCaseModel.land_width is required'){
                //     this.form.validation.invalid.land_width = 'Invalid Land Width';

                // }else if(response.data == 'Error: Attribute SubmitCaseModel.land_length is required'){

                // }else if(response.data == 'Error: Attribute SubmitCaseModel.land_area is required'){

                // }else{

                // }
              });
        },
    }  
};

