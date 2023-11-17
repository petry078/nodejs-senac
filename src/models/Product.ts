type Products = {
    title:string,
    price:number
}

const data = [
    {title: 'Coquinha', price: 2.99},
    {title: 'PF vegano no precinho', price: 12.99},
    {title: 'Brownie de melaço de cana', price: 1.99},
]

export const Products = {
    getAll:() => {
        return data
    }
}