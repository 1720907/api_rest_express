import {getConnection} from "./../database/database";

const getOrders = async (req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM orders");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getOrder = async (req,res)=>{
    try{
        const {ID_ORDER} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("SELECT * FROM ORDERS WHERE ID_ORDER = ?", ID_ORDER);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const addOrder =async(req,res)=>{
    try{
        const {ID_ORDER, ORDER_N,DATE,N_PRODUCTS,FINAL_PRICE} = req.body;
        if(ID_ORDER===undefined || ORDER_N===undefined || DATE===undefined || N_PRODUCTS===undefined || FINAL_PRICE===undefined){
            res.status(400).json({message: "Bad request. Please fill all fields"});
        }
        const connection = await getConnection();
        const order = {ID_ORDER, ORDER_N,DATE,N_PRODUCTS,FINAL_PRICE};
        const result = await connection.query("INSERT INTO ORDERS SET ?", order);
        res.json({message: "New product added"});

    }catch(error){
        res.status(500).json(error.message);
    }
};


const deleteOrder = async (req,res)=>{
    try{
        const {ID_ORDER} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("DELETE FROM ORDERS WHERE ID_ORDER = ?", ID_ORDER);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getOrders,
    addOrder,
    getOrder,
    deleteOrder
};