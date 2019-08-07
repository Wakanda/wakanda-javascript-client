import Const from "../const";
import DirectoryService from "../data-access/service/directory-service";
import WakandaClient from "../wakanda-client";
import AbstractBusiness from "./abstract-business";

export interface ICurrentUserDBO {
  userName: string;
  fullName: string;
  ID: string | number;
}

class DirectoryBusiness extends AbstractBusiness {
  private service: DirectoryService;

  constructor({ wakJSC }: { wakJSC: WakandaClient }) {
    super({ wakJSC });

    this.service = new DirectoryService({ wakJSC });
  }

  public login(username: string, password: string, duration?: number): Promise<boolean> {
    const durationTime = duration || Const.DEFAULT_SESSION_DURATION;

    if (!(typeof durationTime === "number") || durationTime <= 0) {
      throw new Error("Directory.login: invalid duration parameter");
    }

    return this.service.login(username, password, durationTime).catch(() => {
      return false;
    });
  }

  public logout(): Promise<boolean> {
    return this.service.logout().catch(() => {
      return false;
    });
  }

  public getCurrentUser(): Promise<ICurrentUserDBO> {
    return this.service
      .getCurrentUser()
      .then((dbo) => {
        return dbo;
      })
      .catch(() => {
        return null;
      });
  }

  public getCurrentUserBelongsTo(group: string): Promise<boolean> {
    if (!(typeof group === "string")) {
      throw new Error("Directory.getCurrentUserBelongsTo: group must be a string");
    }

    return this.service
      .getCurrentUserBelongsTo(group)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}

export default DirectoryBusiness;
