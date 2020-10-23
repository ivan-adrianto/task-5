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
    getUser(9, (result) => {  
      const dataUser = result

      document.querySelector("#hasil").innerText=result.message
      console.log(dataUser)
    })
  }


  const getUser1 = (id) => {
    return new Promise((resolve, reject)=>
    setTimeout(() => {
        if (!id) {
          return callback(Error("Invalid ID"))
        }
    
        let response;
        if (id > 10) {
        resolve(
          (response = {
            sucess: false,
            id: id,
            message: "User Not Found!"  
          })
        );
        } else {
        resolve(
          (response = {
            sucess: true,
            id: id,
            message: "User Found"
          })
        )}
      }, 2000) )
  };

  const promiseChaining = () => {
    console.log("Clicked...")
    getUser1(11) 
    .then((result) => {
    document.querySelector("#hasil1").innerText=result.message
    console.log(result)
    })
    .catch((error) =>console.log(error));
  }

  const promiseAll = () => {
    console.log("Clicked...")
    Promise.all([getUser1(8)])
    .then((result) => {
    document.querySelector("#hasil2").innerText=`${result[0].message}`
    console.log(result) 
    })
    .catch((error) =>console.log(error));
  }

  const asycnAwait = async () => {
    console.log("Clicked...")
    const result = await getUser1(6); 
    document.querySelector("#hasil3").innerText=result.message
    console.log(result)
    }
  // 1. Ubah studi kasus di modul pakai Promise.all
  // - Pelajari Promise.all
  // - https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-3-promise-819ce5d8b3c
  // - https://www.youtube.com/watch?v=-Gbb8H3Dy08&t=3s
  //
  // 2. Convert ke:
  // - Promise Chaining
  // - Promise.all
  // - Async-await
  // 
  // deadline: jumat, 23 okt 2020, 23:59 wib
  // kirim alamat repo ke fnoviandha@binar.co.id

  