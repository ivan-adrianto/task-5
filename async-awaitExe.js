let input = parseInt (prompt ('Masukkan ID:'))

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

const handleOnClick = async () => {
    console.log("Clicked...")
    try {
        const hasil = console.log (await getUser(input))
    } catch (error) {
        console.log(error)
    }
}