import { Options as OpenApiOptions } from 'payload-openapi';
import { SwaggerUiOptions } from 'swagger-ui-express';

interface SwaggerOptions {
  /**
   * Customize the payload-swagger routes
   */
  routes?: {
    /**
     * Swagger ui route
     * @default /api-docs
     */
    swagger?: string;
    /**
     * Openapi specs route
     * @default /api-docs/specs
     */
    specs?: string;
    /**
     * License route (requires LICENSE file in root of repository or explicit license url in openapi document)
     * @default /api-docs/license
     */
    license?: string;
  };

  /**
   * Require authentication via Payload API to access the specs
   */
  auth?: boolean;

  /**
   * Swagger ui options (see swagger-ui documentation)
   */
  ui?: Omit<SwaggerUiOptions, 'swaggerUrl' | 'swaggerUrls'>;

  /**
   * Throw on error
   * @default false
   * @description If set to true, the plugin will throw the error if any error occurs while generating the openapi document, causing Payload to fail to start.
   */
  throwOnError?: boolean;
}

/**
 * Payload swagger options
 */
export type Options = OpenApiOptions & SwaggerOptions;
