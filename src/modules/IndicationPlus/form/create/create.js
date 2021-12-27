import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import moment from 'moment';

export default {
    name: 'create_form',
    components: {
        adminLayout,
    },
    data() {
        return { form : {
                    street_no: "",
                    house_no: "",
                    address: "",
                    land_width: null,
                    land_length: null,
                    land_area: null,
                    description: "",
                    record_type: "-",
                    type: "-",
                    current_use: "-",
                    case_status: "-",
                    owner_id: 2,
                    created_by: 2,
                    updated_by: 2,
                    instructor_date: new Date().toLocaleDateString(),
                    due_date: new Date().toLocaleDateString(),
                    indication_date: new Date().toLocaleDateString()
                    
                }
            };
    },
    methods: {
        submit() {
            const self = this.form;
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
                "instructor_date": moment(String(self.instructor_date)).format(),
                "due_date": moment(String(self.due_date)).format(),
                "indication_date": moment(String(self.indication_date)).format()
            };
            httpAxios({
                url: '/submit_case/create_submit_case',
                method: 'POST',
                data: data,
              }).then(async (response) => {
                return response;
              });
        },
    }  
};

