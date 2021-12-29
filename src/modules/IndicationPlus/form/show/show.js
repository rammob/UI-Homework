import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';

export default {
    name: 'create_form',
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
                url: '/submit_case/'+id,
                method: 'GET',
            }).then(async (response) => {
                this.form = response.data;
                console.log(this.form);
            });
        },
    },
    mounted(){
        this.getData();
    }
};

