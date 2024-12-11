import { ChallengeGenerateBody } from "../../infra/generated/back-end";
import { backendApi } from "../../infra/services/back-end";

const challengeGeneratePost = async (input: ChallengeGenerateBody) => {
  try {
    const response = await backendApi.challengeGeneratePost(input);

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export { challengeGeneratePost };
