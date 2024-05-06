import { envClient } from "@/lib/env";
import { Gitlab } from "@gitbeaker/rest";
class ApiClient {
  public api?: InstanceType<typeof Gitlab>;
  constructor() {
    this.initializeClient();
  }
  public initializeClient() {
    const token = localStorage.getItem("token");
    if (!token) return;
    this.api = new Gitlab({
      host: envClient.url,
      token: token,
    });
  }
}
export default new ApiClient();
