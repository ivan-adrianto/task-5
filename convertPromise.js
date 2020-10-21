// const getUser = (id) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//               if (id > 10) {
//                 resolve ({
//                   sucess: false,
//                   id: id,
//                   message: "User Not Found!"  
//                 })
//               } else {
//                 reject  ({
//                   sucess: true,
//                   id: id,
//                   message: "User Found"
//                 })
//               };
//         }, 3000)
//     }); 

// }
  
//   const handleOnClick = () => {
//     console.log("Clicked...")
//     getUser()
//     .then ((hasil) => {
//         const console.log (hasil) 
//     })

    
//   }


//   getUser(11, (result) => {
//     const dataUser = result
//     console.log(dataUser)
//   })


// let id=8;
// const getUser = new Promise ((resolve, reject) => {
//     if (id<10){
//         resolve (`ID valid`)
//     } else {
//         reject ('ID tidak valid')
//     }
// })

// getUser
// .then (response => console.log ('Sukses ' + response))
// .catch (response => console.log ('Gagal ' + response))







// ====================BENER HEEEEEE, KURANG TITIK======================================

// const getUser = (id) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (()=> {
//             return (id<10) ?
//             resolve ({sucess: true, id: id, message: "User Found"}) 
//             : reject({sucess: false, id: id, message: "User Not Found!" })
//         }, 3000)
//     })
// }

// const handleOnClick = () => {
//     getUser('tomodaka')
//     .then (hasil => console.log (hasil))
//     .catch (error => console.log (error))
// }
// ====================BENER HEEEEEE, KURANG TITIK======================================








const getUser = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            if (!id){
            reject (Error("Invalid ID"))
            }
            if (id<10) {
            resolve ({sucess: true, id: id, message: "User Found"}) }
            else {
            reject({sucess: false, id: id, message: "User Not Found!" })}
        }, 3000)
    })
}

const handleOnClick = () => {
    getUser(null)
    .then (hasil => console.log (hasil))
    .catch (error => console.log (error))
}






