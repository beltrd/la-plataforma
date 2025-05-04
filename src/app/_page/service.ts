import {
  ChallengeGenerateBody,
  InlineResponse2003,
} from "../../infra/generated/back-end";
import { backendApi } from "../../infra/services/back-end";

const challengeGeneratePost = async (
  input: ChallengeGenerateBody
): Promise<InlineResponse2003> => {
  try {
    const response = await backendApi.challengeGeneratePost(input);

    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export { challengeGeneratePost };
