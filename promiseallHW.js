// const getFirstName = () => {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             return (true) ?
//             resolve ("Binar") : reject (Error("Gagal"))
//     }, 3000);
// }); return promise
// };

// const getLastName = (first) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (()=> {
//             return (true) ?
//             resolve (`${first} Academy`) : reject(Error("Gagal"))
//         }, 3000)
//     })
// }


const getFirstName = () => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout (() => {
            return (true) ?
            resolve ("Binar") : reject (Error("Gagal"))
    }, 3000);
}); return promise
};

const getLastName = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            return (true) ?
            resolve (`Academy`) : reject(Error("Gagal"))
        }, 3000)
    })
}

const handleOnClick = () => {
    Promise.all ([getFirstName(), getLastName()])
    .then (response => {
        const [getFirstName, getLastName] = response
        document.querySelector("#hasil").innerText = `${getFirstName} ${getLastName}` }
    )
    .catch (error => console.log (error))
 }







    //    console.log ("Clicked...")
//    getFirstName()
//    .then (hasil => getLastName(hasil))
//    .then (hasil2 => {
//        document.querySelector("#hasil").innerText = hasil2
//    })
//    .catch (error => console.log (error))