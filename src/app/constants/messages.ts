import {
  PRIVACY_POLICY,
  TERM_CONDITIONS,
  ABOUT_US,
  FAQ,
  DATA_POLICY,
  COPYRIGHT_POLICY,
  HEALTHY_RECOMMENDATION,
  COMMUNITY_GUIDELINES,
} from './routes';

export const OFFLINE = 'Connection lost! You are not connected to Internet';
export const ONLINE = 'Back to online';
export const NO_INTERNET = 'No Internet Connection';
export const TIME_OUT = 'Connection timed out. Please retry';
export const INTERNAL_SERVER_ERROR =
  "Couldn't connect to the server. Please try again";
export const FAQ_DELETED = 'Faq deleted successfully';
export const FAQ_STATUS = 'Faq status updated successfully';
export const INVALID_ID_ERROR = 'Invalid ID';
export const VERIFICATION_CODE = 'Please enter verification code';
export const SOMETHING_WRONG = 'Something went wrong, Please try again later';
export const NO_ACTION = "You can't perform this action";
export const MAX_VIDEO_SIZE = 10000000;
export const VIDEO_FORMAT = 'video/mp4,video/gif';
export const ACCOUNT_ERROR_MESSAGES = {
  NAME_REQ: 'Please enter name',
  FIRST_NAME_REQ: 'Please enter first name',
  LAST_NAME_REQ: 'Please enter last name',
  MIN_NAME_REQ: 'Please enter atleast 3 characters',
  MOBILE_REQ: 'Please enter phone number',
  INVALID_MOBILE: 'Please enter a valid phone number',
  MIN_MOBILE: 'Please enter atleast 10 digit phone number',
  PASSWORD_REQ: 'Please enter password',
  INVALID_PASSWORD:
    'Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_PASSWORD: "Password can't start or end with a blank space",
  EMAIL_REQ: 'Please enter email address',
  INVALID_EMAIL: 'Please enter a valid email address',
  ONLY_ALPHABET: 'Only alphabets are allowed',
};

// export const ADD_CLINICIAN_ERROR_MESSAGES = {
//   NAME_REQ: "Please enter name",
//   INVALID_NAME_REQ: "Please enter valid name",
//   SPECIALITY_REQ: "Please enter speciality",
//   INVALID_SPECIALITY_REQ: "Please enter valid speciality",
//   CLINIC_REQ: "Please enter practice/clinic name",
//   INVALID_CLINIC_REQ: "Please enter valid practice/clinic name",
//   PROFESSIONAL_REQ: "Please enter professional/credentials",
//   YOP_REQ: "Please enter year of practice",
//   EMAIL_REQ: "Please enter email address",
//   INVALID_EMAIL: "Please enter a valid email address",
//   ZIP_CODE_REQ: "Please enter Zip Code",
//   INVALID_ZIP_CODE_REQ: "Zip code must contain only digit",
//   SUBSCRIPTION_REQ: "Please enter subscription plan type",
//   INVALID_SUBSCRIPTION_REQ: "Please enter valid subscription plan type",
//   COUNTRY_REQ: "Please enter country",
//   INVALID_COUNTRY_REQ: "Please enter valid country",
// };
// export const ADD_CATEGORY_ERROR_MESSAGES = {
//   CATEGORY_NAME_REQ: "Please enter category name",
//   INVALID_CATEGORY_NAME_REQ: "Please enter characters only",
//   CATEGORY_NAME_LENGTH: "Please enter 50 characters only",
//   MODULE_NAME_REQ: "Please select module name",
// };
// export const ADD_HEALTHY_RECOM_ERROR_MESSAGES = {
//   HEALTHY_RECOMMENDATION_NAME_REQ: "Please enter healthy recommendation name",
//   HEALTHY_RECOMMENDATION_NAME_LENGTH: "Please enter 50 characters only",
//   INVALID_HEALTHY_RECOMMENDATION_NAME_REQ: "Please enter characters only",
//   HEALTHY_RECOMMENDATION_CATEGORY_REQ: "Please select category name",
//   DESCRIPTION_REQ: "Please enter description",
//   DESCRIPTION_LENGTH: "Please enter 250 characters only",
// };
// export const EDUCATIONAL_MEDIA_ERR_MSG = {
//   EDUCATIONAL_MEDIA_NAME_REQ: "Please enter media name",
//   EDUCATIONAL_MEDIA_NAME_LENGTH: "Please enter 50 characters only",
//   INVALID_EDUCATIONAL_MEDIA_NAME_REQ: "Please enter characters only",
//   EDUCATIONAL_MEDIA_CATEGORY_REQ: "Please select category name",
//   EDUCATIONAL_MEDIA_MEDIA_TYPE_REQ: "Please select media type",
//   EDUCATIONAL_MEDIA_LINK_REQ: "Please enter media link",
//   INVALID_EDUCATIONAL_MEDIA_LINK_REQ: "Please enter valid link",
//   DESCRIPTION_REQ: "Please enter description",
//   DESCRIPTION_LENGTH: "Please enter 250 characters only",
// };
// export const INTAKE_FORM_ERR_MSG = {
//   INTAKE_NAME_REQ: "Please enter media name",
//   INTAKE_NAME_LENGTH: "Please enter 50 characters only",
//   MIN_LENGTH: "Min. 3 characters allowed",
//   INVALID_INTAKE_NAME_REQ: "Please enter characters only",
//   INTAKE_CATEGORY_REQ: "Please select category name",
//   DESCRIPTION_REQ: "Please enter description",
//   DESCRIPTION_LENGTH: "Please enter 250 characters only",
// };
export const UPLOAD_THUMBNAIL = 'Please upload thumbnail';
export const UPLOAD_VIDEO = 'Please upload video';
export const UPLOAD_PDF = 'Please upload pdf';
export const EDUCATIONAL_MEDIA_UPDATED =
  'Educational media updated successfully';
export const EDUCATIONAL_MEDIA_ADDED = 'Educational media added successfully';
export const RECOMMENDATION_UPDATED = 'Recommendation updated successfully';
export const RECOMMENDATION_ADDED = 'Recommendation added successfully';
export const CATEGORY_UPDATED = 'Category updated successfully';
export const CATEGORY_ADDED = 'Category added successfully';
export const PASSWORD_ERROR_MESSAGES = {
  OLD_PASSWORD_REQ: 'Please enter old password',
  INVALID_OLD_PASSWORD:
    'Old password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_OLD_PASSWORD: "Old password can't start or end with a blank space",
  NEW_PASSWORD_REQ: 'Please enter new password',
  INVALID_NEW_PASSWORD:
    'New password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_NEW_PASSWORD: "New password can't start or end with a blank space",
  C_PASSWORD_REQ: 'Please enter confirm new password',
  INVALID_C_PASSWORD:
    'Confirm new password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_C_PASSWORD:
    "Confirm new password can't start or end with a blank space",
  CONFORM_PASSWORD_MATCH_ERR:
    'New password and confirm new password not matched',
  OLD_NEW_PASSWORD_MATCH_ERR: "Old & New password can't be the same",
  WRONG_OLD_PASSWORD: 'Entered old password was incorrect',
};

export const MEDIA_TYPE = [
  { label: 'Video', value: 'Video' },
  { label: 'Document', value: 'Document' },
  { label: 'Link', value: 'Link' },
];

const YEARS_OF_EXP = () => {
  let listData = [];
  for (let i = 2; i <= 60; i++) {
    listData.push({ name: `${i + ' Years'}`, value: i });
  }

  return listData;
};
export const YEARS_OF_EXP_LIST = [
  { name: '1 Year', value: 1 },
  ...YEARS_OF_EXP(),
];

export const PLAN_TYPE = [
  { name: 'Monthly', value: 'Monthly' },
  { name: 'Quaterly', value: 'Quaterly' },
  { name: 'Yearly', value: 'Yearly' },
];

export const LISTING_COMMON_MESSAGES = {
  ACTIVE_TITLE: 'Unblock Confirmation',
  ACTIVATE_TITLE: 'Active Confirmation',
  BLOCK_TITLE: 'Block Confirmation',
  INACTIVATE_TITLE: 'Inactive Confirmation',
  DELETE_TITLE: 'Delete Confirmation',
  ACTIVE_MSG: 'Are you sure you want to unblock',
  ACTIVATE_MSG: 'Are you sure you want to activate',
  BLOCK_MSG: 'Are you sure you want to block',
  INACTIVATE_MSG: 'Are you sure you want to block',
  DELETE_MSG: 'Are you sure you want to delete',
};
export const CMS_TAB_LINKS = [
  { path: PRIVACY_POLICY, label: 'Privacy Policy' },
  { path: TERM_CONDITIONS, label: 'Terms & Condition' },
  { path: COMMUNITY_GUIDELINES, label: 'Community Guidelines' },
  { path: DATA_POLICY, label: 'Data Policy' },
  { path: COPYRIGHT_POLICY, label: 'Copyright Policy' },
  { path: ABOUT_US, label: 'About Us' },
  { path: FAQ, label: 'FAQ' },
];

export const BANNER_ERROR_MESSAGES = {
  TITLE_REQ: 'Please enter banner title',
  HEADING_REQ: 'Please enter banner heading',
  IMG_REQ: 'Please select atleast one banner image',
  CONTENT_REQ: 'Please fill banner content',
};

export const SUB_ADMIN_ERROR_MESSAGES = {
  NAME_REQ: 'Please enter name',
  EMAIL_REQ: 'Please enter email address',
  INVALID_EMAIL: 'Please enter a valid email address',
  ROLE_REQ: 'Please select sub admin role',
};

export const NOTIFICATION_ERROR_MESSAGES = {
  TITLE_REQ: 'Please enter title',
  MESSAGE_REQ: 'Please enter message',
  PLATFORM_REQ: 'Please select platform',
  DATE_REQ: 'Please select date',
  TIME_REQ: 'Please select time',
};

export const MAX_IMG_SELECTION = 4;
export const FILE_EXIST = 'Selected image is already exist';
export const MAX_IMG_SELECTION_ERR = (count = MAX_IMG_SELECTION) =>
  `You can select upto ${count} images only`;
export const FUTURE_TIME = 'Please select future time';

export const FAQ_ERROR_MESSAGES = {
  QUESTION_REQ: 'Please enter question',
  ORDER_REQ: 'Please enter question display order',
  INVALID_ORDER: 'Question display order should be greater than Zero',
  ANSWER_REQ: 'Please enter answer',
};

export const S3_BUCKET_ERROR = 'Network Failure or Sync up your system clock';
export const BULK_EROR =
  'Please filter the athletes first on behalf of workout before performing the bulk operation';
export const ACTION_ERROR = (type: any) => `Please wait for ${type} action`;
export const TITLE_CONFIRMATION = (titleText: string) =>
  `${titleText} Confirmation`;
export const MSSG_CONFIRMATION = (MssgText: string) =>
  `Are you sure you want to ${MssgText}?`;

export const EDITOR_COMMON_MESSAGES = {
  CONTENT_REQ: 'Please fill some information about page',
  CMS_ACTION: (action: string) => `Content ${action} successfully`,
};

export const DATE_TYPES = {
  SHORT_TIME: 'h:mm a',
  MEDIUM_DATE: 'MMM d, yyyy',
  FULL_DATE: 'EE, MMM d, yyyy',
  VALIDITY_TIME: 'MMM d, y - hh:mm:ss a',
  DATE_WITH_TIME: 'MMM d, y - hh:mm a',
  DATE_TIME_WITH_COMMA_SEP: 'MMM d, y, hh:mm a',
};

export const LIST_TYPE = {
  LISTING: 'LISTING',
  CSV: 'CSV',
};

export const USER_STATUS = [
  { name: 'Active', value: 'ACTIVE' },
  { name: 'Blocked', value: 'INACTIVE' },
];
export const APPOINMENT_STATUS = [
  { name: 'Cancelled', value: 'CANCELLED' },
  { name: 'Completed', value: 'COMPLETED' },
  { name: 'Upcomming', value: 'UPCOMMING' },
];
export const APPOINTMENT_TYPE = [
  { name: 'Tele-Visit', value: 'VISIT' },
  { name: 'In-Person', value: 'PERSON' },
];
export const STATUS = [
  { name: 'Active', value: 2 },
  { name: 'Inactive', value: 1 },
];

export const BANNER_TEMPLATE_TYPE = [
  { name: 'After Login', value: 'AFTER_LOGIN' },
  { name: 'Before Login', value: 'BEFORE_LOGIN' },
  { name: 'Both', value: 'BOTH' },
];

export const NOTIFICATION_PLATFORM = [
  { name: 'All', value: 4 },
  { name: 'Android', value: 1 },
  { name: 'iOS', value: 2 },
  { name: 'Web', value: 3 },
];

export const formatPlatform = (platform: any) => {
  switch (platform) {
    case NOTIFICATION_PLATFORM[0].value:
      return NOTIFICATION_PLATFORM[0].name;

    case NOTIFICATION_PLATFORM[1].value:
      return NOTIFICATION_PLATFORM[1].name;

    case NOTIFICATION_PLATFORM[2].value:
      return NOTIFICATION_PLATFORM[2].name;

    case NOTIFICATION_PLATFORM[3].value:
      return NOTIFICATION_PLATFORM[3].name;

    default:
      return '-';
  }
};

export const CONTENT_TYPES = {
  TERMS_AND_CONDITIONS: 'Terms %26 Condition',
  PRIVACY_POLICY: 'Privacy Policy',
  DATA_POLICY: 'Data Policy',
  COMMUNITY_GUIDLINES: 'Community Guidelines',
  COPYRIGHT_POLICY: 'Copyright Policy',
  ABOUT_US: 'About Us',
  FAQ: 'FAQ',
};

export const NOTIFICATION_STATUS = {
  SENT: 'SENT',
  DRAFTED: 'DRAFTED',
  SCHEDULED: 'SCHEDULED',
};

export const NOTIFICATION_STATUS_LIST = [
  { name: 'Sent', value: NOTIFICATION_STATUS.SENT },
  { name: 'Drafted', value: NOTIFICATION_STATUS.DRAFTED },
  { name: 'Scheduled', value: NOTIFICATION_STATUS.SCHEDULED },
];

/**
 * @ROLE_MANAGEMENT_RELATED_STUFF
 */
export const MODULE_ID_OF = {
  BANNERS: '1',
  BROADCAST_NOTIFICATIONS: '2',
  CMS: '3',
};

export const MANAGE_TYPE_OF = {
  BANNERS: 'Banner Management',
  BROADCAST_NOTIFICATIONS: 'Notification Management',
  CMS: 'Content Management',
};

export const PERMISSIONS = [
  { module: MANAGE_TYPE_OF.BANNERS, moduleId: MODULE_ID_OF.BANNERS },
  {
    module: MANAGE_TYPE_OF.BROADCAST_NOTIFICATIONS,
    moduleId: MODULE_ID_OF.BROADCAST_NOTIFICATIONS,
  },
  { module: MANAGE_TYPE_OF.CMS, moduleId: MODULE_ID_OF.CMS },
];
