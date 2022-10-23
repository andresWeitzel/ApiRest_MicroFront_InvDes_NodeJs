import {connect} from 'mongoose';

(async ()=>{
try {
    
    const db = await connect("mongodb://localhost/db_dataset_investigacion_desarrollo")

    console.log('== SE HA ESTABLECIDO LA CONEXIÓN DE LA DB ',db.connection.name,' CORRECTAMENTE ==')


} catch (error) {
    console.log(error)
}

})()
