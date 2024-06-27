import { Amplify } from "aws-amplify";

const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_REGION,
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_API_URL,
  aws_appsync_region: process.env.REACT_APP_AWS_REGION,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.REACT_APP_API_KEY,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_REGION,
  aws_user_pools_id: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
};

Amplify.configure(amplifyConfig, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
