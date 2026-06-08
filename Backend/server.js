const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


const perfumes = [
    
    {
        id: 1,
        name: "Mousuf Wardi",
        notes: "pink",
        price: 18000.00,
        image: "https://i.pinimg.com/736x/36/6e/4f/366e4fba922a03a3b87b7b0970adbf61.jpg"
    },
    {
        id: 2,
        name: "Choco Musk Pistachio",
        notes: "Sweet Floral and Nutty Notes",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/33/b8/a1/33b8a1e521721ff58a5879718ce1afa9.jpg"
    },
    {
        id: 3,
        name: "Choco Musk",
        notes: "Natural Spray Chocolate Vanilla Scent",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/b1/ec/37/b1ec37a2331ab4887da60ffab97b00b6.jpg"
    },
    {
        id: 4,
        name: "Now",
        notes: "For Men",
        price: 18000.00,
        image: "https://i.pinimg.com/736x/bc/7c/ed/bc7cedb6a13503a0cfee2ca36d4dcaf9.jpg"
    },
    {
        id: 5,
        name: "Elysia Vanilla Sugar",
        notes: "Pink",
        price: 16000.00,
        image: "https://i.pinimg.com/736x/60/ee/d5/60eed511d27f556dd65226b2c2341326.jpg"
    },
    {
        id: 6,
        name: "Yara",
        notes: "Smart World",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/c0/56/f7/c056f75b1d7123a69dc846c6a05c7bda.jpg"
    },
    {
        id: 7,
        name: "Intense Noir",
        notes: "For Men",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/ac/41/94/ac41943d9f6c8102fad39eef89e44258.jpg"
    },
    {
        id: 8,
        name: "Oud Wood",
        notes: "For Men",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/4b/95/e7/4b95e725e3547579aa4aac202ffd78d6.jpg"
    },
    {
        id: 9,
        name: "Hayaat",
        notes: "For men",
        price: 18000.00,
        image: "https://i.pinimg.com/1200x/07/09/75/07097553e10a305212b46f4bb07260d3.jpg"
    }
];


app.get('/api/perfumes', (req, res) => {
    res.json(perfumes);
});


app.post('/api/checkout', (req, res) => {
    const { cart, total } = req.body;
    
    if (!cart || cart.length === 0) {
        return res.status(400).json({ success: false, message: "Your cart is empty!" });
    }

    console.log("Order Received!", { cart, total });
    
   
    res.json({ 
        success: true, 
        message: "Thank you for your order at Ella’s Fragrance! Your aromatic journey begins soon." 
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
