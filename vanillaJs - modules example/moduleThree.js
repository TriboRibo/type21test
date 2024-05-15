function update(arr) {

    return arr.map(x => {

        return {
            ...x,
            gasolineType: Math.random() > 0.5 ? "Diesel" : "Gasoline"
        }

    })

}


export default update