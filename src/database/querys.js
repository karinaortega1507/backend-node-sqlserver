export const querys = {
  //Products
  //getAllProducts: "[SiacIlsaboremio].[dbo].[productosjbg2]",
  //getProducById: "SELECT * FROM productosjbg2 Where Id = @Id",
  addNewProduct:
    "INSERT INTO [SiacIlsaboremio].[dbo].[productosjbg2] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [SiacIlsaboremio].[dbo].[productosjbg2] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [SiacIlsaboremio].[dbo].[productosjbg2]",
  updateProductById:
    "UPDATE [SiacIlsaboremio].[dbo].[productosjbg2] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",

  //Users
  getAllUsers: "SELECT [usrnombre],[usrclave] FROM [SiacIlsaboremio].[dbo].[siaccusr]",
  getUserById: "SELECT * FROM [SiacIlsaboremio].[dbo].[siaccusr] Where usrcodigo=@usrcodigo",
  addNewUser:
    "INSERT INTO [SiacIlsaboremio].[dbo].[siaccusr]([usrcodigo],[usrnombre],[usrclave],[usrfeccad],[usrstatus],[usrfecisys],[usrfecmsys],[usrhorisys],[usrhormsys],[usrusuisys],[usrusumsys],[usrflagoficre],[usrhelpart],[usrhelpcli],[usrcodper],[usrflagperfil],[usrflagnuevmodi],[usrdiascaduclave],[usrfecactuclave],[usrhelppro],[usremail],[usrestisys],[usrestmsys],[usrpassword],[usrcorreo],[usrimagen],[usrimagentype],[usrflagupdateperfilacces],[id]) VALUES (@usrcodigo,@usrnombre,@usrclave,NULL,'D',SYSDATETIME(),SYSDATETIME(),SYSDATETIME(),SYSDATETIME(),@usrusuisys,@usrusumsys,0,'B','B',NULL,-1,1,0,SYSDATETIME(),'B',@usremail,@usrestisys,NULL,NULL,NULL,NULL,NULL,0,0)"
};
