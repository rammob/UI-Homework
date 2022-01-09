import adminLayout from '@/layouts/Admin';
import httpAxios from '@/utils/http-axios';
import moment from 'moment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
    name: 'report_form',
    components: {
        adminLayout,
    },
    data() {
        return {
                form:{},

            };
    },
    methods: {
        clearValidation: function() {
            // this.validation.valid[field] = '';
            // this.validation.invalid[field] = '';
            // this.$forceUpdate();
        },
        getData(){
            const id = this.$route.query.id;
            httpAxios({
                url: '/submit_case/'+id,
                method: 'GET',
            }).then(async (response) => {
                this.form = response.data;
                response.data.instructor_date = moment(String(this.form.instructor_date)).format("MMMM Do YYYY");
                response.data.due_date = moment(String(this.form.due_date)).format("MMMM Do YYYY");
            });
        },
        downloadReport() {
          window.html2canvas = html2canvas;
          var doc = new jsPDF("p","pt","a4");
          doc.html(document.querySelector("#report"), {
            callback: function(pdf) {
              pdf.save("indiction-report.pdf")
            }
          });
        }
    },
    mounted(){
        this.getData();
    }
};

