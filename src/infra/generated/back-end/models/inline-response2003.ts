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

import { InlineResponse2003Data } from './inline-response2003-data';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {

    /**
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    ok: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse2003
     */
    message: string;

    /**
     * @type {InlineResponse2003Data}
     * @memberof InlineResponse2003
     */
    data: InlineResponse2003Data;
}
