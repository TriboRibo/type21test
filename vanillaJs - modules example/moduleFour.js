function update(arr) {

    return arr.map(x => {

        return {
            ...x,
            year: 1990 + Math.round(Math.random()*34)
        }

    })

}


export default update