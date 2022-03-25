import { Injectable } from "@nestjs/common";

@Injectable()
export class SampleService {

  async returnData(data: any) {
    return data;
  }

}
