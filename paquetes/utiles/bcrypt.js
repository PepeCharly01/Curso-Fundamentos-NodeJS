const bcrypt = require('bcrypt');

const password = '123Segura';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare('123Segura', hash, function(err, res){
        console.log(res);
    })
});