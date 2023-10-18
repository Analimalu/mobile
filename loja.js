const mongoose = require('mongoose');

const conectarAoMongoDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://ana31limalo:Ana31lima@cloud0.wt0q5m4.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=AtlasApp', {            
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB com sucesso.');
    } catch (error) {
        console.error('Erro de conexão com o MongoDB:', error);
    }
};

conectarAoMongoDB();

