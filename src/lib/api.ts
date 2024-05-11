import { envClient } from "@/lib/env";
import { Gitlab } from "@gitbeaker/rest";
class ApiClient {
  public api?: InstanceType<typeof Gitlab>;
  constructor() {
    this.initializeClient();
  }
  public initializeClient() {
    const token = localStorage.getItem("token");
    // if (!token) return;
    this.api = new Gitlab({
      host: "https://hamgit.ir",
      token: "glpat-6wzvG6MZ4x2E-bW-Y9NC",
    });
  }
}
export default new ApiClient();
