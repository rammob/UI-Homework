import guestLayout from '@/layouts/Guest';
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Login',
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phone: null,
    };
  },
  components: {
    guestLayout,
  },
  methods: {
    register() {
      const self = this;
      const data = {
        "name": self.name,
        "email": self.email,
        "password": self.password,
        "phone": "+85512345221",
      };
      httpAxios({
        url: '/user/register',
        method: 'POST',
        data: data,
      }).then(async (response) => {
          console.log(response);
      });
    },
  },
};
