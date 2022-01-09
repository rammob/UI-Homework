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
        search : '',
        pageActions: 1,
        limitPerPage : 10,
        pageInfo: {
          page: 1,
          per_page: 1,
          pre_page: 1,
          total:0,
          total_pages:0,
        },
        totalPages: 1,
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
    paginator : function(items, current_page, per_page_items) {
      let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,
    
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);
      this.pageInfo.page = page;
      this.pageInfo.per_page =  per_page;
      this.pageInfo.pre_page =  page - 1 ? page - 1 : null;
      this.pageInfo.total = items.length;
      this.pageInfo.total_pages = total_pages ;
      return paginatedItems;
    },
    sortedArray: function() {
      const sort = this.sort;
      const search  = this.search;
      function compareAsc(a, b) {
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
      if(search.length >= 2){
        var lowSearch = search.toLowerCase();
        var keys = ['id','case_status','type'];
        return newEntries.filter(item =>
            keys.some(key =>
              String(item[key]).toLowerCase().includes(lowSearch)
            )
        );
      }
      return this.paginator(newEntries,1,this.limitPerPage);
    },
  }, 
  mounted() {
    this.refreshData();
  },
};
