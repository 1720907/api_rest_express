import {getConnection} from "./../database/database";

const getOrderProducts = async (req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM order_product");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getOrderProduct = async (req,res)=>{
    try{
        const {ID_ORDER,ID_PRODUCT} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("SELECT * FROM order_product WHERE ID_ORDER = ? AND ID_PRODUCT = ? ", [ID_ORDER,ID_PRODUCT]);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getOrderProducts_ = async (req,res)=>{
    try{
        const {ID_ORDER} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("SELECT * FROM order_product WHERE ID_ORDER = ? ", ID_ORDER);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const addOrderProducts_ =async(req,res)=>{
    const dataInsert = req.body;
    
    try{
        if (Array.isArray(dataInsert)){
            for(const element of dataInsert){
                const connection=await getConnection();
                const {ID_ORDER,ID_PRODUCT, QT} = element;
                const orderProduct = {ID_ORDER,ID_PRODUCT, QT};
                const result = await connection.query("INSERT INTO order_product SET ? ", orderProduct);
            }
            res.json({message: "orderProducts added"});           
        }else{
            const connection = await getConnection();
            const {ID_ORDER,ID_PRODUCT, QT} = dataInsert;
            const orderProduct = {ID_ORDER,ID_PRODUCT, QT}
            const result = await connection.query("INSERT INTO order_product SET ? ", orderProduct);
            res.json({message: "orderProduct added"});
        }

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateOrderProducts = async(req,res) => {
    const dataInsert = req.body;
    try{
        if (Array.isArray(dataInsert)){
            for(const element of dataInsert){
                const connection=await getConnection();
                const {ID_ORDER,ID_PRODUCT, QT} = element;
    
                if(ID_ORDER===undefined||ID_PRODUCT===undefined||QT===undefined){
                    res.status(400).json({message: "Bad Request. Please fill all fields"});
                }
    
                const orderProduct = {ID_ORDER,ID_PRODUCT, QT};
                const result = await connection.query("UPDATE order_product SET ? WHERE ID_ORDER = ? AND ID_PRODUCT = ?", [orderProduct, ID_ORDER, ID_PRODUCT]);
            }
            res.json({message: "orderProducts updated"});    
        }else{
            const connection = getConnection();
            const {ID_ORDER,ID_PRODUCT,QT} = req.body;
            if(ID_ORDER===undefined||ID_PRODUCT===undefined||QT===undefined){
                res.status(400).json({message: "Bad reques. Please fill all fields"});
            }
            const orderProduct = {ID_ORDER,ID_PRODUCT,QT};
            const result = await connection.query("UPDATE order_product SET ? WHERE ID_ORDER = ? AND ID_PRODUCT = ?", [orderProduct,ID_ORDER,ID_PRODUCT]);
            res.json({message:"oderProduct updated"});
        }

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteOrderProducts = async (req,res)=>{
    try{
        const {ID_ORDER} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("DELETE FROM order_product WHERE ID_ORDER = ?", ID_ORDER);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}
const deleteOrderProduct_ = async (req,res)=>{
    try{
        const {ID_ORDER,ID_PRODUCT} = req.params;
        const connection = await getConnection();
        const result =  await connection.query("DELETE FROM order_product WHERE ID_ORDER = ? AND ID_PRODUCT = ?", [ID_ORDER,ID_PRODUCT]);
        res.json(result); 
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}


export const methods = {
    getOrderProducts,
    getOrderProduct,
    getOrderProducts_,
    updateOrderProducts,
    addOrderProducts_,
    deleteOrderProducts,
    deleteOrderProduct_
};