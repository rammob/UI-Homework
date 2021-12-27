import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'indication_plus',
  components: {
    adminLayout,
  },
  data() {
    return {
        indication_plus : [],
        id: null
      }
  },
  methods: {
    refreshData() {
      httpAxios({
        url: '/submit_case/get_all_submit_case/',
        method: 'GET',
      }).then(async (response) => {
          this.indication_plus = response.data;
      });
    },
    delete(){
      console.log(this.id);
      httpAxios({
        url: '/submit_case/delete_submit_case',
        method: 'DELETE',
        params:{ id : 3 }
      }).then(async (response) => {
          if(response.data == 'Deleted successfully.'){
            // this.$alert("Hello Vue Simple Alert.");
          }
      });
    }
  },
  mounted() {
    this.refreshData();
  }
};
