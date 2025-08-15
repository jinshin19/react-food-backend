import { v4 as uuid } from "uuid";
export class UuidService {
  generate(): string {
    return `RF-${uuid()}`;
  }
}
