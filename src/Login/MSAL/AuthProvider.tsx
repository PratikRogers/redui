import React, { Component } from "react";
import {
    fetchMsGraph,
    // isIE,
    GRAPH_ENDPOINTS,
    // GRAPH_REQUESTS,
    // GRAPH_SCOPES
} from "../ADAL/auth-util";
import { connect } from 'react-redux';
import { ActionConstants, AppConstants } from "src/ConstConfig";
import { userActions } from "src/Actions";
// import { getAuthContext, setAuthContext } from "./msalConfig";

const flow = require('lodash/flow');

// If you support IE, our recommendation is that you sign-in using Redirect APIs
// const useRedirectFlow = isIE();
// const useRedirectFlow = true;

function mapStateToProps(state: any) {
    return {
        
    };
}
export default flow((C: any) =>
    {
        return class AuthProvider extends Component<IAuthProvider, {}> {
            public state:any;
            // private tokenResponse:any;
             constructor(props: any) {
                super(props);
                this.state = {
                    account: null,
                    error: null,
                    emailMessages: null,
                    graphProfile: null
                };
                // this.tokenResponse = null;
                
            }

            getCookieValue(a:any) {
                var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
                return b ? b.pop() : '';
            }

            // async acquireToken(request: any, redirect: any) {
            //     console.log("Acquire Token  ",redirect);

            //     return msalApp.acquireTokenSilent(request).catch<any>(error => {
            //         // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
            //         // due to consent or interaction required ONLY
            //         if (requiresInteraction(error.errorCode)) {
            //             return redirect
            //                 ? msalApp.acquireTokenRedirect(request)
            //                 : msalApp.acquireTokenPopup(request);
            //         }
            //         else {
            //             console.log("The acquire with existing token",getAuthContext());
            //             if (isIE() && getAuthContext().idToken.rawIdToken != "") {
            //                 this.props.handleSubmit(getAuthContext());
            //             }
            //             else if (isIE() && getAuthContext().idToken.rawIdToken == "") {
            //                 if(msalApp.getAccount()) {
            //                     const account = msalApp.getAccount();
            //                     if (account.hasOwnProperty("idToken")) {
            //                         const msalidtoken = "msal."+account.idToken.aud+".idtoken";
            //                         console.log("Getting cookie",msalidtoken, " Token Key" + this.getCookieValue(msalidtoken))
            //                         const token = { idToken:{
            //                             preferredName: account.idToken.preferred_username,
            //                             rawIdToken:this.getCookieValue(msalidtoken),
            //                             name:account.idToken.name
            //                           }}
            //                         console.log("Trying to fetch the id toekn",token);
            //                         setAuthContext(token);
            //                         this.props.handleSubmit(getAuthContext());
            //                     }
            //                 }
                            
            //             }
            //             // console.error('Non-interactive error:', error.errorCode);
            //         }
            //     });
            // }
            // async onSignIn(redirect: any) {
            //     console.log("Is this redirect method",redirect);
            //     // if (!redirect) {
            //     //     return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN);
            //     // }

            //     if (msalApp.getAccount() && !msalApp.isCallback(window.location.hash)) {
            //            const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.LOGIN, true).catch(error => {
            //             this.setState({
            //                 error: error.message
            //             });
            //         });
            //         if (tokenResponse) {
            //             const graphProfile = await fetchMsGraph(GRAPH_ENDPOINTS.ME, tokenResponse.accessToken).catch(() => {
            //                 this.setState({
            //                     error: "Unable to fetch Graph profile."
            //                 });
            //             });
            //              if (graphProfile) {
            //                 this.setState({
            //                     graphProfile
            //                 });
            //             }
            //             if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
            //                 return this.readMail(tokenResponse.accessToken);
            //             }
            //             this.tokenResponse = tokenResponse;
            //             setAuthContext(tokenResponse);
            //             this.props.handleSubmit(this.tokenResponse);
            //         }
            //     } else {
            //         //force the user to sign in
            //         return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN);
            //     }
            //     // const loginResponse = await msalApp
            //     //     .loginPopup(GRAPH_REQUESTS.LOGIN)
            //     //     .catch(error => {
            //     //         this.setState({
            //     //             error: error.message
            //     //         });
            //     //     });
            //     // if (loginResponse) {
            //     //     this.setState({
            //     //         account: loginResponse.account,
            //     //         error: null
            //     //     });
            //     //     const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.LOGIN, true).catch(error => {
            //     //         this.setState({
            //     //             error: error.message
            //     //         });
            //     //     });
            //     //     if (tokenResponse) {
            //     //         console.log("TOken received ",tokenResponse);
            //     //         const graphProfile = await fetchMsGraph(GRAPH_ENDPOINTS.ME, tokenResponse.accessToken).catch(() => {
            //     //             this.setState({
            //     //                 error: "Unable to fetch Graph profile."
            //     //             });
            //     //         });
            //     //          if (graphProfile) {
            //     //             this.setState({
            //     //                 graphProfile
            //     //             });
            //     //         }
            //     //         if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
            //     //             return this.readMail(tokenResponse.accessToken);
            //     //         }
            //     //         this.tokenResponse = tokenResponse;
            //     //         setAuthContext(tokenResponse);
            //     //         this.props.handleSubmit(this.tokenResponse);
            //     //     }
            //     // }
            // }
            // onSignOut() {
            //     msalApp.logout();
            // }
            // async onRequestEmailToken() {
            //     const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.EMAIL, useRedirectFlow).catch(e => {
            //         this.setState({
            //             error: "Unable to acquire access token for reading email."
            //         });
            //     });
            //     if (tokenResponse) {
            //         return this.readMail(tokenResponse.accessToken);
            //     }
            // }
            async readMail(accessToken: any) {
                const emailMessages = await fetchMsGraph(GRAPH_ENDPOINTS.MAIL, accessToken).catch(() => {
                    this.setState({
                        error: "Unable to fetch email messages."
                    });
                });
                if (emailMessages) {
                    this.setState({
                        emailMessages,
                        error: null
                    });
                }
               
            }
            async componentDidMount() {
                // msalApp.handleRedirectCallback(error => {
                //     if (error) {
                //         const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token.";
                //         console.log("Error messeage in Component Mount",errorMessage)
                //         // setState works as long as navigateToLoginRequestUrl: false
                //         this.setState({
                //             error: errorMessage
                //         });
                //     }
                // });
                // const account = msalApp.getAccount();
                this.setState({
                    // account
                });
                // if (account) {
                //     const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.LOGIN, useRedirectFlow);
                //     if (tokenResponse) {
                //         // this.tokenResponse = tokenResponse;
                //         // const graphProfile = await fetchMsGraph(GRAPH_ENDPOINTS.ME, tokenResponse.accessToken).catch(() => {
                //         //     this.setState({
                //         //         error: "Unable to fetch Graph profile."
                //         //     });
                //         // });
                //         // if (graphProfile) {
                //         //     this.setState({
                //         //         graphProfile
                //         //     });
                //         // }
                        
                //         // if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
                //         //     return this.readMail(tokenResponse.accessToken);
                //         // }
                        
                       
                //     }
                //     // tokenResponse;
                // }
            }
            render() {
                return (<C {...this.props}  
                    // onSignIn={this.onSignIn.bind(this,useRedirectFlow)} 
                    account={this.state.account}
                    emailMessages={this.state.emailMessages}
                    error={this.state.error}
                    graphProfile={this.state.graphProfile}
                     
                />);
            }
        };

        
    },connect(mapStateToProps, (dispatch) => {
        return {
            handleSubmit: (token:any) => {
                const userObj = { UserAction: ActionConstants.Login, isLoginSuccessful: AppConstants.Inited ,authContext:token};
                dispatch(userActions(userObj));
              },
          
        }
    }));

    interface IAuthProvider extends React.FC<any> {
       
        handleSubmit?: any;
        
      }