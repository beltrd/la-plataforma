/* tslint:disable */
/* eslint-disable */
/**
 * SampleApi
 * Sample backend service
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ChallengegenerateBrowser } from './challengegenerate-browser';
import { ChallengegenerateClient } from './challengegenerate-client';
import { ChallengegenerateOs } from './challengegenerate-os';
import { ChallengegeneratePlatform } from './challengegenerate-platform';
 /**
 * 
 *
 * @export
 * @interface ChallengeRespondBody
 */
export interface ChallengeRespondBody {

    /**
     * @type {string}
     * @memberof ChallengeRespondBody
     */
    challenge: string;

    /**
     * @type {string}
     * @memberof ChallengeRespondBody
     */
    id: string;

    /**
     * @type {string}
     * @memberof ChallengeRespondBody
     */
    model?: string;

    /**
     * @type {ChallengegenerateOs}
     * @memberof ChallengeRespondBody
     */
    os?: ChallengegenerateOs;

    /**
     * @type {ChallengegenerateBrowser}
     * @memberof ChallengeRespondBody
     */
    browser?: ChallengegenerateBrowser;

    /**
     * @type {ChallengegeneratePlatform}
     * @memberof ChallengeRespondBody
     */
    platform?: ChallengegeneratePlatform;

    /**
     * @type {ChallengegenerateClient}
     * @memberof ChallengeRespondBody
     */
    client?: ChallengegenerateClient;
}
