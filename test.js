const func = (callback)=>{
    console.log("id")
    const id = 1234
    callback(id);
}

const secondCallback = (id) =>{
    console.log(id)
}

const callback = (id, secondCallback) => {
    secondCallback(id)
}



func(callback)