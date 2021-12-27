import guestLayout from '@/layouts/Guest';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
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
      login() {
        const self = this;
        const data = new FormData();
        data.append('username', self.username);
        data.append('password', self.password);
        
        httpAxios({
          url: '/user/login',
          method: 'POST',
          data: data,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(async (response) => {
          if(!this.username){
            this.validation.invalid.username = 'Please type your Email.';
          }else if(response.data == 'Invlaid Username'){
            this.validation.invalid.username = 'Invalid Email';
          }else if(!this.password){
            this.validation.invalid.password = 'Please type your password.';
          }else if(response.data == 'Invaid Password'){
            this.validation.invalid.password = 'Invalid Password';
          }else{
            self.$store.commit('LOGGED_USER', response);
            self.$router.push('/admin/dashboard');
          }
      });
    }
  },
};
