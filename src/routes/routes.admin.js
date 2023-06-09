import { AdminLayout } from '../layouts'
import { HomeAdmin, UsersAdmin } from '../pages/admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    },
    {
        path: '/admin/users',
        layout: AdminLayout,
        component: UsersAdmin
    }
];


export default routesAdmin;