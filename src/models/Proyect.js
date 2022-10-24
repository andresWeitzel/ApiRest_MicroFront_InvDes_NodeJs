import { Schema, model } from 'mongoose'

//data schema
const proyectSchema = new Schema({
    proyecto_id: {
        type: Number,
        required: true,
        unique: true
    },
    proyecto_fuente: {
        type: String,
        required: true,
        unique: false
    },
    titulo: {
        type: String,
        required: true,
        unique: false
    },
    fecha_inicio: {
        type: String,
        required: true,
        unique: false
    },
    fecha_finalizacion: {
        type: String,
        required: true,
        unique: false
    },
    resumen: {
        type: String,
        required: true,
        unique: false
    },
    moneda_id: {
        type: Number,
        required: false,
        unique: false
    },
    monto_total_solicitado:  {
        type: Number,
        required: true,
        unique: false
    },
    monto_total_adjudicado: {
        type: Number,
        required: true,
        unique: false
    },
    monto_financiado_solicitado: {
        type: Number,
        required: true,
        unique: false
    },
    monto_financiado_adjudicado: {
        type: Number,
        required: true,
        unique: false
    },
    tipo_proyecto_id: {
        type: Number,
        required: false,
        unique: false
    },
    codigo_identificacion: {
        type: String,
        required: true,
        unique: true
    },
    palabras_clave: {
        type: String,
        required: false,
        unique: false
    },
    estado_id:  {
        type: Number,
        required: false,
        unique: false
    },
    fondo_anpcyt:  {
        type: String,
        required: false,
        unique: false
    },
    cantidad_miembros_F:  {
        type: Number,
        required: false,
        unique: false
    },
    cantidad_miembros_M:  {
        type: Number,
        required: false,
        unique: false
    },
    sexo_director:  {
        type: String,
        required: false,
        unique: false
    },
},{
    versionKey:false
})

//data model
export default model('Proyect',proyectSchema)


