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
        sort: { column: 'id', by: 'asc' },
        columns: [{name:'id', text:'ID'},
                  {name:'case_status', text:'Status'},
                  {name:'created_at', text:'Date/Time Created'},
                  {name:"type", text:'Property Type'},
                  {name:'due_date', text:'Due Date/Time'}],
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
  },
};
