// import { COLLEGE_API_ENDPOINT } from "./constant";

/**
 * @Institute_Management_Action_buttons
 */
export const INSTITUTE_MANAGEMENT_ACTIONS = [
  { label: "Add Institute", action: "add" },
  {
    label: "Institute Info",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.collegeInfo,
  },
  {
    label: "Institute Fees",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.collegeFee,
  },
  {
    label: "Placement Data",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.collegePlacement,
  },
  {
    label: "Youtube Links",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.youtubeLink,
  },
];

export const INSTITUTE_DETAIL_ACTIONS = [
  {
    label: "Edit Institute",
    action: "edit",
    icon: "edit",
  },
];

export const TRANSACTION_MANAGEMENT_ACTION = [
  {
    label: "Download",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.collegeFee,
    icon: "download",
  },
];

export const ORDER_HISTORY_ACTION = [
  {
    label: "Download",
    action: "import",
    isDownload: true,
    // apiLink: COLLEGE_API_ENDPOINT.collegeFee,
    icon: "download",
  },
];

export const CALL_AND_CHAT_MANAGEMENT_ACTION = [
  {
    label: "Schedule a Call",
    icon: "add",
  },
];

export const  SUPPURT_AND_DISPUTE_MANAGEMENT_ACTION=[
  {
    label:'Raise a Dispute',
    icon:'add'
  },
  {
    label:'Download',
    icon:'download'
  }
]