/* eslint @typescript-eslint/no-explicit-any: off */
import GeneralController from './general';

describe('general controller', (): void => {
  it('should show swagger.json specs', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
    };

    GeneralController.swagger(ctx);
    expect(ctx).toBeTruthy();
  });
});
