import guestLayout from '@/layouts/Guest';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Login',
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phone: null,
      validation: {
        invalid: {
  //        firstName: 'First name NOT OK!',
        },
        valid: {
  //        firstName: 'First name OK!',
        },
      }
    };
  },
  components: {
    guestLayout,
  },
  methods: {
    clearValidation: function(field) {
      this.validation.valid[field] = '';
      this.validation.invalid[field] = '';
      this.$forceUpdate();
    },
    register() {
      const self = this;
      const data = {
        "name": self.name,
        "email": self.email,
        "password": self.password,
        "phone": "+85512345221",
        "type" : 'Admin'
      };
      httpAxios({
        url: '/user/register',
        method: 'POST',
        data: data,
      }).then(async (response) => {
        if(!this.name){
          this.validation.invalid.name = 'Please type your Username.';
        }else if(!this.email){
          this.validation.invalid.email = 'Please type your Email.';
        }else if(!this.password){
          this.validation.invalid.password = 'Please type your Password.';
        }else if(response.data == "Email: "+ this.email +" already exist"){
          this.validation.invalid.email = response.data;
        }else{
          self.$router.push('/admin/login');
        }      
      });
    },
  },
};
