import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});
// extract L1 CfnUserPool resources
const { cfnUserPool, cfnUserPoolClient } = backend.auth.resources.cfnResources;
// modify cfnUserPool policies directly
cfnUserPool.policies = {
  passwordPolicy: {
    minimumLength: 12,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    requireUppercase: true,
    temporaryPasswordValidityDays: 3,
  },
};

cfnUserPool.addPropertyOverride(
	'Policies.SignInPolicy.AllowedFirstAuthFactors',
	['PASSWORD', 'WEB_AUTHN', 'EMAIL_OTP', 'SMS_OTP']
);

cfnUserPoolClient.explicitAuthFlows = [
	'ALLOW_REFRESH_TOKEN_AUTH',
	'ALLOW_USER_AUTH'
];

/* Needed for WebAuthn */
cfnUserPool.addPropertyOverride('WebAuthnRelyingPartyID', '<RELYING_PARTY>');
cfnUserPool.addPropertyOverride('WebAuthnUserVerification', 'preferred');
