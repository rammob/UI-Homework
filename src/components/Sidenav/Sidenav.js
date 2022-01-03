import { appConfig } from '@/config/app.js';
export default {
  name: 'Sidenav',
  data() {
    return {
      appName: appConfig.APP_NAME,
    };
  },
  methods: {
    changeSidenav(){
      if(this.$route.name == 'admin.dashboard'){
        const sidenav = document.getElementById("dashboard");
        sidenav.classList.add('active');
      }else if(
       this.$route.name  == 'admin.indication-plus' ||
       this.$route.name == 'admin.indication-plus.create' || 
       this.$route.name == 'admin.indication-plus.edit' || 
       this.$route.name == 'admin.indication-plus.show'){
        const sidenav = document.getElementById("case");
        sidenav.classList.add('active');
      }else if(
      this.$route.name == 'admin.users' ||
      this.$route.name == 'admin.users.create' || 
      this.$route.name == 'admin.users.edit' || 
      this.$route.name == 'admin.users.show'){
        const sidenav = document.getElementById("user");
        sidenav.classList.add('active');
      }
    },
    logout(){
      this.$store.commit('REMOVE_LOGGED_USER');
    }
  },
  mounted() {
    this.changeSidenav();
  }
  
};
