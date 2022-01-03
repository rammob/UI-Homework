import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
    name: 'edit_form',
    components: {
        adminLayout
    },
    data() {
        return {
             form : {},
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
                url: '/user/'+id,
                method: 'GET',
            }).then(async (response) => {
                this.form = response.data;
            });
        },
        submit() {
            const self = this.form;
            if(!self.name){
                this.validation.invalid.name = 'Require Field Name';
            }
            if(!self.email){
                this.validation.invalid.email = 'Require Field Land Email';
            }
            const id = this.$route.query.id;
            const data = {
                "name": self.name,
                "email": self.email,
                "password": self.password,
                "phone": "+85512345221",
            };
            console.log(data)
            httpAxios({
                url: '/user/update_user',
                method: 'PUT',
                params : { id : id },
                data: data ,
              }).then(async (response) => {
                if(!this.form.name){
                    this.validation.invalid.name = 'Please type your Username.';
                  }else if(!this.form.email){
                    this.validation.invalid.email = 'Please type your Email.';
                  }else if(!this.form.password){
                    this.validation.invalid.password = 'Please type your Password.';
                  }else if(response.data == "Email: "+ this.email +" already exist"){
                    this.validation.invalid.email = response.data;
                  }else{
                    this.$router.back();
                  } 
              });
        },
    },
    mounted(){
        this.getData();
    } 
};

