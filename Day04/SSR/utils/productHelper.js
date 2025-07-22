const getProductsFromDB = async () => {
    const res = await fetch("http://dummyjson.com/products");
    const data = await res.json();
    return data;
};

const getProductCards = async () => {
    const { products } = await getProductsFromDB();

    let res = ""; 
    products.map((product) => {
        const CardStr = `
            <div class="card">
                <img src="${product.thumbnail}" width="200"/>
                <h4>${product.title}</h4>
                <h6>Price: ${product.price}</h6>
            </div>
        `
        res = res + "\n" + CardStr; 
    });

    return res;
};

module.exports = {
    getProductCards,
};
