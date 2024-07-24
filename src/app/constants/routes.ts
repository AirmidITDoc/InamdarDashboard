import { Iroute } from './interface';

/**
 * @ABS === ACCOUNT
 */
export const ACCOUNT: Iroute = {
  path: 'account',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LOGIN: Iroute = {
  path: 'login',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const FORGOT_PASSWORD: Iroute = {
  path: 'forgot-password',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const FORGOT_PASSWORD_SUCCESS: Iroute = {
  path: 'forgot-password-successfull',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const RESET_PASSWORD: Iroute = {
  path: 'reset-password',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const VERIFY_OTP: Iroute = {
  path: 'verify-otp',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

/**
 * @ABS === LAYOUT
 */
export const LAYOUT: Iroute = {
  path: 'layout',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

/**
 * @ABS === DASHBOARD
 */
export const DASHBOARD: Iroute = {
  path: 'dashboard',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const USER_MANAGEMENT: Iroute = {
  path: 'category-wise',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const HEALTHY_RECOMMENDATION: Iroute = {
  path: 'healthy-recommendation',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

/**
 * @ABS === PROFILE
 */
export const PROFILE: Iroute = {
  path: 'profile',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const PROFILE_EDIT: Iroute = {
  path: 'edit',
  get fullUrl(): string {
    return `${PROFILE.fullUrl}/${this.path}`;
  },
};

export const DETAILS: Iroute = {
  path: 'detal',
  get fullUrl(): string {
    return `${PROFILE.fullUrl}/${this.path}`;
  },
};

/**
 * @ABS === CMS
 */
export const CMS: Iroute = {
  path: 'cms',
  get fullUrl(): string {
    return `${PROFILE.fullUrl}/${this.path}`;
  },
};
export const TERM_CONDITIONS: Iroute = {
  path: 'terms-&-conditions',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const PRIVACY_POLICY: Iroute = {
  path: 'privacy-policy',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const ABOUT_US: Iroute = {
  path: 'about-us',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const DATA_POLICY: Iroute = {
  path: 'data-policy',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const COMMUNITY_GUIDELINES: Iroute = {
  path: 'community-guidelines',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const COPYRIGHT_POLICY: Iroute = {
  path: 'copyright-policy',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const FAQ: Iroute = {
  path: 'faq',
  get fullUrl(): string {
    return `${CMS.fullUrl}/${this.path}`;
  },
};
export const ADD_FAQ: Iroute = {
  path: 'add-faq',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
export const EDIT_FAQ: Iroute = {
  path: 'edit-faq',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};

export const SUB_ADMINS: Iroute = {
  path: 'sub-admins',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
export const ADD_SUB_ADMINS: Iroute = {
  path: 'add-sub-admins',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
export const EDIT_SUB_ADMINS: Iroute = {
  path: 'edit-sub-admins',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
export const ADD_ROLES: Iroute = {
  path: 'add-roles',
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
