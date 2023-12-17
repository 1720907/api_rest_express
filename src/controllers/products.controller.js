import {getConnection} from "./../database/database";

const getProducts = async (req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getProduct = async (req,res)=>{
    try{
        const {ID_PRODUCT} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("SELECT * FROM PRODUCTS WHERE ID_PRODUCT = ?", ID_PRODUCT);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const addProduct =async(req,res)=>{
    try{
        const {NAME, UNIT_PRICE} = req.body;
        if(NAME===undefined || UNIT_PRICE===undefined){
            res.status(400).json({message: "Bad request. Please fill all fields"});
        }
        const connection = await getConnection();
        const product = {NAME,UNIT_PRICE};
        const result = await connection.query("INSERT INTO PRODUCTS SET ?", product);
        res.json({message: "New product added"});

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateProduct = async (req,res)=>{
    try{
        const {ID_PRODUCT} = req.params;
        const {NAME,UNIT_PRICE} = req.body;

        if(ID_PRODUCT===undefined||NAME===undefined||UNIT_PRICE===undefined){
            res.status(400).json({message: "Bad Request. Please fill all fields"});
        }
        const product = {ID_PRODUCT, NAME, UNIT_PRICE};
        const connection = await getConnection();
        const result =  await connection.query("UPDATE PRODUCTS SET ? WHERE ID_PRODUCT = ?", [product, ID_PRODUCT]);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const {ID_PRODUCT} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("DELETE FROM PRODUCTS WHERE ID_PRODUCT = ?", ID_PRODUCT);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
};