/**
 * @BC === BREADCRUMB
 */

import * as route from 'src/app/constants/absolute-routes';
import {
  ABOUT_US,
  ADD_SUB_ADMINS,
  CMS,
  EDIT_SUB_ADMINS,
  FAQ,
  PRIVACY_POLICY,
  PROFILE,
  PROFILE_EDIT,
  SUB_ADMINS,
  TERM_CONDITIONS,
} from './routes';

/**
 * @PROFILE_MODULE_BREADCRUMB_ROUTE
 */
export const BC_PROFILE = [{ path: PROFILE.fullUrl, label: 'Profile' }];
export const BC_PROFILE_EDIT = [
  ...BC_PROFILE,
  { path: PROFILE_EDIT.fullUrl, label: 'Edit' },
];
export const BC_CHANGE_PASSWORD = [
  ...BC_PROFILE,
  { path: route.ABS_PROFILE_CHANGE_PASS, label: 'Change Password' },
];

// /**
//  * @USERS_MODULE_BREADCRUMB_ROUTE
//  */
// export const BC_USERS = [{ path: route.ABS_USERS, label: "User Management" }];
// export const BC_USERS_ADD = [
//   ...BC_USERS,
//   { path: route.ABS_USERS_ADD, label: "Add User" },
// ];
// export const BC_USERS_EDIT = [
//   ...BC_USERS,
//   { path: route.ABS_USERS_EDIT, label: "Edit User" },
// ];
// export const BC_USERS_DETAIL = [
//   ...BC_USERS,
//   { path: route.ABS_USERS, label: "User Details" },
// ];

/**
 * @NOTIFICATION_MODULE_BREADCRUMB_ROUTE
 */
// export const BC_NOTIFICATION = [
//   { path: route.ABS_NOTIFICATION, label: 'Notifications' },
// ];
// export const BC_NOTIFICATION_ADD = [
//   ...BC_NOTIFICATION,
//   { path: route.ABS_NOTIFICATION_ADD, label: 'Add Notification' },
// ];
// export const BC_NOTIFICATION_EDIT = [
//   ...BC_NOTIFICATION,
//   { path: route.ABS_NOTIFICATION_EDIT, label: 'Edit Notification' },
// ];
// export const BC_NOTIFICATION_DETAILS = [
//   ...BC_NOTIFICATION,
//   { path: route.ABS_NOTIFICATION_DETAILS, label: 'Notification Details' },
// ];

/**
 * @CMS_MODULE_BREADCRUMB_ROUTE
 */
export const BC_CMS = [{ path: CMS.fullUrl, label: 'CMS Management' }];
export const BC_TERM_CONDTIONS = [
  ...BC_CMS,
  { path: TERM_CONDITIONS.fullUrl, label: 'Terms & Conditions' },
];
export const BC_PRIVACY_POLICY = [
  ...BC_CMS,
  { path: PRIVACY_POLICY.fullUrl, label: 'Privacy Policy' },
];
export const BC_DISCLAIMER = [
  ...BC_CMS,
  { path: PRIVACY_POLICY.fullUrl, label: 'Disclaimer' },
];
export const BC_ABOUT_US = [
  ...BC_CMS,
  { path: ABOUT_US.fullUrl, label: 'About Us' },
];
export const BC_FAQ = [...BC_CMS, { path: FAQ.fullUrl, label: 'FAQs' }];

/**
 * @CMS_MODULE_BREADCRUMB_ROUTE
 */
export const BC_SUB_ADMINS = [
  // ...BC_ROLES_ACCESS,
  { path: SUB_ADMINS.fullUrl, label: 'Sub Admin Management' },
];
export const BC_SUB_ADMIN_ADD = [
  ...BC_SUB_ADMINS,
  { path: ADD_SUB_ADMINS.fullUrl, label: 'Add New Sub Admin' },
];
export const BC_SUB_ADMIN_EDIT = [
  ...BC_SUB_ADMINS,
  { path: EDIT_SUB_ADMINS.fullUrl, label: 'Edit Sub Admin' },
];
export const BC_SUB_ADMIN_DETAILS = [
  ...BC_SUB_ADMINS,
  { path: SUB_ADMINS.fullUrl, label: 'Sub Admin Details' },
];

/**
 * @COMMUNITY_MODULE_BREADCRUMB_ROUTE
 */
// export const BC_COMMUNITY = [
//   { path: route.ABS_COMMUNITY, label: 'Community Management' },
// ];
// export const BC_COMMUNITY_ADD = [
//   ...BC_COMMUNITY,
//   { path: route.ABS_COMMUNITY_ADD, label: 'Add Community' },
// ];
// export const BC_COMMUNITY_EDIT = [
//   ...BC_COMMUNITY,
//   { path: route.ABS_COMMUNITY_EDIT, label: 'Edit Community' },
// ];
// export const BC_COMMUNITY_DETAIL = [
//   ...BC_COMMUNITY,
//   { path: route.ABS_COMMUNITY_DETAIL, label: 'Community Detail' },
// ];

/**
 * @COLLEGE_MODULE_BREADCRUMB_ROUTE
 */
// export const BC_COLLEGE = [
//   { path: route.ABS_COLLEGE, label: 'Institute Management' },
// ];
// export const BC_COLLEGE_ADD = [
//   ...BC_COLLEGE,
//   { path: route.ABS_COLLEGE_ADD, label: 'Add Institute' },
// ];
// export const BC_COLLEGE_EDIT = [
//   ...BC_COLLEGE,
//   { path: route.ABS_COLLEGE_EDIT, label: 'Edit Institute' },
// ];

// export const BC_COLLEGE_DETAIL = [
//   ...BC_COLLEGE,
//   { path: route.ABS_COLLEGE_DETAIL, label: 'Institute Detail' },
// ];

/**
 * @REPORTS_MODULE_BREADCRUMB_ROUTE
 */
// export const BC_REPORTS = [
//   { path: route.ABS_REPORTS, label: 'Post Management' },
// ];

/*
 *@CALL_AND_CHAT_MANAGEMENT_BREADCRUMB_ROUTE
 */
// export const BC_CALL_AND_CHAT_MANAGEMENT = [
//   { path: route.ABS_CALL_AND_CHAT_MANAGEMENT, label: 'Call & Chat Management' },
// ];

// /**
//  *@TRANSATION_MANAGEMENT_BREADCRUMB_ROUTE
//  */

// export const BC_TRANSATION_MANAGEMENT = [
//   { path: route.ABS_TRANSACTION_MANAGEMENT, label: 'Transaction History' },
// ];

/*
 * @MENTOR_LMS_MODULE_BREADCRUMB_ROUTE
 */
// export const BC_MENTOR_LMS = [
//   { path: route.ABS_MENTOR_LMS, label: 'Mentor LMS' },
// ];
// export const BC_MENTOR_LMS_ADD = [
//   ...BC_MENTOR_LMS,
//   { path: route.ABS_MENTOR_LMS, label: 'Add New Question' },
// ];
// export const BC_MENTOR_LMS_EDIT = [
//   ...BC_MENTOR_LMS,
//   { path: route.ABS_MENTOR_LMS, label: 'Edit Question' },
// ];

/**
 * @ORDER_HISTORY_BREADCRUMB_ROUTE
 *
 */

// export const BC_ORDER_HISTORY = [
//   { path: route.ABS_ORDER_HISTORY, label: 'Order History' },
// ];

/**
 * @REFERRAL_MANAGEMENT_BREADCRUMB_ROUTE
 *
 */

// export const BC_REFERRAL_MANAGEMENT = [
//   { path: route.ABS_REFERRAL_MANAGEMENT, label: 'Referral Management' },
// ];
// export const BC_REFERRAL_MANAGEMENT_DETAILS = [
//   ...BC_REFERRAL_MANAGEMENT,
//   { path: route.ABS_REFERRAL_MANAGEMENT_DETAILS, label: 'Coupon Details' },
// ];
// export const BC_REFERRAL_MANAGEMENT_TOTAL = [
//   ...BC_REFERRAL_MANAGEMENT,
//   { path: route.ABS_REFERRAL_MANAGEMENT_DETAILS, label: 'Total Referrals' },
// ];

/**
 * @SUPPORT_DISPUTE_MANAGEMENT
 */

// export const BC_SUPPORT_DISPUTE_MANAGEMENT = [
//   {
//     path: route.ABS_SUPPORT_AND_DISPUTE,
//     label: 'Support And Dispute Management',
//   },
// ];
