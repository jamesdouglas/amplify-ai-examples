import { defineAuth } from "@aws-amplify/backend"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: true,
  },
  multifactor: {
    mode: "OPTIONAL",
    sms: true,
    totp: false,
  },
  // Important! The logic to resolve this value cannot determine whether email mfa is enabled when overriding the resource.
  // Be sure to pick a recovery option appropriate for your application.
  accountRecovery: "EMAIL_AND_PHONE_WITHOUT_MFA",
  senders: {
    email: {
      fromEmail: "auth@callrocket.net",
    },
  },
})
