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
        sort: { column: 'id', by: 'asc' },
        columns: [{name:'id', text:'ID'},
                  {name:'name', text:'Name'},
                  {name:'created_at', text:'Date/Time Created'},
                  {name:"email", text:'Email'},
                  {name:'phone', text:'Phone'}],
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
      const sort = this.sort;

      function compareAsc(a, b) {
        console.log(a[sort.column])
        if (a[sort.column] < b[sort.column])
          return -1;
        if (a[sort.column] > b[sort.column])
          return 1;
        return 0;
      }
      function compareDesc(a, b) {
        if (a[sort.column] > b[sort.column])
          return -1;
        if (a[sort.column] < b[sort.column])
          return 1;
        return 0;
      }

      let newEntries = this.indication_plus;
      if(this.sort.by == 'asc'){
        newEntries.sort(compareAsc);
      }else{
        newEntries.sort(compareDesc);

      }
      return newEntries;
    },
  },
 
  mounted() {
    this.refreshData();
  }
};
