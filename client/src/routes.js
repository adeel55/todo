import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from "./components/Loader/Loader";
import AdminLayout from "./layouts/AdminLayout";

import GuestGuard from "./components/Auth/GuestGuard";
import AuthGuard from "./components/Auth/AuthGuard";

import { BASE_URL } from "./config/constant";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    guard: GuestGuard,
    path: '/auth/signin-1',
    component: lazy(() => import('./views/auth/signin/SignIn1'))
  },  
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/errors/NotFound404'))
  },
  {
    exact: true,
    path: '/maintenance/coming-soon',
    component: lazy(() => import('./views/maintenance/ComingSoon'))
  },
  {
    exact: true,
    path: '/maintenance/error',
    component: lazy(() => import('./views/maintenance/Error'))
  },
  {
    exact: true,
    path: '/maintenance/offline-ui',
    component: lazy(() => import('./views/maintenance/OfflineUI'))
  },
  {
    exact: true,
    path: '/auth/signup-2',
    component: lazy(() => import('./views/auth/signup/SignUp2'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/auth/signin-2',
    component: lazy(() => import('./views/auth/signin/SignIn2'))
  },
  {
    exact: true,
    path: '/auth/reset-password-1',
    component: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    exact: true,
    path: '/auth/reset-password-2',
    component: lazy(() => import('./views/auth/reset-password/ResetPassword2'))
  },
  {
    exact: true,
    path: '/auth/change-password',
    component: lazy(() => import('./views/auth/ChangePassword'))
  },
  {
    exact: true,
    path: '/auth/profile-settings',
    component: lazy(() => import('./views/auth/ProfileSettings'))
  },
  {
    exact: true,
    path: '/auth/tabs-auth',
    component: lazy(() => import('./views/auth/TabsAuth'))
  },
  {
    path: '*',
    layout: AdminLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: '/app/dashboard/analytics',
        component: lazy(() => import('./views/dashboard/DashAnalytics'))
      },
      {
        exact: true,
        path: '/app/dashboard/sales',
        component: lazy(() => import('./views/dashboard/DashSales'))
      },
      {
        exact: true,
        path: '/app/widgets/widget-statistic',
        component: lazy(() => import('./views/widgets/WidgetStatistic'))
      },
      {
        exact: true,
        path: '/app/widgets/widget-data',
        component: lazy(() => import('./views/widgets/WidgetData'))
      },
      {
        exact: true,
        path: '/app/widgets/widget-chart',
        component: lazy(() => import('./views/widgets/WidgetChart'))
      },
      {
        exact: true,
        path: '/users/user-profile',
        component: lazy(() => import('./views/users/UserProfile'))
      },
      {
        exact: true,
        path: '/users/user-cards',
        component: lazy(() => import('./views/users/UserCard'))
      },
      {
        exact: true,
        path: '/users/user-list',
        component: lazy(() => import('./views/users/UserList'))
      },
      {
        exact: true,
        path: '/charts/apex-chart',
        component: lazy(() => import('./views/charts/apex-chart'))
      },
      {
        exact: true,
        path: '/todo/todo-basic',
        component: lazy(() => import('./views/applications/to-do/ToDo'))
      },
      {
        exact: true,
        path: '/task/task-list',
        component: lazy(() => import('./views/applications/task/TaskList'))
      },
      {
        exact: true,
        path: '/task/task-board',
        component: lazy(() => import('./views/applications/task/TaskBoard'))
      },
      {
        exact: true,
        path: '/task/task-detail',
        component: lazy(() => import('./views/applications/task/TaskDetails'))
      },
      {
        exact: true,
        path: '/gallery/gallery-grid',
        component: lazy(() => import('./views/applications/gallery/GalleryGrid'))
      },
      {
        exact: true,
        path: '/gallery/photo-grid',
        component: lazy(() => import('./views/applications/gallery/PhotoGrid'))
      },
      {
        exact: true,
        path: '/gallery/gallery-masonry',
        component: lazy(() => import('./views/applications/gallery/MasonryGallery'))
      },
      {
        exact: true,
        path: '/file-upload',
        component: lazy(() => import('./views/extensions/FileUpload'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL}/>
      }
    ]
  }
];

export default routes;
