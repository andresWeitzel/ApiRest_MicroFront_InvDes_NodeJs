# ApiRest_MicroFront_InvDes_NodeJs (En Desarrollo).

* Api Rest para el Micro FrontEnd de Proyectos I+D Nacionales implementando NodeJs, Express, ReactJs, Highchart, Git, MongoDB y Otras Tecnologías.

</br>

* Repositorio App_MicroFront_InvDes_ReactJs : 
* Repositorio db_investigacion_desarrollo_mongodb : https://github.com/andresWeitzel/db_investigacion_desarrollo_mongodb


<hr>

## Documentación Personal para la Creación de Aplicaciones Web con el Stack MEAN
### Creación Api Rest con NodeJs 

* 1.0) Creación Archivo Configuración package.json :
  * `npm init -y`

 </br> 
 
* 2.0) Dependencias Iniciales : 
  * `npm i express` (Framework para el manejo de http, cli, etc)
  * `npm i express-handlebars` (Motor de Plantillas Backend)
  * `npm i mongoose` (Conexión y Modelamiento de datos)
  
</br>  

* 3.0) Creación del Código Fuente del Proyecto
  * Creamos carpeta `src`
  * Dentro de `src`, creamos archivo `index.js`
  * Dentro de `index.js` vamos a importar toda la config y librerías
  * Utilizaremos Babel para la compilación de la config.

</br> 

* 4.0) Instalación de Babel
  * `npm i -D @babel/core` (Instalación dep. de desarrollo para el compilador de babel)
  * `npm i -D @babel/cli` (Instalación dep. de desarrollo para cli de babel)
  * `npm i -D @babel/node` (Instalación dep. de desarrollo para el uso de babel junto con node)
  * `npm i -D @babel/preset-env` (Instalación dep. de desarrollo para el autoajuste sintáctico entre babel y js).
  * `npm i -D nodemon` (Instalación dep. de desarrollo para reinicio del módulo principal).
 
  </br>
 
 * 5.0) Configuración de Babel
   * `Fuera de `src` creamos el archivo `.babelrc` (archivo para config de babel)
   *  Dentro de `.babelrc` añadimos la config del módulo principal de babel

    ```js
    {
      "presets":[
          "@babel/preset-env"
      ]
     }
    ```
   </br>
 
  * 6.0) Importación de Express
    * Con express podemos ejecutar un servidor local. 
    * Una vez configurado babel podemos importar el módulo de express dentro de `index.js`
    
      ```js
      import express from "express";
      ```
      
     </br>
     
   * 7.0) Configuración y Ejecución de Express
     * Con express podemos ejecutar un servidor local. 
     * Las configuraciones del mismo las realizamos a través del objecto app invocando la función `express()`

       ```js
        import express from "express";

         const app = express()

         app.listen(6000)
         console.log('Servidor en Ejecución en el Puerto ', 6000)
       ```
      * Seguidamente vamos a configurar la ejecución automática del index.js.. Dentro del `package.json` bloque `scripts`, colocamos lo siguiente..
       
       ```js
         "scripts": {
               "start" : "nodemon src/index.js --exec babel-node",
               "dev": "nodemon src/index.js --exec babel-node"
            },
        ```
      * Ejecutamos el archivo `index.js` con node. Escribimos `npm start`
      * Salida Esperada
        
        ```cmd
           > apirest_invdes_nodejs@1.0.0 start
           > babel-node src/index.js

           Servidor en Ejecución en el Puerto  6000
        ```
        
   </br>  
    
   * 8.0) Configuración Endpoint/Rutas 
       * Vamos a configurar un msj de repuesta cuando accedamos a la ruta `/hello`
       * Dentro del `index.js` configuramos el método get
        
        ```js
           app.get('/', (req, res) =>{
               res.send('Hello World!!');
             });
        ```
        
        * Ejecutamos el archivo `index.js` con node. Escribimos `npm start`
        * Salida Esperada

          ```cmd
            > apirest_invdes_nodejs@1.0.0 start
            > nodemon src/index.js --exec babel-node

            [nodemon] 2.0.20
            [nodemon] to restart at any time, enter `rs`
            [nodemon] watching path(s): *.*
            [nodemon] watching extensions: js,mjs,json
            [nodemon] starting `babel-node src/index.js`
            Servidor en Ejecución en el Puerto  3100
          ``` 
        * Accedemos al endpoint configurado `localhost:3100` y vemos el msj generado `Hello Wordl!!`
      
     </br>
     
   * 9.0) Configuración de gitignore
        * Vamos a excluir la carpeta `node_modules` para no añadir las librerías a nuestro repositorio.
        * Creamos el archivo `.gitignore` fuera de `src`
        * Dentro del mismo añadirmos `node_modules/`
        * Seguidamente en la consola colocamos los siguentes comandos (respetar punto final)
         * `git rm -r --cached .`
         * `git add .`
         * `git commit -m "remove gitignore files"`
         * `git push`
