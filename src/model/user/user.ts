/* eslint-disable @typescript-eslint/no-namespace */
import { dbPool } from "../../db/config";
enum Position {
  Admin,
  User,
}

export namespace Users {
  export class User {
    public readonly ID: number;
    public readonly Name: string;
    public readonly Position: Position;
    public readonly Email?: string;
    private readonly Password?: string;
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
    // public getUser(password: string): Users.User | null {
    //   if (this.Password === password) {
    //     return this;
    //   }
    //   return null;
    // }
  }
  export async function FindUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    try {
      const connection = await dbPool.connect();
      const data = await connection.query(
        "select * from Password_User($1,$2)",
        [email, password]
      );
      connection.release();
      const { id, name, position } = data.rows[0];
      return new User(id, name, position, email);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
