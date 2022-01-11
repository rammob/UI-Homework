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
                recordTypes: ['-', 'Land', 'Building','Land and Building' ],
                propertyTypes : ['-', " Vacant Land","Agricultural Land"],
                currentUses : ['-',"Mixed Use Building","Guest Houses","Entertainment Building","Parking Facilities"],
                caseStatus : ['-', 'New', 'In Progress', 'Pending', 'Competed'],
                validation: {
                    invalid: {},
                    valid: {}
                },
                files: '',
                url : null,
                disabled_fields: false
            };
    },
    watch: {
        form: {
            handler(val) {
                if (val.land_width && val.land_length) {
                    this.form.land_area = val.land_width * val.land_length;
                }
                if(val.record_type == 'Land') {
                    this.disabled_fields = true;
                } else {
                    this.disabled_fields = false;
                }
            },
            deep: true
        }
    },
    methods: {
        previewFiles() {
            const file = this.$refs.myFiles.files[0];
            const reader = new FileReader();
            let rawImg;
            reader.onloadend = () => {
              rawImg = reader.result;
              this.files = rawImg;
            }
            reader.readAsDataURL(file);
            this.url = URL.createObjectURL(file);
         },
        clearValidation: function() {
            // this.validation.valid[field] = '';
            // this.validation.invalid[field] = '';
            // this.$forceUpdate();
        },
        submit() {
            const self = this.form;
            if(!self.record_type || self.record_type =='-'){
                this.validation.invalid.record_type = 'Require Field Record type';
            }
            if(!self.type || self.type == '-'){
                this.validation.invalid.type = 'Require Field Property Type';
            }
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
                "street_no": self.street_no ?? '',
                "house_no": self.house_no ?? '',
                "address": self.address ?? '',
                "land_width": self.land_width ?? '',
                "land_length": self.land_length ?? '',
                "land_area": self.land_area ?? '',
                "description": self.description ?? '',
                "record_type": self.record_type ?? '',
                "type": self.type ?? '',
                "created_by": 2,
                "updated_by":  2,
                "front_side_image" : this.files,
                "created_at": moment(String(new Date().toLocaleDateString())).format(),
                "updated_at": moment(String(new Date().toLocaleDateString())).format(),
                "current_use": self.current_use ?? '',
                "case_status": self.case_status ?? '',
                "instructor_date": "2021-12-29T06:47:04.499Z",
                "due_date": "2021-12-29T06:47:04.499Z",
            };
            console.log(data);
            httpAxios({
                url: '/submit_case/create_submit_case',
                method: 'POST',
                data: data,
              }).then(async (response) => {
                  this.form = response.data;
              });
        },
    },
};

