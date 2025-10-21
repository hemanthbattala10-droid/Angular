import { OktaAuthOptions } from '@okta/okta-auth-js';

export const oktaConfig: OktaAuthOptions = {
  issuer: 'https://demo-azure-marsupial-56101.okta.com/oauth2/ausjfu4hbumYKoFdA697',
  clientId: '0oajfu7rpj65M2FAh697',
  redirectUri: window.location.origin + '/login/callback',
  pkce: true,
  scopes: ['openid', 'profile', 'email']
};
