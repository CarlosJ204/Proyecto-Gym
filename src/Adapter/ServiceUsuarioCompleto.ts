import  {UsuarioNormal} from "../Abstract factory/UsuarioNormal";
import { UsuarioConvenio } from "../Abstract factory/UsuarioConvenio";
import { IPlanDeEntrenamiento } from "../Decorator/IPlanDeEntrenamiento";
export 
class ServiceUsuarioCompleto {
    getUsuarioPlanDatos(usuario: UsuarioNormal | UsuarioConvenio, plan: IPlanDeEntrenamiento): any {
        return {
            informacionBase: usuario.mostrarInformacion(),
            tarifa: usuario.tarifa(),
            plan: plan.getTipoPlan(),
            entrenador: plan.getEntrenador(),
            dieta: plan.getDieta(),
            costoPlan: plan.calcularCosto(),
            costoTotal: usuario.tarifa() + plan.calcularCosto()
        };
    }
}