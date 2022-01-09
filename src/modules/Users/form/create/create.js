import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Login',
  data() {
    return {
        form : {
              name: null,
              email: null,
              password: null,
              phone: null,
              filename: null
            },
      validation: {
        invalid: {},
        valid: {},
      }
    };
  },
  components: {
    adminLayout,
  },
  methods: {
    clearValidation: function() {
    //   this.validation.valid[field] = '';
    //   this.validation.invalid[field] = '';
    //   this.$forceUpdate();
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    submit() {
      const self = this.form;
      if(!self.name){
        this.validation.invalid.name = 'Require Field Name';
      }
      if(!self.email){
          this.validation.invalid.email = 'Require Field Email';
      }
      if(!self.password){
        this.validation.invalid.password = 'Require Field Password';
      }

      const data = {
        "name": self.name,
        "email": self.email,
        "password": self.password,
        "filename": self.filename,
        "phone": "+85512345221",
      };
      const files = e.e.target.files;
      console.log(data)
      // httpAxios({
      //   url: '/user/register',
      //   method: 'POST',
      //   data: data,
      // }).then(async (response) => {
      //   if(!this.form.name){
      //     this.validation.invalid.name = 'Please type your Username.';
      //   }else if(!this.form.email){
      //     this.validation.invalid.email = 'Please type your Email.';
      //   }else if(!this.form.password){
      //     this.validation.invalid.password = 'Please type your Password.';
      //   }else if(response.data == "Email: "+ this.email +" already exist"){
      //     this.validation.invalid.email = response.data;
      //   }else{
      //     self.$router.go();
      //   }      
      // });
    },
  },
};
