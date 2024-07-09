// import { ABS_REFERRAL_MANAGEMENT_DETAILS } from "./absolute-routes";
import {
  // NOTIFICATION,
  // PARENTSTUDENT,
  SUB_ADMINS,
  // TEACHERMENTOR,
} from "src/app/constants/routes";

/**
 * @MENTOR_MANAGEMENT_HEADING
 */
export const MENTOR_HEADING = [
  {
    heading: "Name",
    key: "fullName",
    sort: true,
    align: "center",
    type: "openInNewTab",
    // link: `/${TEACHERMENTOR}`,
  },
  { heading: "Mentor ID", key: "created", align: "center" },
  {
    heading: "Mobile Number",
    key: "mobileNo",
    align: "center",
    showVerify: true,
    verifyKey: "isMobileNoVerified",
  },
  {
    heading: "Email ID",
    key: "email",
    align: "center",
    type: "showFullName",
    showVerify: true,
    verifyKey: "isEmailVerified",
  },
  { heading: "Role", key: "roles", align: "center", type: "title" },
  { heading: "Branch", key: "subject", align: "center", type: "title" },

  {
    heading: "Institute Name",
    key: "instituteName",
    align: "center",
    type: "title",
  },
  {
    heading: "Admission Year",
    key: "admissionYear",
    align: "center",
    type: "title",
  },
  {
    heading: "Date & Time",
    key: "createdAt",
    sort: true,
    align: "center",
    type: "dateTime",
  },
  {
    heading: "IP Address",
    key: "lastLoginLogoutDetails",
    subKey: "remoteAddress",
    align: "center",
    time: false,
    type: "role",
  },
  {
    heading: "Last Login",
    key: "lastLoginLogoutDetails",
    subKey: "created",
    align: "center",
    time: true,
    type: "role",
  },
  {
    heading: "Logout Time",
    key: "lastLoginLogoutDetails",
    subKey: "logoutTime",
    align: "center",
    time: true,
    type: "role",
  },
  {
    heading: "Post Count",
    key: "postCount",
    align: "center",
    faqContent: true,
    type: "link",
  },
  { heading: "Comment Count", key: "commentCount", align: "center" },
  { heading: "Status", key: "status", align: "center", type: "formatStatus" },
  { heading: "Action", key: "status", type: "action", action: [] },
];

export const MENTOR_SESSION_HISTORY_HEADING = [
  {
    heading: "Student",
    key: "studentUser",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Session Type",
    key: "isSessionPaid",
    type: "sessionType",
    align: "center",
  },
  {
    heading: "Start Time",
    key: "startDate",
    align: "center",
    type: "dateTime",
  },
  {
    heading: "End Time",
    key: "endDate",
    align: "center",
    type: "dateTime",
  },
  { heading: "Order ID", key: "orderId", align: "center" },
  {
    heading: "Order Date",
    key: "createdAt",
    align: "center",
    type: "dateTime",
  },
];

/**
 * @STUDENT_MANAGEMENT_HEADING
 */
export const STUDENT_SESSION_HISTORY_HEADING = [
  {
    heading: "Mentor",
    key: "mentorUser",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Session Type",
    key: "isSessionPaid",
    type: "sessionType",
    align: "center",
  },
  {
    heading: "Start Time",
    key: "startDate",
    align: "center",
    type: "dateTime",
  },
  {
    heading: "End Time",
    key: "endDate",
    align: "center",
    type: "dateTime",
  },
  { heading: "Order ID", key: "orderId", align: "center" },
  {
    heading: "Order Date",
    key: "createdAt",
    align: "center",
    type: "dateTime",
  },
];

export const PARENT_MENTOR_STUDENT_HEADING = [
  {
    heading: "Name",
    key: "fullName",
    sort: true,
    align: "center",
    type: "openInNewTab",
    // link: `/${PARENTSTUDENT}`,
  },
  { heading: "User ID", key: "created", align: "center" },
  {
    heading: "Mobile Number",
    key: "mobileNo",
    align: "center",
    showVerify: true,
    verifyKey: "isMobileNoVerified",
  },
  {
    heading: "Email ID",
    key: "email",
    align: "center",
    type: "showFullName",
    showVerify: true,
    verifyKey: "isEmailVerified",
  },

  { heading: "Class", key: "class", align: "center", type: "title" },
  { heading: "JEE Main Rank", key: "jeeMainRank", align: "center" },
  { heading: "JEE Advance Rank", key: "jeeAdvancedRank", align: "center" },

  {
    heading: "Session Year",
    key: "sessionYear",
    align: "center",
  },
  {
    heading: "Registration Date & Time",
    key: "createdAt",
    sort: true,
    align: "center",
    type: "dateTime",
  },
  {
    heading: "IP Address",
    key: "lastLoginLogoutDetails",
    subKey: "remoteAddress",
    align: "center",
    time: false,
    type: "role",
  },
  {
    heading: "Last Login",
    key: "lastLoginLogoutDetails",
    subKey: "created",
    align: "center",
    time: true,
    type: "role",
  },
  {
    heading: "Logout Time",
    key: "lastLoginLogoutDetails",
    subKey: "logoutTime",
    align: "center",
    time: true,
    type: "role",
  },
  {
    heading: "Post Count",
    key: "postCount",
    align: "center",
    faqContent: true,
    type: "link",
  },
  { heading: "Comment Count", key: "commentCount", align: "center" },
  { heading: "City", key: "city", align: "center" },

  { heading: "State", key: "state", align: "center" },
  { heading: "Status", key: "status", align: "center", type: "formatStatus" },
  {
    heading: "Action",
    key: "status",
    type: "action",
    action: [1, 2, 3],
  },
];

/**
 *  @Admin_Listing_Heading
 */

export const ADMIN_LISTING = [
  {
    heading: "Name",
    key: "name",
    sort: true,
    align: "center",
    type: "link",
    link: `/${SUB_ADMINS}`,
  },
  // { heading: "Mobile Number", key: "fullMobileNo", align: "center" },
  { heading: "Email ID", key: "email", align: "center", type: "showFullName" },
  {
    heading: "IP Address",
    key: "lastLoginLogoutDetails",
    subKey: "remoteAddress",
    align: "center",
    time: false,
    type: "role",
  },
  {
    heading: "Last Login",
    key: "lastLoginLogoutDetails",
    subKey: "created",
    align: "center",
    time: true,
    type: "role",
  },
  {
    heading: "Logout Time",
    key: "lastLoginLogoutDetails",
    subKey: "logoutTime",
    align: "center",
    time: true,
    type: "role",
  },
  { heading: "Status", key: "status", align: "center", type: "formatStatus" },
  { heading: "Action", key: "status", type: "action", action: [1, 2] },
];

/**
 *  @NOTIFICATION_HEADING_Headings
 */

export const BROADCAST_LISTING_HEADING = [
  {
    heading: "Title",
    key: "title",
    type: "openInNewTab",
    // link: `/${NOTIFICATION}`,
    sort: true,
    align: "center",
  },
  {
    heading: "Description",
    key: "description",
    align: "center",
    type: "plainText",
  },
  {
    heading: "Added On Date",
    key: "createdAt",
    align: "center",
    type: "date",
  },
  {
    heading: "Notification Type",
    key: "notificationType",
    align: "center",
  },
  { heading: "User", key: "userType", align: "center" },
  { heading: "Action", key: "status", type: "action", action: [3] },
];

/**
 * @REFERRAL_MANAGEMENT_HEADING
 */
export const REFERRAL_MANAGEMENT_HEADING = [
  {
    heading: "Mentor Name",
    key: "fullName",
    align: "center",
    type: "link",
    sort: true,
    // link: `/${TEACHERMENTOR}`,
  },
  {
    heading: "Email ID",
    key: "email",
    align: "center",
    type: "showFullName",
    showVerify: true,
    verifyKey: "isEmailVerified",
  },
  {
    heading: "Phone Number",
    key: "mobileNo",
    align: "center",
    showVerify: true,
    verifyKey: "isMobileNoVerified",
  },
  {
    heading: "Coupon Available",
    key: "couponAvailable",
    align: "center",
    type: "number",
    sort: true,
  },
  {
    heading: "Pizza Referrals",
    key: "totalCouponRecived",
    align: "center",
    type: "compare",
    total: "6",
    sort: true,
  },
  {
    heading: "Total Referrals",
    key: "referrals",
    align: "center",
    type: "link",
    sort: true,
    // link: `/${ABS_REFERRAL_MANAGEMENT_DETAILS}`,
    isNumber: true,
  },
  {
    heading: "Action",
    key: "status",
    type: "action",
    action: [4],
  },
];
export const REFERRAL_MANAGEMENT_COUPON_DETAIL_HEADING = [
  {
    heading: "Type",
    key: "type",
    align: "center",
    type: "title",
  },
  { heading: "Coupon No.", key: "code", align: "center", type: "showFullName" },
  { heading: "Coupon PIN", key: "pin", align: "center", type: "showFullName" },
  {
    heading: "Date & Time",
    key: "createdAt",
    align: "center",
    type: "dateTime",
  },
  {
    heading: "Coupon Availed",
    key: "isCouponAvailed",
    align: "center",
  },
  { heading: "Amount", key: "value", align: "center", type: "currency" },
  { heading: "Redeemed", key: "redeemed", align: "center", type: "currency" },
  { heading: "Balance", key: "balance", align: "center", type: "currency" },
  {
    heading: "Action",
    key: "status",
    type: "action",
    action: [4],
  },
];

export const REFERRAL_MANAGEMENT_TOTAL_REFERRAL_HEADING = [
  {
    heading: "Mentor Name",
    key: "userName",
    align: "center",
    type: "title",
  },
  {
    heading: "Mobile No.",
    key: "mobileNo",
    align: "center",
    showVerify: true,
    verifyKey: "isMobileNoVerified",
  },
  {
    heading: "Email ID",
    key: "email",
    align: "center",
    type: "showFullName",
    showVerify: true,
    verifyKey: "isEmailVerified",
  },
  {
    heading: "Email Verified",
    key: "isEmailVerified",
    align: "center",
    type: "booleanValue",
  },
  {
    heading: "Registered from",
    key: "platform",
    align: "center",
    type: "browser",
  },
  { heading: "Browser", key: "browser", align: "center", type: "title" },
  { heading: "IP Address", key: "clientIp", align: "center" },
  {
    heading: "Date & Time",
    key: "createdAt",
    align: "center",
    type: "dateTime",
  },
];

/**
 * @MENTOR_LMS_HEADING
 */

export const MENTOR_LMS_VIDEO_HEADING = [
  {
    heading: "Video Name",
    key: "name",
    align: "center",
    type: "showFullName",
  },
  {
    heading: "Added On",
    key: "createdAt",
    align: "center",
    // sort: true,
    type: "dateTime",
  },
  {
    heading: "Status",
    key: "status",
    align: "center",
    type: "formatStatus",
    formatType: "active-inactive",
  },
  {
    heading: "Action",
    key: "status",
    type: "action",
    action: [4],
  },
];
export const MENTOR_LMS_PDF_HEADING = [
  {
    heading: "PDF Name",
    key: "name",
    type: "showFullName",
    align: "center",
  },
  {
    heading: "Added On",
    key: "createdAt",
    align: "center",
    // sort: true,
    type: "dateTime",
  },
  {
    heading: "Status",
    key: "status",
    align: "center",
    type: "formatStatus",
    formatType: "active-inactive",
  },
  {
    heading: "Action",
    key: "status",
    type: "action",
    action: [4],
  },
];

/**
 * @CALL_CHAT_MANAGEMENT_HEADING
 */
export const CALL_AND_CHAT_MANAGEMENT_HEADING = [
  {
    heading: "Transaction ID",
    key: "transaction_id",
    align: "center",
    // type: "link",
    // link: `/${CALL_AND_CHAT_MANAGEMENT}`,
  },
  {
    heading: "Student",
    key: "studentUser",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Mentor",
    key: "mentorUser",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Order ID",
    key: "orderId",
    type: "showFullName",
    align: "center",
  },

  {
    heading: "Start Time",
    key: "startDate",
    sort: true,
    align: "center",
    type: "dateTime",
  },
  {
    heading: "End Time",
    key: "endDate",
    sort: true,
    align: "center",
    type: "dateTime",
  },
  { heading: "Call Duration", key: "duration", align: "center" },
  // { heading: "Call Time", key: "call_time", align: "center", sort: true },
  // { heading: "Free or Paid", key: "free_or_paid", align: "center" },
  {
    heading: "Status",
    key: "requestType",
    align: "center",
    sort: true,
    type: "title",
  },

  { heading: "Action", key: "action", type: "action", action: [4] },
];

/**
 * @TRANSACTION_MANAGEMENT_HEADING
 */
export const TRANSACTION_MANAGEMENT_HEADING = [
  {
    heading: "Transaction ID",
    key: "transactionId",
    align: "center",
  },
  { heading: "Order ID", key: "orderId", align: "center" },
  {
    heading: "Student",
    key: "student",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Mentor",
    key: "mentor",
    subKey: "name",
    type: "role",
    align: "center",
  },
  {
    heading: "Date & Time",
    key: "created",
    sort: true,
    align: "center",
    type: "dateTime",
  },
  { heading: "Amount", key: "netPayableAmount", align: "center", sort: true },

  { heading: "Status", key: "status", align: "center", type: "title" },
  { heading: "Action", key: "action", type: "action", action: [4] },
];

/**
 * @ORDER_HISTORY_MANAGEMENT_HEADING
 */
export const ORDER_HISTORY_HEADING = [];
/**
 * @SUPPORT_AND_DISPUTE_MANAGEMENT_HEADING
 */
export const SUPPORT_AND_DISPUTE_HEADING = [
  { heading: "Dispute ID", key: "disputeId", align: "center" },
  { heading: "Raised By", key: "raisedBy", align: "center" },
  { heading: "Raised To", key: "raisedTo", align: "center" },
  { heading: "Transaction ID", key: "transactionId", align: "center" },
  { heading: "Order ID", key: "orderId", align: "center" },

  {
    heading: "Dispute Time",
    key: "disputeTime",
    // subKey: "logoutTime",
    align: "center",
    time: true,
    type: "role",
  },
  { heading: "Status", key: "status", align: "center", type: "formatStatus" },
  { heading: "Action", key: "status", type: "action", action: [1, 2] },
];

/**
 * @CALL_DEATIL_HEADING
 */
export const CALL_DEATIL_HEADING = [
  {
    heading: "Mentor Status",
    key: "mentorUser",
    subKey: "callStatus",
    align: "center",
    type: "role",
  },
  {
    heading: "Student Status",
    key: "studentUser",
    subKey: "callStatus",
    align: "center",
    type: "role",
  },
  {
    heading: "Start Time",
    key: "callStartTime",
    align: "center",
    type: "dateTime",
  },
  {
    heading: "End Time",
    key: "callEndTime",
    align: "center",
    type: "dateTime",
  },
  { heading: "Call Duration", key: "duration", align: "center" },
  { heading: "Action", key: "action", type: "action", action: [6, 7] },
];
