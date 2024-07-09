const USER_BASE: string = 'user';
const NOTIFICATION_BASE: string = 'notification';
const SUB_ADMIN_BASE: string = 'subadmin';
const STATIC_CONTENT_BASE: string = 'content';
const ADMIN_BASE: string = 'admin';

/**
 * @SERVICES
 */
const USER_SERVICE = 'userService/api/v1';
const USER_TYPE = `${USER_SERVICE}/${ADMIN_BASE}`;

const COLLEGE_SERVICE = 'collegeservice/api/v1';
const COLLEGE_BASE: string = 'college';

const COMMUNITY_SERVICE = 'communityservice/api/v1';
const COMMUNITY_TYPE = `${COMMUNITY_SERVICE}/${ADMIN_BASE}`;

const NOTIFICATION_SERVICE = 'notificationservice/api/v1';
const NOTIFICATION_TYPE = `${NOTIFICATION_SERVICE}/${ADMIN_BASE}`;

const PAYMENT_SERVICE = 'paymentservice/api/v1';
const PAYMENT_TYPE = `${PAYMENT_SERVICE}/${ADMIN_BASE}`;

const COUPON_SERVICE = 'couponservice/api/v1/admin';

/**
 * @CITY_NAME_AND_STATE_NAME
 */
export const CITY_API = `${USER_TYPE}/cities`;
export const STATE_API = `${USER_TYPE}/states`;

/**
 * @ACCOUNT_RELATED_END_POINTS
 */
export const LOGIN_API = `${USER_TYPE}/login`;
export const LOGOUT_API = `${USER_TYPE}/logout`;
export const FORGOT_PASSWORD_API = `${USER_TYPE}/forgot-password`;
export const RESET_PASSWORD_API = `${USER_TYPE}/reset-password`;
export const CHANGE_PASSWORD_API = `${USER_TYPE}/change-password`;
export const VERIFY_OTP_API = `${USER_TYPE}/verify-otp`;
export const USER_INFO_API = `${USER_TYPE}`;
export const ONBOARDING_API = `${USER_TYPE}/profile-complete`;

/**
 * @DASHBOARD_RELATED_END_POINTS
 */
export const DASHBOARD_API = `${USER_TYPE}/dashboard`;
export const DASHBOARD_POST_API = `${COMMUNITY_TYPE}/dashboard`;

/**
 * @USERS_RELATED_END_POINTS
 */
export const USER_API = `${USER_BASE}`;
export const ADD_USER_API = `${USER_TYPE}/add-user`;
export const USER_LIST_API = `${USER_TYPE}/user`;
export const USER_REPORT_API = `${USER_LIST_API}/report`;
export const USER_EXPORT_API = `${USER_BASE}/export`;
export const MENTOR_REGISTRATION_TOGGLE_API = `${USER_TYPE}/app-config`;
export const RATING_REVIEW_API = `${USER_LIST_API}/reviews`;

/**
 * @MENTOR_RELATED_END_POINTS
 */
export const GET_MENTOR_API = `${USER_TYPE}/mentor/list`;

/**
 * @BROADCAST_NOTIFICATION_RELATED_END_POINTS
 */
export const NOTIFICATION_API = `${NOTIFICATION_TYPE}/${NOTIFICATION_BASE}`;
export const NOTIFICATION_ACTION_API = `send-notification`;

/**
 * @COLLEGE_RELATED_END_POINTS
 */
export const COLLEGE_BRANCH_LIST_API = `${COLLEGE_SERVICE}/${ADMIN_BASE}/branches`;
export const COLLEGE_API = `${COLLEGE_SERVICE}/${ADMIN_BASE}/${COLLEGE_BASE}`;
export const COLLEGE_CSV_API = `${COLLEGE_SERVICE}/${ADMIN_BASE}`;

/**
 * @SUB_ADMIN_RELATED_END_POINTS
 */
export const SUB_ADMINS_API = `${USER_TYPE}/${SUB_ADMIN_BASE}`;
export const ADMIN_LIST_API = `user-list`;
export const ADD_ADMIN_API = `add-subadmin`;
export const EDIT_ADMIN = `edit-subadmin`;
export const DETAIL_SUB_ADMIN = (id: any) => `${SUB_ADMINS_API}/${id}`;
export const ADMIN_BLOCK_UNBLOCK_DELETE_API = `${SUB_ADMINS_API}/status`;
export const SUB_ADMIN_BLOCK_UNBLOCK_API = `${SUB_ADMIN_BASE}/block-unblock`;

/**
 * @CMS_RELATED_END_POINTS
 */
export const CMS_API = (type: any) =>
  `${USER_TYPE}/${STATIC_CONTENT_BASE}/${type}`;
export const UPDATE_CMS_API = `${USER_TYPE}/${STATIC_CONTENT_BASE}`;
export const FAQ_API = `${STATIC_CONTENT_BASE}/faq`;
export const CONTACT_US_API = `${STATIC_CONTENT_BASE}/contact-us`;

/**
 * @COMMUNITY_RELATED_END_POINTS
 */
export const COMMUNITY_LIST_API = `${COMMUNITY_TYPE}/communities`;
export const COMMUNITY_IMPORT_CSV_API = `${COMMUNITY_TYPE}/upload-community-data`;
export const COMMUNITY_DETAIL_API = (id: any) => `${COMMUNITY_LIST_API}/${id}`;

/**
 * @REPORTS_RELATED_END_POINTS
 */
export const REPORT_LIST_API = `${COMMUNITY_TYPE}/posts`;
export const REPORT_ACTIVE_INACTIVE_API = `${COMMUNITY_TYPE}/enableDisablePost`;

/**
 * @MENTOR_LMS_RELATED_END_POINTS
 */
export const MENTOR_LMS_LIST_API = `${USER_TYPE}/mentor/lms`;
export const MENTOR_LMS_DETAIL_API = (id: any) =>
  `${USER_TYPE}/mentor/lms/${id}`;
export const MENTOR_LMS_STATUS_API = `${USER_TYPE}/mentor/lms/status`;
export const UPDATE_MENTOR_LMS_API = `${USER_TYPE}/mentor/lms/edit`;

/**
 * @REFERRAL_MANAGEMENT_RELATED_END_POINTS
 */
export const REFERRAL_LIST_API = `${USER_TYPE}/referral`;
export const COUPON_LIST_API = `${COUPON_SERVICE}/usercoupon`;
export const TOTAL_COUPON_LIST_API = `${COUPON_SERVICE}/referalDetails`;

/**
 * @CALL_CHAT_MANAGEMENT_RELATED_END_POINTS
 */
export const CALL_CHAT_LIST_API = `${USER_TYPE}/bookings/list`;
export const CALL_SUBTITLE_API = `${USER_SERVICE}/bookings/booking-callDetails`;
export const CALL_CHAT_DETAIL_API = (id: any) => `${CALL_CHAT_LIST_API}/${id}`;

/**
 * @TRANSACTION_MANAGEMENT_RELATED_END_POINTS
 */
export const TRANSACTION_MANAGEMENT_LIST_API = `${PAYMENT_TYPE}/transactions`;
export const TRANSACTION_MANAGEMENT_DETAIL_API = (id: any) =>
  `${TRANSACTION_MANAGEMENT_LIST_API}/${id}`;

/**
 * @AGORA_RELATED_END_POINTS
 */
export const AGORA_TOKEN = `${USER_TYPE}/agora/login`;
