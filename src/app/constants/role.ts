export const MODULE = {
  DASHBOARD: "DASHBOARD",
  USER_MANAGEMENT: "USER",
  TEACHER_MANAGEMENT: "TEACHER_MENTOR",
  COLLEGE_MANAGEMENT: "COLLEGE",
  COMMUNITY_MANAGEMENT: "COMMUNITY",
  SUBADMIN_MANAGEMENT: "SUB_ADMIN",
  NOTIFICATIONS: "NOTIFICATIONS",
  CMS_MANAGEMENT: "CMS",
  POST_MANAGEMENT: "POST",
  REFERRAL_MANAGEMENT: "REFERRAL",
  MENTOR_LMS: "MENTOR_LMS",
  CALL_CHAT_MANAGEMENT: "CALL_CHAT",
  ORDER_HISTORY: "ORDER",
  TRANSACTION_MANAGEMENT: "TRANSACTION",
  // SUPPORT_DISPUTE_MANAGEMENT: "SUPPORT_DISPUTE",
};

export const MODULE_ID = {
  "1": "DASHBOARD",
  "2": "USER_MANAGEMENT",
  "3": "LOYALTY_MANAGEMENT",
  "4": "BOOKINGS_MANAGEMENT",
  "5": "SUBADMIN_MANAGEMENT",
  "6": "BANNER_MANAGEMENT",
  "7": "SUPPORT_CHAT",
  "8": "NOTIFICATIONS",
  "9": "CMS_MANAGEMENT",
  "10": "CATEGORY_MANAGEMENT",
};

export const LIST_TYPE = {
  STUDENT: "student",
  TEACHER: "mentor",
};

export const ACTION_TYPE = {
  BLOCKED: "blocked",
  UNBLOCKED: "unblocked",
  DELETE: "deleted",
  VERIFY: "verified",
  UNVERIFY: "unverified",
  REPORT: "report",
  UNREPORT: "unreport",
};

export const ROLE = {
  DASHBOARD: {
    module: "DASHBOARD",
    moduleId: "1",
    view: false,
    edit: false,
  },
  USER_MANAGEMENT: {
    module: "USER",
    moduleId: "2",
    view: false,
    edit: false,
  },
  TEACHER_MANAGEMENT: {
    module: "TEACHER_MENTOR",
    moduleId: "3",
    view: false,
    edit: false,
  },
  COMMUNITY_MANAGEMENT: {
    module: "COMMUNITY",
    moduleId: "4",
    view: false,
    edit: false,
  },
  SUBADMIN_MANAGEMENT: {
    module: "SUB_ADMIN",
    moduleId: "5",
    view: false,
    edit: false,
  },
  NOTIFICATIONS: {
    module: "NOTIFICATIONS",
    moduleId: "6",
    view: false,
    edit: false,
  },
  CMS_MANAGEMENT: {
    module: "CMS",
    moduleId: "7",
    view: false,
    edit: false,
  },
  COLLEGE_MANAGEMENT: {
    module: "COLLEGE",
    moduleId: "8",
    view: false,
    edit: false,
  },
  POST_MANAGEMENT: {
    module: "POST",
    moduleId: "9",
    view: false,
    edit: false,
  },
  REFERRAL_MANAGEMENT: {
    module: "REFERRAL",
    moduleId: "10",
    view: false,
    edit: false,
  },
  MENTOR_LMS: {
    module: "MENTOR_LMS",
    moduleId: "11",
    view: false,
    edit: false,
  },
  CALL_CHAT_MANAGEMENT: {
    module: "CALL_CHAT",
    moduleId: "12",
    view: false,
    edit: false,
  },
  ORDER_HISTORY: {
    module: "ORDER",
    moduleId: "13",
    view: false,
    edit: false,
  },
  TRANSACTION_MANAGEMENT: {
    module: "TRANSACTION",
    moduleId: "14",
    view: false,
    edit: false,
  },
  // SUPPORT_DISPUTE_MANAGEMENT: {
  //   module: "SUPPORT_DISPUTE",
  //   moduleId: "15",
  //   view: false,
  //   edit: false,
  // },
};

export const PERMISSION_MODULE = {
  viewDashboard: "DASHBOARD",
  editDashboard: "DASHBOARD",
  viewUserMgmt: "USER_MANAGEMENT",
  editUserMgmt: "USER_MANAGEMENT",
  viewLoyaltyMgmt: "TEACHER_MANAGEMENT",
  editLoyaltyMgmt: "TEACHER_MANAGEMENT",
  viewBookingMgmt: "COLLEGE_MANAGEMENT",
  editBookingMgmt: "COLLEGE_MANAGEMENT",
  viewBannerMgmt: "COMMUNITY_MANAGEMENT",
  editBannerMgmt: "COMMUNITY_MANAGEMENT",
  viewSubAdminMgmt: "SUBADMIN_MANAGEMENT",
  editSubAdminMgmt: "SUBADMIN_MANAGEMENT",
  // viewSupportMgmt: "SUPPORT_CHAT",
  // editSupportMgmt: "SUPPORT_CHAT",
  viewNotificationMgmt: "NOTIFICATIONS",
  editNotificationMgmt: "NOTIFICATIONS",
  // viewCategoryMgmt: "CATEGORY_MANAGEMENT",
  // editCategoryMgmt: "CATEGORY_MANAGEMENT",
  viewCMSMgmt: "CMS_MANAGEMENT",
  editCMSMgmt: "CMS_MANAGEMENT",
  viewPostMgmt: "POST_MANAGEMENT",
  editPostMgmt: "POST_MANAGEMENT",
  viewReferralMgmt: "REFERRAL_MANAGEMENT",
  editReferralMgmt: "REFERRAL_MANAGEMENT",
  viewLmsMgmt: "MENTOR_LMS",
  editLmsMgmt: "MENTOR_LMS",
  viewCallMgmt: "CALL_CHAT_MANAGEMENT",
  editCallMgmt: "CALL_CHAT_MANAGEMENT",
  viewOrderMgmt: "ORDER_HISTORY",
  editOrderMgmt: "ORDER_HISTORY",
  viewTransactionMgmt: "TRANSACTION_MANAGEMENT",
  editTransactionMgmt: "TRANSACTION_MANAGEMENT",
  // viewDisputeMgmt: "SUPPORT_DISPUTE_MANAGEMENT",
  // editDisputeMgmt: "SUPPORT_DISPUTE_MANAGEMENT",
};

export const FORM_CONTROL_TEST = {
  dashboard: [
    { control: "viewDashboard", key: "view" },
    { control: "editDashboard", key: "edit" },
  ],
  user: [
    { control: "viewUserMgmt", key: "view" },
    { control: "editUserMgmt", key: "edit" },
  ],
  teacher: [
    { control: "viewLoyaltyMgmt", key: "view" },
    { control: "editLoyaltyMgmt", key: "edit" },
  ],
  community: [
    { control: "viewBannerMgmt", key: "view" },
    { control: "editBannerMgmt", key: "edit" },
  ],
  cms: [
    { control: "viewCMSMgmt", key: "view" },
    { control: "editCMSMgmt", key: "edit" },
  ],
  subadmin: [
    { control: "viewSubAdminMgmt", key: "view" },
    { control: "editSubAdminMgmt", key: "edit" },
  ],
  notification: [
    { control: "viewNotificationMgmt", key: "view" },
    { control: "editNotificationMgmt", key: "edit" },
  ],
  college: [
    { control: "viewBookingMgmt", key: "view" },
    { control: "editBookingMgmt", key: "edit" },
  ],
  post: [
    { control: "viewPostMgmt", key: "view" },
    { control: "editPostMgmt", key: "edit" },
  ],
  referral: [
    { control: "viewReferralMgmt", key: "view" },
    { control: "editReferralMgmt", key: "edit" },
  ],
  mentorLms: [
    { control: "viewLmsMgmt", key: "view" },
    { control: "editLmsMgmt", key: "edit" },
  ],
  chatAndCall: [
    { control: "viewCallMgmt", key: "view" },
    { control: "editCallMgmt", key: "edit" },
  ],
  order: [
    { control: "viewOrderMgmt", key: "view" },
    { control: "editOrderMgmt", key: "edit" },
  ],
  transaction: [
    { control: "viewTransactionMgmt", key: "view" },
    { control: "editTransactionMgmt", key: "edit" },
  ],
  // support: [
  //   { control: "viewDisputeMgmt", key: "view" },
  //   { control: "editDisputeMgmt", key: "edit" },
  // ],
};
export const ADD_ROLES_ACCESS = {
  DASHBOARD: { view: false, edit: false },
  TEACHER_MENTOR: { view: false, edit: false },
  USER: { view: false, edit: false },
  COMMUNITY: { view: false, edit: false },
  CMS: { view: false, edit: false },
  SUB_ADMIN: { view: false, edit: false },
  NOTIFICATIONS: { view: false, edit: false },
  COLLEGE: { view: false, edit: false },
  POST: { view: false, edit: false },
  REFERRAL: { view: false, edit: false },
  MENTOR_LMS: { view: false, edit: false },
  CALL_CHAT: { view: false, edit: false },
  ORDER: { view: false, edit: false },
  TRANSACTION: { view: false, edit: false },
  // SUPPORT_DISPUTE: { view: false, edit: false },
  // ADMIN_PROFILE: { view: false, edit: false },
};
