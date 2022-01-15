// configuracion que requiere nuestro proyecto

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // necesario para trabajar con HTML

module.exports = {
    entry: './src/index.js',
    output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
        path: path.resolve(__dirname, 'dist'), //Creamos el lugar dónde se exportará el proyecto.
        filename: 'main.js' //Este es el nombre del archivo final para producción.
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { // Estructura de Babel
                test: /\.jsx?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/, //Excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader' //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html',  //Dirección donde se encuentra el template principal
                filename: './index.html' //El nombre que tendrá el archivo
            }
        )
    ]
}


