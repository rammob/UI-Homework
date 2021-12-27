// Import Modules
const dashboard = () => import('@/modules/Dashboard');
const users = () => import('@/modules/Users');
const indication_plus = () => import('@/modules/IndicationPlus');
const create_form = () => import('@/modules/IndicationPlus/form/create');
const edit_form = () => import('@/modules/IndicationPlus/form/edit');
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
      // auth: true,
      breadCrumb: [{ name: 'create_form', link: 'admin.indication-plus.create' }],
    },
  },
  {
    path: '/admin/indication-plus/edit',
    component: edit_form,
    name: 'admin.indication-plus.edit',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'edit_form', link: 'admin.indication-plus.edit' }],
    },
  },
];
