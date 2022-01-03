import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
    name: 'show_form_user',
    components: {
        adminLayout,
    },
    data() {
        return {form:{}};
    },
    methods: {
        getData(){
            const id = this.$route.query.id;
            httpAxios({
                url: '/user/'+id,
                method: 'GET',
            }).then(async (response) => {
                this.form = response.data;
            });
        },
    },
    mounted(){
        this.getData();
    }
};

