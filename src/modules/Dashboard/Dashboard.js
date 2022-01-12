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
        totalCases: '',
        cases : []
      }
  },
  methods: {
    refreshData() {
      httpAxios({
        url: 'submit_case/case_count/',
        method: 'GET',
      }).then(async (response) => {
        if(response.data != "Error: 'NoneType' object has no attribute 'type'"){
          this.indication_plus = response.data;
        }

      });
      httpAxios({
        url: '/submit_case/get_all_submit_case_by_user/',
        method: 'GET',
      }).then(async (response) => {
        if(response.data != "Error: 'NoneType' object has no attribute 'type'"){
          this.cases = response.data;
        }
      });
    },
  },
  computed: {
    totalRequest() {
      return Object.values(this.indication_plus).reduce((a, b) => a + b, 0);
    }
  },
  mounted() {
    this.refreshData();
  }
};
