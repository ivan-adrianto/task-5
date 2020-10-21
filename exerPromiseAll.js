const getUser = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            if (!id){
            resolve (Error("Invalid ID"))
            }
            if (id<10) {
            resolve ({sucess: true, id: id, message: "User Found"}) }
            else {
            reject({sucess: false, id: id, message: "User Not Found!" })}
        }, 3000)
    })
}

const handleOnClick = () => {
    Promise.all ([getUser(5)])
    .then (response => console.log (response[0]))
    .catch (error => console.log (error))
}