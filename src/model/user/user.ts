/* eslint-disable @typescript-eslint/no-namespace */
import { isBlanck } from "..";
import { dbPool } from "../../db/config";
import bcryptjs from "bcryptjs";
export namespace Users {
  export enum Position {
    Admin,
    User,
  }
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
    static async FindUser({
      Email,
      Password,
    }: {
      Email: string;
      Password: string;
    }): Promise<User | null> {
      try {
        if (isBlanck(Email, Password)) throw new Error("String is blanck");
        const connection = await dbPool.connect();
        const data = await connection.query("select * from Password_User($1)", [
          Email,
        ]);
        connection.release();
        const { id, name, position } = data.rows[0];
        const Hash = data.rows[0].password;
        if (bcryptjs.compare(Password, Hash))
          return new User(id, name, position, Email);
        return null;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
    static async CreateUser({
      Name,
      Email,
      Password,
    }: {
      Name: string;
      Email: string;
      Password: string;
    }): Promise<void> {
      try {
        if (isBlanck(Name, Email, Password))
          throw new Error("String is blanck");
        const Hash = bcryptjs.hash(
          Password,
          Number.parseInt(process.env.hash_number)
        );
        const connection = await dbPool.connect();
        await connection.query("call Users('create',null,$1,$2,$3,'USER')", [
          Name,
          Email,
          Hash,
        ]);
        connection.release();
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }
  }
}
