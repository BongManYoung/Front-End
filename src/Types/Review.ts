import { User } from "./User";

export interface ReviewType {
  idx: number;
  content: string;

  user: User;
}
