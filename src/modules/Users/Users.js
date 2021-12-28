import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import moment from 'moment';

export default {
  name: 'Users',
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
        url: '/user/get_all_user/',
        method: 'GET',
      }).then(async (response) => {
          response.data.forEach((e,i) => {
            response.data[i].created_at = moment(String(e.created_at)).format("MMM Do YY");
          });
          this.indication_plus = response.data;
      });
    }
  },
  mounted() {
    this.refreshData();
  }
};
