import { envClient } from "@/lib/env";
import { Gitlab } from "@gitbeaker/core";
class ApiClient {
  public api?: Gitlab;
  constructor() {
    this.initializeClient();
  }
  public initializeClient() {
    this.api = new Gitlab({
      host: envClient.url,
      token: envClient.token,
    });
  }
}
export default new ApiClient();
