import {Injectable} from "@angular/core";

@Injectable()
export class MyFailingService {
  constructor() {
    throw new Error("Some error happens here!");
  }
}
