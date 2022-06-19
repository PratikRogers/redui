/* eslint-disable */
import { createAction } from "redux-actions";
import ActionConstants from "./ConstConfig/ActionConstants";
export const setInitializing = createAction<void>("SET_INIT");
export const showErrorBox = createAction<any>("SHOW_ERROR_SCREEN");
export const incrementcounter = createAction<void>("INCREMENT");
export const userActions = createAction<any>(ActionConstants.UserLogin);
export const userCredentials = createAction<any>("USER_ENTRIES");
export const startLoader = createAction<any>("START_LOADER");
export const stopLoader = createAction<any>("STOP_LOADER");
export const slickStateAction = createAction<any>("CHANGE_SLICK");
export const configurationStateAction = createAction<any>(ActionConstants.ChangeConfig);
export const addItemToDropZone = createAction<any>("DROP_INDDZONE");
export const submitSegmentRequest = createAction<any>("SEGMENT_REQ");
export const submitWizardAction = createAction<any>("WIZARDSTATS");
export const submiSizingChangeAction = createAction<any>("SIZING_RESPONSE");
export const submiDragAction = createAction<any>("DRAGITEM");
export const submitUIConfigAction = createAction<any>(ActionConstants.UIConfig);
export const submitSpinnerAction = createAction<any>(ActionConstants.SpinnerConfig);

export const AudienceAction = createAction<any>(ActionConstants.Audiences);
export const AudienceStatusAction = createAction<any>(ActionConstants.AudienceStatus);

export const DashboardDateControlAction = createAction<any>(ActionConstants.DashboardDateControl);
export const CampaignCtrlAction = createAction<any>(ActionConstants.CAMPAIGNCONTROL);
export const sendEmailAction = createAction<any>(ActionConstants.CREATECAMPAIGN);

export const setToggleStateAction = createAction<any>(ActionConstants.TOGGLE_BUTTON_STATE);
export const setGEOMapStateAction = createAction<any>(ActionConstants.GEOMAP_STATE);
export const setInsightStateAction = createAction<any>(ActionConstants.INSIGHT_STATE);

export const geoMapAction = createAction<any>(ActionConstants.GEOMAP_APISTATE);
export const sendFeedbackAction = createAction<any>(ActionConstants.SEND_FEEDBACK);
export const sendDashboardGenderStateAction = createAction<any>(ActionConstants.DashboardGenderState);

export const sendPreflightDateAction = createAction<any>(ActionConstants.PREFLIGHT_GENDATA);

export const sendLineChartAction = createAction<any>(ActionConstants.LINECHART);
export const sendInsightAPIStateAction = createAction<any>(ActionConstants.INSIGHT_API_STATE);
export const progressStateAction = createAction<any>(ActionConstants.PROGRESS_BAR_STATE);
export const calendarChangeAction = createAction<any>(ActionConstants.CALENDAR_STATE);
 
/*Admin */
export const sendAdminUserRoleAction = createAction<any>(ActionConstants.ADMIN_USER_FETCH_ROLE);
export const sendAdminUserListAction = createAction<any>(ActionConstants.ADMIN_USER_LISTING);
export const sendAdminUserAddAction = createAction<any>(ActionConstants.ADMIN_USER_ADD);
export const sendAdminUserEditAction = createAction<any>(ActionConstants.ADMIN_USER_EDIT);
export const sendAdminUserDeleteAction = createAction<any>(ActionConstants.ADMIN_USER_DELETE);


/*Admin */
export const sendAdminAudienceTraitListAction = createAction<any>(ActionConstants.ADMIN_TRAIT_LISTING);
export const sendAdminAudienceTraitAddAction = createAction<any>(ActionConstants.ADMIN_TRAIT_ADD);
export const sendAdminAudienceTraitEditAction = createAction<any>(ActionConstants.ADMIN_TRAIT_EDIT);
export const sendAdminAudienceTraitDeleteAction = createAction<any>(ActionConstants.ADMIN_TRAIT_DELETE);
export const sendAdminAudienceTraitPaginationAction = createAction<any>(ActionConstants.ADMIN_TRAIT_PAGINATION);


/*Report */
export const searchReportAction = createAction<any>(ActionConstants.SEARCH_REPORT);
export const reportResponseAction = createAction<any>(ActionConstants.REPORT_RESPONSE);
export const downloadReportAction = createAction<any>(ActionConstants.REPORT_DOWNLOAD);
export const displayReportListAction = createAction<any>(ActionConstants.REPORT_LISTRESPONSE);

/* Flyout */

export const submitFlyoutConfigAction = createAction<any>(ActionConstants.FLYOUTCONFIG);


/* DAL */
export const campaignStatusAction = createAction<any>(ActionConstants.CAMPAIGNDAL);
export const campaignDALStatusAction = createAction<any>(ActionConstants.CAMPAIGNSTATUS);

export const uploadCMRFile = createAction<any>(ActionConstants.UPLOADCRM);
export const updateProgressCRM = createAction<any>(ActionConstants.PROGRESS);
export const updateCRMStateMessage = createAction<any>(ActionConstants.CRMMSG);

export const broadcastCRMStat = createAction<any>(ActionConstants.CRMLISTSTAT);
export const requestCRMStat = createAction<any>(ActionConstants.LISTALL_CRM);
