import { getConnection, querys, sql } from "../database";

export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUser = async (req, res) => {
  const { usrcodigo, usrnombre, usrclave, usrusuisys, usrusumsys,usremail, usrestisys } = req.body;
 
  
  // validating
  if (usrnombre == null || usrclave == null || usrusuisys == null || usrusumsys == null || usremail == null || usrestisys == null) {
    return res.status(400).json({ msg: "Por favor complete todos los campos" });
  }
 

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("usrcodigo", sql.VarChar,usrcodigo)
      .input("usrnombre", sql.VarChar, usrnombre)
      .input("usrclave", sql.VarChar, usrclave)
      .input("usrusuisys", sql.VarChar, usrusuisys)
      .input("usrusumsys", sql.VarChar, usrusumsys)
      .input("usremail", sql.VarChar, usremail)
      .input("usrestisys", sql.VarChar, usrestisys)
      .query(querys.addNewUser);

    res.json({ usrcodigo, usrnombre, usrclave, usrusuisys, usrusumsys,usremail, usrestisys });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteUser);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalUsers = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalUsers);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateUserById = async (req, res) => {
  const { description, name, quantity } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(querys.updateUserById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
