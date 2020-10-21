const getUser = (id, callback) => {
    setTimeout(() => {
      if (!id) {
        return callback(Error("Invalid ID"))
      }
  
      let response;
      if (id > 10) {
        response = {
          sucess: false,
          id: id,
          message: "User Not Found!"  
        }
      } else {
        response = {
          sucess: true,
          id: id,
          message: "User Found"
        }
      }
  
      return callback(response);
    }, 2000)
    
  }
  
  const handleOnClick = () => {
    console.log("Clicked...")
    getUser(11, (result) => {
      const dataUser = result
      console.log(dataUser)
    })
  }
  