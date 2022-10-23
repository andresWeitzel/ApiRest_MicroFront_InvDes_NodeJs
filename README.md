# AppWeb_MicroFront_InvDes_NodeJs (En Desarrollo).

* App Web Micro FrontEnd de Proyectos I+D Nacionales implementando NodeJs, Express, Handlebars, Bootstrap, Highchart, Git, MongoDB y Otras Tecnologías.

</br>


* Repositorio db_investigacion_desarrollo_mongodb : https://github.com/andresWeitzel/db_investigacion_desarrollo_mongodb


<hr>

## Documentación Inicial para la Configuración y Creación de Aplicaciones Web con el Stack MEAN
### Creación Api Rest con NodeJs 

#### 1.0) Creación Archivo Configuración package.json 
   * `npm init -y`

 </br> 
 
#### 2.0) Dependencias Iniciales : 
   * `npm i express` (Framework para el manejo de http, cli, etc)
   * `npm i express-handlebars` (Motor de Plantillas Backend)
   * `npm i mongoose` (Conexión y Modelamiento de datos)

</br>  

#### 3.0) Creación del Código Fuente del Proyecto
   * Creamos carpeta `src`
   * Dentro de `src`, creamos archivo `app.js` (en este archivo estarán las configs de la aplicación)
   * Dentro de `app.js` vamos a importar toda la config y librerías
   * Utilizaremos Babel para la compilación de la config.

</br> 

#### 4.0) Instalación de Babel
   * `npm i -D @babel/core` (Instalación dep. de desarrollo para el compilador de babel)
   * `npm i -D @babel/cli` (Instalación dep. de desarrollo para cli de babel)
   * `npm i -D @babel/node` (Instalación dep. de desarrollo para el uso de babel junto con node)
   * `npm i -D @babel/preset-env` (Instalación dep. de desarrollo para el autoajuste sintáctico entre babel y js).
   * `npm i -D nodemon` (Instalación dep. de desarrollo para reinicio del módulo principal).

  </br>
 
#### 5.0) Configuración de Babel
   * `Fuera de `src` creamos el archivo `.babelrc` (archivo para config de babel)
   * Dentro de `.babelrc` añadimos la config del módulo principal de babel
     ```js
         {
           "presets":[
               "@babel/preset-env"
           ]
          }
     ```
   
</br>  
    
#### 6.0) Configuración de Routing
   * El enrutamiento se refiere a cómo los extremos (URI) de una aplicación responden a las solicitudes del cliente.
   * Dentro de `src` creamos la carpeta `routes`.
   * Dentro de `routes` creamos el archivo `index.routes.js`
   * Importamos Router para crear un enrutador y configuramos los endpoints

     ```js
                import {Router} from 'express';

                const router = Router();

                router.get('/', (req, res) =>{
                    res.send('Hello World!!!');
                });


                export default router;
      ```


    
</br>


#### 7.0) Importación de Express
   * Con express podemos ejecutar un servidor local. 
   * Una vez configurado babel podemos importar el módulo de express dentro de `app.js`

     ```js
         import express from "express";
     ```

</br>
     
 #### 8.0) Configuración y Ejecución de Express
   * Con express podemos ejecutar un servidor local.
   * Las configuraciones del mismo las realizamos en el archivo `app.js` a través del objecto app invocando la función `express()`
   * Seguidamente utilizamos el routing establecido

      ```js
          import express from "express";
          import routes from './routes/index.routes'


          const app = express()

          app.use(routes);

          export default app;

      ```
   * Ahora creamos el archivo `index.js` que contendrá la config final de la aplicación.. 
     ```js
          import app from "./app"

          app.listen(3100)
          console.log('Servidor en Ejecución en el Puerto ', 3100)

     ```   
   * Seguidamente vamos a configurar la ejecución automática de la aplicación.. Dentro del `package.json` bloque `scripts`, colocamos lo siguiente..

      ```js
            "scripts": {
                  "start" : "nodemon src/index.js --exec babel-node",
                  "dev": "nodemon src/index.js --exec babel-node"
               },
      ```
   * Ejecutamos el archivo `index.js` con node. Escribimos `npm start`
   * Salida Esperada:

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
   * Posteriormente el msg podrá ser reemplazado por cualquier archivo html  

</br>
     
#### 9.0) Motor de Plantillas Handlebars
   * Para servir archivos html con node tendremos que configurar dicho motor
   * Primeramente crearemos la carpeta `views` dentro de src
   * Dentro de `views` crearemos otra carpeta llamada `layouts` y dentro de esta un primer archivo html con extensión handlebars `main.hbs`
   * Trabajando con layoutsDir todo el render principal se realiza a través del main... podemos realizar componentes de html y llevarlos al main.hbs para no tener redundancia de código.
   
     ```hbs
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
              </head>
              <body>
                  <h1>Hello World!!</h1>
              </body>
              </html>
     ```
     
   * Vamos a configurar dicho motor en `app.js`
   * Realizamos las configuraciones de rutas y vistas con el módulo path
   * Realizamos las importaciones y declaraciones del motor con .engine
     ```hbs
            import express from "express";
            import routes from './routes/index.routes';
            import path from 'path';
            import { create } from 'express-handlebars';


            const app = express()

            //Views
            app.set("views" , path.join(__dirname , "/views"));

            //Handlebars Config
            var hbs = create({
                layoutsDir: path.join(app.get("views"), "layouts"),
                defaultLayout: "main",
                extname: ".hbs",
            })
            //Handlebars invoke
            app.engine(".hbs", hbs.engine);

            //Handlebar set
            app.set("view engine",".hbs");

            //Routes
            app.use(routes);

            export default app;

     ```
   * Por último configuramos el routing desde `index.routes.js`
   * Una vaz configurados los pasos anteriores no es necesario la config del `main.hbs` en el archivo routing ya que todos los snippets de codigo se van a renderizar una vez levantada la app (sería como un index.html).
   * Modificamos el archivo
     ```hbs
          import {Router} from 'express';

          const router = Router();

          router.get('/', (req, res) =>{
              res.render('index');
          });


          export default router;

     ```
     
  * Levantamos el server y visualizamos el Hello World    
        

 <hr>
 

#### Configuración de gitignore
   * Vamos a excluir la carpeta `node_modules` para no añadir las librerías a nuestro repositorio.
   * Creamos el archivo `.gitignore` fuera de `src`
   * Dentro del mismo añadirmos `node_modules/`
   * Seguidamente en la consola colocamos los siguentes comandos (respetar punto final)
       * `git rm -r --cached .`
       * `git add .`
       * `git commit -m "remove gitignore files"`
       * `git push`
 
   </br>
 
#### Extensiones Visual Studio Code
  * Prettier - Code formatter
  * Material Icon
