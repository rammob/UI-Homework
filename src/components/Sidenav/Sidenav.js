import { appConfig } from '@/config/app.js';
import httpAxios from '@/utils/http-axios';
import store from '@/store';


export default {
  name: 'Sidenav',
  data() {
    return {
      appName: appConfig.APP_NAME,
      myProfile:[]
    };
  },
  methods: {
    user(){
      const id = store.getters.getLoggedUser.data.user_id;
      httpAxios({
          url: '/user/'+id,
          method: 'GET',
      }).then(async (response) => {
          this.myProfile = response.data;
      });
    },
    changeSidenav(){
      if(this.$route.name == 'admin.dashboard'){
        const sidenav = document.getElementById("dashboard");
        sidenav.classList.add('active');
      }else if(
       this.$route.name  == 'admin.indication-plus' ||
       this.$route.name == 'admin.indication-plus.edit' || 
       this.$route.name == 'admin.indication-plus.show' ||
       this.$route.name == 'admin.indication-plus.download'){
        const sidenav = document.getElementById("case");
        sidenav.classList.add('active');
      }else if(this.$route.name == 'admin.indication-plus.create'){
        const sidenav = document.getElementById("case-create");
        sidenav.classList.add('active');
      }else if(
      this.$route.name == 'admin.users' ||
      this.$route.name == 'admin.user.edit' || 
      this.$route.name == 'admin.user.show'){
        const sidenav = document.getElementById("user");
        sidenav.classList.add('active');
      }else if(this.$route.name == 'admin.user.create'){
        const sidenav = document.getElementById("user-create");
        sidenav.classList.add('active');
      }
    },
    logout(){
      this.$store.commit('REMOVE_LOGGED_USER');
    }
  },
  mounted() {
    this.changeSidenav();
    this.user();
  }
  
};
