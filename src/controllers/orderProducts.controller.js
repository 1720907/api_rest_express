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

// const addOrderProduct =async(req,res)=>{
//     try{
//         const {ID_ORDER, ID_PRODUCT, QT} = req.body;
//         if(ID_ORDER===undefined || ID_PRODUCT===undefined || QT===undefined){
//             res.status(400).json({message: "Bad request. Please fill all fields"});
//         }
//         const connection = await getConnection();
//         const orderProduct = {ID_ORDER, ID_PRODUCT, QT};
//         const result = await connection.query("INSERT INTO order_product SET ?", orderProduct);
//         res.json({message: "New product added"});

//     }catch(error){
//         res.status(500);
//         res.send(error.message);
//     }
// };

const addOrderProducts_ =async(req,res)=>{
    const dataInsert = req.body;
    
    try{
        for(const element of dataInsert){
            const connection=await getConnection();
            const {ID_ORDER,ID_PRODUCT, QT} = element;
            const orderProduct = {ID_ORDER,ID_PRODUCT, QT};
            const result = await connection.query("INSERT INTO order_product SET ? ", orderProduct);
        }
        res.json({message: "New order added"});

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

export const methods = {
    getOrderProducts,
    getOrderProduct,
    getOrderProducts_,
    // addOrderProduct,
    addOrderProducts_,
    deleteOrderProducts
};