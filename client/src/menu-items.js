const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    children: [
                        {
                            id: 'analytics',
                            title: 'Analytics',
                            type: 'item',
                            url: '/app/dashboard/analytics',
                            breadcrumbs: false
                        },
                        {
                            id: 'sales',
                            title: 'Sales',
                            type: 'item',
                            url: '/app/dashboard/sales',
                            badge: {
                                title: 'NEW',
                                type: 'badge-danger'
                            }
                        }
                    ]
                },
                {
                    id: 'widgets',
                    title: 'Widget',
                    type: 'collapse',
                    icon: 'feather icon-layers',
                    badge: {
                        title: '100+',
                        type: 'badge-info'
                    },
                    children: [
                        {
                            id: 'widget-statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/app/widgets/widget-statistic'
                        },
                        {
                            id: 'widget-data',
                            title: 'Data',
                            type: 'item',
                            url: '/app/widgets/widget-data'
                        },
                        {
                            id: 'widget-chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/app/widgets/widget-chart'
                        }
                    ]
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    badge: {
                        title: 'New',
                        type: 'badge-warning'
                    },
                    children: [
                        {
                            id: 'user-profile',
                            title: 'Profile',
                            type: 'item',
                            url: '/users/user-profile',
                            breadcrumbs: false
                        },
                        {
                            id: 'user-cards',
                            title: 'User Card',
                            type: 'item',
                            url: '/users/user-cards'
                        },
                        {
                            id: 'user-list',
                            title: 'User List',
                            type: 'item',
                            url: '/users/user-list'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'apex-chart',
                    title: 'Apex Chart',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/apex-chart'
                },
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'signup-2',
                            title: 'Sign up v2',
                            type: 'item',
                            url: '/auth/signup-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-2',
                            title: 'Sign in v2',
                            type: 'item',
                            url: '/auth/signin-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-2',
                            title: 'Reset Password v2',
                            type: 'item',
                            url: '/auth/reset-password-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'change-password',
                            title: 'Change Password',
                            type: 'item',
                            url: '/auth/change-password',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'profile-settings',
                            title: 'Profile Settings',
                            type: 'item',
                            url: '/auth/profile-settings',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'tabs-auth',
                            title: 'Tabs Authentication',
                            type: 'item',
                            url: '/auth/tabs-auth',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'maintenance',
                    title: 'Maintenance',
                    type: 'collapse',
                    icon: 'feather icon-sliders',
                    children: [
                        {
                            id: 'error',
                            title: 'Error',
                            type: 'item',
                            url: '/maintenance/error',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'coming-soon',
                            title: 'Coming Soon',
                            type: 'item',
                            url: '/maintenance/coming-soon',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'offline-ui',
                            title: 'Offline UI',
                            type: 'item',
                            url: '/maintenance/offline-ui',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'app',
            title: 'App',
            type: 'group',
            icon: 'icon-app',
            children: [
                {
                    id: 'task',
                    title: 'Task',
                    type: 'collapse',
                    icon: 'feather icon-clipboard',
                    children: [
                        {
                            id: 'task-list',
                            title: 'Task List',
                            type: 'item',
                            url: '/task/task-list'
                        },
                        {
                            id: 'task-board',
                            title: 'Task Board',
                            type: 'item',
                            url: '/task/task-board'
                        },
                        {
                            id: 'task-detail',
                            title: 'Task Detail',
                            type: 'item',
                            url: '/task/task-detail'
                        }
                    ]
                },
                {
                    id: 'to-dos',
                    title: 'Todo',
                    type: 'collapse',
                    icon: 'feather icon-check-square',
                    children: [
                        {
                            id: 'todo',
                            title: 'Todo',
                            type: 'item',
                            url: '/todo/todo-basic'
                        }
                    ]
                },
                {
                    id: 'gallery',
                    title: 'Gallery',
                    type: 'collapse',
                    icon: 'feather icon-image',
                    children: [
                        {
                            id: 'grid',
                            title: 'Grid',
                            type: 'item',
                            url: '/gallery/gallery-grid'
                        },
                        {
                            id: 'photo-grid',
                            title: 'Photo Gallery',
                            type: 'item',
                            url: '/gallery/photo-grid'
                        },
                        {
                            id: 'masonry',
                            title: 'Masonry',
                            type: 'item',
                            url: '/gallery/gallery-masonry'
                        }
                    ]
                }
            ]
        },
        {
            id: 'extension',
            title: 'Extension',
            type: 'group',
            icon: 'icon-extension',
            children: [
                {
                    id: 'file-upload',
                    title: 'File Upload',
                    type: 'item',
                    url: '/file-upload',
                    classes: 'nav-item',
                    icon: 'feather icon-upload-cloud'
                }
            ]
        }
    ]
};

export default menuItems;
