import { Inject, Injectable } from '@angular/core';
import { WindowToken } from './window/window.token';

@Injectable()
export class EnvironmentService {
   volleybalServiceUrl: string;

  constructor(@Inject(WindowToken) private window: Window) {

  }

  private isEnvPropertiesAvailable(): boolean {
    console.log("windowproperties: ", this.window.env, this.window.env.properties);
    return (null != this.window.env && null != this.window.env.properties);
  }

  private getValue(key: string): any {
    const properties: Property[] = this.window.env.properties
                                       .filter((item: Property) => item.key === key);
    if (properties[0] != null) {
      return properties[0].value;
    } else {
      throw new Error(`Could not resolve value for property: ${key}`);
    }
  }

  getTest() {
    if (this.isEnvPropertiesAvailable()) {
      this.volleybalServiceUrl = this.getValue('VOLLEYBAL_SERVICE_URL');
    } else {
      throw new Error('Environment properties are not available');
    }
  }
}
