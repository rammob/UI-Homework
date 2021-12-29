import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import moment from 'moment';

export default {
  name: 'indication_plus',
  components: {
    adminLayout,
  },
  data() {
    return {
        indication_plus : [],
      }
  },
  methods: {
    refreshData() {
      httpAxios({
        url: '/submit_case/get_all_submit_case/',
        method: 'GET',
      }).then(async (response) => {
          response.data.forEach((e,i) => {
              response.data[i].due_date = moment(String(e.due_date)).format("MMM Do YY");
              response.data[i].created_at = moment(String(e.created_at)).format("MMM Do YY");
          });
          this.indication_plus = response.data;
      });
    },
    deleteItem(id){
      httpAxios({
        url: '/submit_case/delete_submit_case',
        method: 'DELETE',
        params:{ id : id }
      }).then(async (response) => {
          if(response.data == 'Deleted successfully.'){
            alert("Deleted successfully.");
            this.$router.go()
          }
      });
    }
  },
  mounted() {
    this.refreshData();
  }
};
