/* eslint-disable */
import { UserOps } from "./UserOps";

export class Configs {

     baseUrl: any;
     apiPath: any;
     port: number;
     prefix: string;
     loginUrl: any;
     logoutUrl: any;
     segmentGetUrl: any;
     segmentPostUrl: any;
     segmentAdvanceModeUrl: string;


     audienceListUrl: string;
     audienceEditListUrl: string;
     deleteAudienceListUrl: string;
     saveAudienceListUrl: string;
     overwriteAudienceListUrl: string;

     dashboardUrl: String;
     dashboardGeopMapUrl: String;
     dashboardPreflightAPIUrl: String;
     dashboardLineChartAPIUrl: String;

     insightsAListAPI: String;
     insightsAdvModeApi: String;
     insightsASizerAPI: String;

     emailUrl: String;

     userRoleUrl: String;
     adminUserUrl: String;
     audienceTraitUrl: String;
     audienceTraitSortUrl: String;


     reportSerachUrl: String;
     reportDownloadUrl: String;
     reportListUrl: String;

     campaignStatusUrl: String;
     cmrFileUploadUrl: String;
     crmListUrl: String;


     getAudienceListUrl() {
        return this.audienceListUrl;
    }
     getEditAudienceListUrl() {
        return this.audienceEditListUrl;
    }
     getDeleteAudienceListUrl() {
        return this.deleteAudienceListUrl;
    }
     getSaveAudienceListUrl(overWrite?: any) {
        if (overWrite && overWrite === true) {
            return this.overwriteAudienceListUrl
        }
        return this.saveAudienceListUrl;
    }

     getDashboardUrl() {
        return this.dashboardUrl;
    }
     getGeoMapUrl() {
        return this.dashboardGeopMapUrl;
    }
     getDashboardPreflightAPIUrl() {
        return this.dashboardPreflightAPIUrl;
    }

     getLineChartUrl() {
        return this.dashboardLineChartAPIUrl;
    }

     getCampaignEmailUrl() {
        return this.emailUrl;
    }

     getInsightsAPI(source: any) {
        if (source === UserOps.AUDIENCELIST) {
            return this.insightsAListAPI;
        }
        return this.insightsASizerAPI;
    }

     getInsightsAdvanceModeAPI() {
        return this.insightsAdvModeApi;
    }

    /* Admin APIs */
     getUserRoleUrl() {
        return this.userRoleUrl;
    }
     getListUsersUrl() {
        return this.adminUserUrl;
    }
     getEditUserUrl() {
        return this.adminUserUrl;
    }
     getDeleteUserUrl() {
        return this.adminUserUrl;
    }
     getAddUserUrl() {
        return this.adminUserUrl;
    }


     getListAudienceTraitUrl() {
        return this.audienceTraitUrl;
    }
     getEditAudienceTraitUrl() {
        return this.audienceTraitUrl;
    }
     getDeleteAudienceTraitUrl() {
        return this.audienceTraitUrl;
    }
     getSortAudienceTraitUrl() {
        return this.audienceTraitSortUrl;
    }

     getReportSearchUrl() {
        return this.reportSerachUrl;
    }
     getReportDownloadUrl() {
        return this.reportDownloadUrl;
    }
     getReportListUrl() {
        return this.reportListUrl;
    }
    

     getCampaignStatusUrl() {
        return this.campaignStatusUrl;
    }

     getAdvanceModeAPIUrl() {
        return this.segmentAdvanceModeUrl;
    }

     getCRMListUrl(){
        return this.crmListUrl;
    }

    /* File */
    
     getCRMFileUploadUrl() {
        return this.cmrFileUploadUrl;
    }

    constructor() {
        let hostname = window && window.location && window.location.host;
        let isLocalHost = false;
        if (hostname === "localhost:3000") {
            isLocalHost = true;
        }
        this.prefix = ":";
        this.port = 443;

        // hostname = "https://ehdpde101.dev.dmt.rogers.com";
        this.baseUrl = "https://" + hostname + this.prefix + this.port + "/";
        if (isLocalHost) {
            this.baseUrl = "/";
        }
        this.apiPath = "RED/";
        this.loginUrl = this.baseUrl + this.apiPath + "getAuthToken";
        this.logoutUrl = this.baseUrl + this.apiPath + "logout";
        this.segmentGetUrl = this.baseUrl + this.apiPath + "app/getSegmentLabels";
        this.segmentPostUrl = this.baseUrl + this.apiPath + "app/getAudienceListCounts";

        this.saveAudienceListUrl = this.baseUrl + this.apiPath + "app/saveAudiences";
        this.overwriteAudienceListUrl = this.baseUrl + this.apiPath + "app/updateAudience";
        this.audienceListUrl = this.baseUrl + this.apiPath + "app/listAudience";
        this.audienceEditListUrl = this.baseUrl + this.apiPath + "app/editAudience";
        this.deleteAudienceListUrl = this.baseUrl + this.apiPath + "app/deleteAudience";

        this.dashboardUrl = this.baseUrl + this.apiPath + "app/getDashBoardDetails";
        this.dashboardGeopMapUrl = this.baseUrl + this.apiPath + "app/GeoMap";
        this.dashboardPreflightAPIUrl = this.baseUrl + this.apiPath + "app/dashBoardDates";
        this.emailUrl = this.baseUrl + this.apiPath + "app/sendMail";
        this.dashboardLineChartAPIUrl = this.baseUrl + this.apiPath + "app/lineCharts";
        this.insightsAListAPI = this.baseUrl + this.apiPath + "app/audianceBuilderInsight/launchInsights";
        this.insightsASizerAPI = this.baseUrl + this.apiPath + "app/audianceBuilderInsight";

        this.userRoleUrl = this.baseUrl + this.apiPath + "app/getLoggedInUserDetail";
        this.adminUserUrl = this.baseUrl + this.apiPath + "app/admin/users";

        this.audienceTraitUrl = this.baseUrl + this.apiPath + "app/admin/segments";
        this.reportSerachUrl = this.baseUrl + this.apiPath + "app/report/checkFilesAvailability";
        this.reportDownloadUrl = this.baseUrl + this.apiPath + "app/report/downloadFile";
        this.reportListUrl = this.baseUrl + this.apiPath + "app/report/getReports";

        this.audienceTraitSortUrl = this.baseUrl + this.apiPath + "app/admin/moveSegments";
        this.campaignStatusUrl = this.baseUrl + this.apiPath + "app/getCampaign";

        this.segmentAdvanceModeUrl = this.baseUrl + this.apiPath + "app/getAudienceListCountsAdvanceMode";
        this.insightsAdvModeApi = this.baseUrl + this.apiPath + "app/audianceBuilderInsightAdvanceMode";


        this.cmrFileUploadUrl  = this.baseUrl + this.apiPath + "app/data/upload";
        this.crmListUrl = this.baseUrl + this.apiPath + "app/data/getCrmDetails";
    }
}
export default Configs;