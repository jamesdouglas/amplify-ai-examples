import { defineAuth } from "@aws-amplify/backend"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true
  },
  // Important! The logic to resolve this value cannot determine whether email mfa is enabled when overriding the resource.
  // Be sure to pick a recovery option appropriate for your application.
  accountRecovery: "EMAIL_ONLY",
})
