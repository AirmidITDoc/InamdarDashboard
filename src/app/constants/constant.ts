export const BLOCK_UNBLOCK_STATUS_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Blocked', value: 'blocked' },
  { label: 'Unblocked', value: 'unblocked' },
  { label: 'Reported', value: 'inactive' },
  { label: 'Deleted', value: 'deleted' },
  { label: 'Admin Deleted', value: 'deleted_by_admin' },
];

export const STATUS_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'blocked', value: 'Blocked' },
  { label: 'unblocked', value: 'Unblocked' },
];

/**
 * @PUBLIC_CMS_DATA
 */
export const CMS_DATA = {
  ABOUT_US: {
    title: 'About Us',
    apiEndPoint: 'ABOUT_US',
    type: 'info',
  },
  TERM_CONDITIONS: {
    title: 'Term of use',
    apiEndPoint: 'TERMS_AND_CONDITIONS',
    type: 'info',
  },
  PRIVACY_POLICY: {
    title: 'Privacy Policy',
    apiEndPoint: 'PRIVACY_POLICY',
    type: 'info',
  },
  DISCLAIMER: {
    title: 'Disclaimer',
    apiEndPoint: 'DISCLAIMER',
    type: 'info',
  },
  FAQ: {
    title: "FAQ'S",
    apiEndPoint: 'FAQ',
    type: 'faq',
  },
  CONTACT_US: {
    title: 'Contact Us',
    apiEndPoint: 'CONTACT_US',
    type: 'contact',
  },
};
