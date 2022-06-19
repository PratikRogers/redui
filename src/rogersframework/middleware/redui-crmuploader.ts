/* eslint-disable */
import { AxiosClient } from '../ClientServices/AxiosClient';
import { submitUIConfigAction, updateCRMStateMessage, submitSpinnerAction, broadcastCRMStat, requestCRMStat, updateProgressCRM } from '../../Actions';
import { UserOps } from '../../ConstConfig/UserOps';
import { List } from 'immutable';
import { getAuthContext } from 'src/Login/MSAL/msalConfig';

const reduiCRMUploaderMiddleWare = (store: any) => (next: any) => (action: any) => {
  if (action && action.hasOwnProperty('type') && ((action.type === 'UPLOADCRM') || (action.type === 'LISTALL_CRM'))) {
    const clnt = new AxiosClient(store);
    const token = getAuthContext().idToken.rawIdToken;

    let userAction = action.type;

    switch (userAction) {
      case 'UPLOADCRM': {
        const reqObjectSeg = { authToken: token, url: action.payload.data.url };
        const filePayload = action.payload.data.payload;

        if (action.payload.data.fileSize > 524288000) {
          const messageBoxObj = { Dialog: { MessageBox: { isVisible: true, UserMessage: ' This file is too large for processing', saveFailed: false, boxButtons: UserOps.OK, messageHead: 'Error!', popupAuto: true } } };

          store.dispatch(submitUIConfigAction(messageBoxObj));
          return;
        }
        clnt.postFiles(reqObjectSeg, filePayload).then((returnVal: any) => {
          console.log('returnVal===', returnVal);
          if ((returnVal.hasOwnProperty('status') && returnVal.status >= 400 && returnVal.status < 600)) {
            const messageBoxObj = { Dialog: { MessageBox: { isVisible: true, UserMessage: ' Unable to upload the file', saveFailed: false, boxButtons: UserOps.OK, messageHead: 'Error!', popupAuto: true } } };

            store.dispatch(submitUIConfigAction(messageBoxObj));
          } else {
            console.log('Sending the 100%');
            store.dispatch(updateProgressCRM({ data: { loaded: 100, total: 100 } }));

            if (returnVal.hasOwnProperty('status') && (returnVal.status === false || returnVal.status === null)) {
              store.dispatch(updateCRMStateMessage({ data: { msg: 'File upload operation failed. Please try again later' } }));
            } else if (returnVal.hasOwnProperty('status') && (returnVal.status === 'Failure')) {
              store.dispatch(updateCRMStateMessage({ data: { msg: returnVal.message } }));
            } else {
              store.dispatch(updateCRMStateMessage({ data: { msg: "Thank you, your file has been received and we're processing the following columns: " + returnVal.validHeaders.join(', ') } }));
              const dummyUserObj = { type: UserOps.LISTALL_CRM, data: { url: action.payload.data.crmReportUrl, type: UserOps.LISTALL_CRM } };

              store.dispatch(requestCRMStat(dummyUserObj));
              dummyUserObj.data.url = '';
              dummyUserObj.data.type = UserOps.NONE;
              store.dispatch(requestCRMStat(dummyUserObj)); ({ url: '', type: '' });
            }

          }

        });
      }
        break;
      case 'LISTALL_CRM': {
        console.log("action===", action);
        const reqObjectSeg = { authToken: token, url: action.payload.data.url };

        clnt.getResponse(reqObjectSeg.url, reqObjectSeg).then((returnVal: any) => {
          let data = {};

          if ((returnVal.status >= 400 && returnVal.status < 600)) {
            data = List([]);
          } else {
            if (returnVal instanceof Array) {
              data = { CRMSList: List(returnVal) };
            } else {
              data = List([]);
            }
          }
          store.dispatch(broadcastCRMStat(data));
          let spinnerState = { UIConfig: { isSpinnerActive: false } };

          store.dispatch(submitSpinnerAction(spinnerState));
        });
      }
        break;
    }
  }
  // eslint-disable-next-line consistent-return
  return next(action);
};

export default reduiCRMUploaderMiddleWare;
