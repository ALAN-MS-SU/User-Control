export enum Position {
  ADMIN = "ADMIN",
  USER = "USER",
}
export class User {
  public readonly ID: number;
  public readonly Name: string;
  public readonly Position?: Position;
  public readonly Email?: string;
  public readonly Password?: string;
  constructor(
    id: number,
    name: string,
    position: Position,
    email?: string,
    password?: string
  ) {
    this.ID = id;
    this.Name = name;
    this.Email = email;
    this.Password = password;
    this.Position = position;
  }
}
export class UserRequest extends User {
  Request?: string;
  constructor(
    request: string,...args: [number, string, Position, string, string]
  ) {
    super(...args);
    this.Request = request;
  }
}
