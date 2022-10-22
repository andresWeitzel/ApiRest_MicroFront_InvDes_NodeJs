# ApiRest_MicroFront_InvDes_NodeJs (En Desarrollo).

* Api Rest para el Micro FrontEnd de Proyectos I+D Nacionales implementando NodeJs, Express, ReactJs, Highchart, Git, MongoDB y Otras Tecnologías.

</br>

* Repositorio App_MicroFront_InvDes_ReactJs : 
* Repositorio db_investigacion_desarrollo_mongodb : https://github.com/andresWeitzel/db_investigacion_desarrollo_mongodb


<hr>

### Creación Api Rest con NodeJs

* Creación Archivo Configuración package.json :
  * `npm init -y`
* Dependencias Iniciales : 
  * `npm i express` (Framework para el manejo de http, cli, etc)
  * `npm i express-handlebars` (Motor de Plantillas Backend)
  * `npm i mongoose` (Conexión y Modelamiento de datos)
  
</br>  

* Creación del Código Fuente del Proyecto
  * Creamos carpeta `src`
  * Dentro de `src`, creamos archivo `index.js`
  * Dentro de `index.js` vamos a importar toda la config y librerías
  * Utilizaremos Babel para la compilación de la config.

</br> 

* Instalación de Babel
  * `npm i -D @babel/core` (Instalación dep. de desarrollo para el compilador de babel)
  * `npm i -D @babel/cli` (Instalación dep. de desarrollo para cli de babel)
  * `npm i -D @babel/node` (Instalación dep. de desarrollo para el uso de babel junto con node)
  * `npm i -D @babel/preset-env` (Instalación dep. de desarrollo para el autoajuste sintáctico entre babel y js).
  * `npm i -D nodemon` (Instalación dep. de desarrollo para reinicio del módulo principal).
  
