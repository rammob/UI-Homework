// Import Modules
const dashboard = () => import('@/modules/Dashboard');
const users = () => import('@/modules/Users');
const indication_plus = () => import('@/modules/IndicationPlus');
const create_form = () => import('@/modules/IndicationPlus/form/create');
const edit_form = () => import('@/modules/IndicationPlus/form/edit');
const show_form = () => import('@/modules/IndicationPlus/form/show');
const create_form_user = () => import('@/modules/Users/form/create');
const edit_form_user = () => import('@/modules/Users/form/edit');
const show_form_user = () => import('@/modules/Users/form/show');
const downloadReport = () => import('@/modules/IndicationPlus/downloadReport');


// Export
export default [
  // Dashboard
  {
    path: '/admin/dashboard',
    component: dashboard,
    name: 'admin.dashboard',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'Dashboard', link: 'admin.dashboard' }],
    },
  },

  // Users
  {
    path: '/admin/users',
    component: users,
    name: 'admin.users',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'Users', link: 'admin.users' }],
    },
  },
  {
    path: '/admin/user/create',
    component: create_form_user,
    name: 'admin.user.create',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'create_form_user', link: 'admin.user.create' }],
    },
  },
  {
    path: '/admin/user/edit',
    component: edit_form_user,
    name: 'admin.user.edit',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'edit_form_user', link: 'admin.user.edit' }],
    },
  },
  {
    path: '/admin/user/show',
    component: show_form_user,
    name: 'admin.user.show',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'show_form_user', link: 'admin.user.show' }],
    },
  },
  // Indication Plus
  {
    path: '/admin/indication-plus',
    component: indication_plus,
    name: 'admin.indication-plus',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'indication_plus', link: 'admin.indication-plus' }],
    },
  },
  {
    path: '/admin/indication-plus/create',
    component: create_form,
    name: 'admin.indication-plus.create',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'create_form', link: 'admin.indication-plus.create' }],
    },
  },
  {
    path: '/admin/indication-plus/edit',
    component: edit_form,
    name: 'admin.indication-plus.edit',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'edit_form', link: 'admin.indication-plus.edit' }],
    },
  },
  {
    path: '/admin/indication-plus/show',
    component: show_form,
    name: 'admin.indication-plus.show',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'show_form', link: 'admin.indication-plus.show' }],
    },
  },
  {
    path: '/admin/indication-plus/download',
    component: downloadReport,
    name: 'admin.indication-plus.download',
    meta: {
      auth: true,
      breadCrumb: [{ name: 'download', link: 'admin.indication-plus.download' }],
    },
  },
];
