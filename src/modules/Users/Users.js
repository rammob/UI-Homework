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
    },
    sortedArray: function() {
      function compare(a, b) {
        if (a.id > b.id)
          return -1;
        if (a.id < b.id)
          return 1;
        return 0;
      }
      return this.indication_plus.sort(compare);
    },
  },
 
  mounted() {
    this.refreshData();
  }
};
