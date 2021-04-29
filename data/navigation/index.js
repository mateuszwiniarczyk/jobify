import ROUTES from 'constants/routes';

const navLinks = [
  {
    path: ROUTES.HOME,
    label: 'Home',
    visible: 'always'
  },
  {
    path: ROUTES.SUBMIT_OFFER,
    label: 'Submit offer',
    visible: 'always'
  },
  {
    path: ROUTES.MY_OFFERS,
    label: 'My offers',
    visible: 'logged_in'
  },
  {
    path: ROUTES.SIGN_IN,
    label: 'Sign in',
    visible: 'logged_out'
  },
  {
    path: ROUTES.SIGN_UP,
    label: 'Sign up',
    visible: 'logged_out'
  },
  {
    path: ROUTES.ADMIN,
    label: 'Admin',
    visible: 'admin'
  },
  {
    label: 'Logout',
    visible: 'logged_in',
    isButton: true
  }
];

export default navLinks;
