import Utility from "../utils/Utility";

function Model() {
  return (_class: Function) => {
      const obj: any = Utility.getClassProps(_class);
      Utility.writeSwagger(obj);
  }
}


export {Model};