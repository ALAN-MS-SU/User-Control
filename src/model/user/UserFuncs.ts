import { isBlanck, User, UserRequest } from "..";
import { dbPool } from "../../db/config";
import bcryptjs from "bcryptjs";
export abstract class UserAuth {
  static async FindUser({
    Email,
    Password,
  }: Omit<User, "ID" | "Name">): Promise<User | null> {
    try {
      if (isBlanck(Email, Password)) throw new Error("String is blanck");
      const connection = await dbPool.connect();
      const data = await connection.query("select * from Password_User($1)", [
        Email,
      ]);
      connection.release();
      const { id, name, position } = data.rows[0];
      const Hash = data.rows[0].password;
      if (await bcryptjs.compare(Password, Hash))
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
  }: Omit<User, "ID">): Promise<void> {
    try {
      if (isBlanck(Name, Email, Password)) throw new Error("String is blanck");
      const Hash = await bcryptjs.hash(
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
      throw new Error("The user already exists");
    }
  }
}

export async function ListUsers({ ID }: Omit<User, "Name">): Promise<User[]> {
  const connection = await dbPool.connect();
  const data = await connection.query("select * from Read_Users($1)", [
    `ID != ${ID}`,
  ]);
  connection.release();
  const Users: User[] = [];
  data.rows.map((row) => {
    Users.push(new User(row.id, row.name, row.position, row.email));
  });
  return Users;
}
export abstract class UserEdit {
  static async EditPosition({
    ID,
    Request,
    Position,
  }: Pick<UserRequest, "Request" | "Position" | "ID">): Promise<User | null> {
    const connection = await dbPool.connect();
    if (Request == "GET") {
      try {
        const data = await connection.query("select * from Read_Users($1)", [
          `ID = ${ID}`,
        ]);
        connection.release();
        const { id, name, position } = data.rows[0];
        return new User(id, name, position);
      } catch (err) {
        console.log(err);
        throw new Error("EditUser err!");
      }
    }
    try {
      await connection.query("call Users('EditPosition',$1,'','','',$2)", [
        ID,
        Position,
      ]);
      connection.release();
      return null;
    } catch (err) {
      console.log(err);
      throw new Error("Update err in UserFuncs.EditPosition");
    }
  }
  static async EditUser({ ID, Name, Password, Email }: User): Promise<void> {
    if (isBlanck(ID.toString(), Name, Password, Email))
      throw new Error("string is blanck on EditUser");
    const connection = await dbPool.connect();
    const hash = await bcryptjs.hash(
      Password,
      Number.parseInt(process.env.hash_number)
    );
    await connection.query("call Users('update',$1,$2,$3,$4)", [
      ID,
      Name,
      Email,
      hash,
    ]);
    connection.release();
    return;
  }
  static async DeleteUSer({ ID }: Pick<User, "ID">): Promise<void> {
    if (isBlanck(ID.toString()))
      throw new Error("string is blanck in DeleteUser");
    const connection = await dbPool.connect();
    await connection.query("call Users('delete',$1)", [ID]);
    connection.release();
    return;
  }
}
