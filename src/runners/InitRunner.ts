import { ConfigurationProps } from "../typings";
import { Defaults } from "../utils/Defaults";
import { FileUtils } from "../utils/FileUtils"
import { Templates } from "../utils/Templates";
import { SetupRunner } from "./SetupRunner";

/**
 * Swaggify Initialization Runner
 */
export class InitRunner {
    static async extractConfigurations(): Promise<string> {
        return new Promise<string>(async (ok, fail) => {
          const configFile: string = process.cwd() + '/' +  FileUtils.cleanPath(Defaults.SWAGGIFY_CONFIG_FILE);
          let configuration: ConfigurationProps | boolean = JSON.parse(await FileUtils.getFileContents(configFile, {type: 'Configuration', throwable: false}).toString()) as ConfigurationProps | boolean;  
         
          if (typeof configuration === 'boolean') {
              await SetupRunner.generateConfigFile(Templates.getConfigTemplate());   

              configuration = JSON.parse(await FileUtils.getFileContents(configFile).toString()) as ConfigurationProps;  

            }
        })
    }   
}