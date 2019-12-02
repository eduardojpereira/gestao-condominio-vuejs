import { http } from './config'

export default {

    listar:() => {
        return http.get('consumo/')
    },
    salvar:(consumo) => {
        return http.post('consumo/', consumo)
    }

}