

// Create class based on Error





const createError = function(name){
    class ValidateConection extends Error {
        constructor(message){
            super(message)
            this.name = name;
            // El stack son todos los comentarios de los errores
            this.stack = '';
        }
    }
}

const ErrorConection = createError('Conexion errada');
const ErrorValidation = createError('Validación errada');

const conectDataBase = ({user, pasword} = {}) => {
    if(!user) throw new ErrorConection()
    if(!pasword) throw new ErrorConection()
}
