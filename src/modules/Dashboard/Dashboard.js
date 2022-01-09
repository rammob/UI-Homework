import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Dashboard',
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
        url: '/case_count',
        method: 'GET',
      }).then(async (response) => {
          this.indication_plus = response.data;
          console.log(this.indication_plus)
      });
    },
  //   sortedArray: function() {
  //     function compare(a, b) {
  //       if (a.id > b.id)
  //         return -1;
  //       if (a.id < b.id)
  //         return 1;
  //       return 0;
  //     }
  //     return this.indication_plus.sort(compare);
  //   },
  // },
  },
  mounted() {
    this.refreshData();
  }
};
