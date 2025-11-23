import { IFabricaPlanes } from "./Abstract factory/IFabricaPlanes";
import { FabricaPlanAnual } from "./Abstract factory/FabricaPlanAnual";
import { FabricaPlanMensual } from "./Abstract factory/FabricaPlanMensual";
import { UsuarioNormal } from "./Abstract factory/UsuarioNormal";
import { PlanBase } from "./Decorator/PlanBase";
import { EntrenadorEspecial } from "./Decorator/EntrenadorEspecial";
import { IPlanDeEntrenamiento } from "./Decorator/IPlanDeEntrenamiento";
import { AdapterClienteYPlan, AdapterClienteYPlan as UsuarioPlanAdapter } from "./Adapter/AdapterClienteYPlan";
import DataBase from "./Singleton/DataBase";  
import { DietaEspecializada } from "./Decorator/DietaEspecializada";
import { IPayStrategy } from "./Strategy/IPayStrategy";
import { PagoTarifa } from "./Strategy/PagoTarifa";
import { PayByCreditCard } from "./Strategy/PayByCreditCard";
import { PayByCash } from "./Strategy/PayByCash";



function main(): void  {

  //  Inicializar la conexión a la base de datos (Singleton)
  const db = DataBase.getInstance();
  const connection = db.getConnection();
  
  //Crear fabricas de planes (Abstract Factory)
  const fabricaPlanAnual: IFabricaPlanes = new FabricaPlanAnual();
  const fabricaMensual: IFabricaPlanes = new FabricaPlanMensual();
  const usuario = fabricaMensual.crearUsuarioNormal("Juan Pérez", "M", 1.75, 28, 70, 50000);
  const usuario2 = fabricaMensual.crearUsuarioConvenio("Ana Gómez", "F", 1.65, 32, 60, 50000);
  const usuario3 = fabricaPlanAnual.crearUsuarioNormal("Luis Martínez", "M", 1.80, 35, 80, 50000);
  const usuario4 = fabricaPlanAnual.crearUsuarioConvenio("María Rodríguez", "F", 1.70, 30, 65, 50000);
 

  //  Crear plan de entrenamiento (Decorator)
  var plan: IPlanDeEntrenamiento = new PlanBase();
  var plan2: IPlanDeEntrenamiento = new PlanBase();
  var plan3: IPlanDeEntrenamiento = new PlanBase();
  var plan4: IPlanDeEntrenamiento = new PlanBase();
  plan.setEntrenador("Carlos Ruiz");
  plan.setDieta("Alta en proteínas");
  plan = new EntrenadorEspecial(plan);
  plan = new DietaEspecializada(plan);
  plan2.setEntrenador("NA");
  plan2.setDieta("Dieta balanceada");
  plan3.setEntrenador("Miguel Torres");
  plan3.setDieta("NA");
  plan4.setEntrenador("NA");
  plan4.setDieta("NA");
  plan4 = new DietaEspecializada(plan4);

  // Crearel adaptador combina usuario y plan usando el Service
  const adaptador = new AdapterClienteYPlan(usuario, plan);
  const adaptador2 = new AdapterClienteYPlan(usuario2, plan2);
  const adaptador3 = new AdapterClienteYPlan(usuario3, plan3);
  const adaptador4 = new AdapterClienteYPlan(usuario4, plan4);
  const pagoTarifa: PagoTarifa = new PagoTarifa();
  let strategy : IPayStrategy;
  //  Mostrar información completa y el adaptador
  //usuario1
  console.log("----- Información Completa del Usuario 1 -----");
  console.log(adaptador.mostrarInformacionCompleta());
  pagoTarifa.setTotalFee(adaptador.getCostoTotal());
  strategy = new PayByCreditCard(550000,"1234567890123456","123","12/25");
  pagoTarifa.processPayment(strategy);
  const paymentSuccessful = pagoTarifa.getTotalFee();
  if (strategy.pay(paymentSuccessful)) {
    pagoTarifa.setClosed();
  }
  else {
    console.log("El pago no se pudo completar.");
  }
  console.log("\n-------------------------------------------------\n");
  
  //usuario2
  console.log("----- Información Completa del Usuario 2 -----");
  console.log(adaptador2.mostrarInformacionCompleta());
  let strategy2 : IPayStrategy;
  pagoTarifa.setTotalFee(adaptador2.getCostoTotal());
  strategy2 = new PayByCash(70000);
  pagoTarifa.processPayment(strategy2);
  const paymentSuccessful2 = pagoTarifa.getTotalFee();
  if (strategy2.pay(paymentSuccessful2)) {
    pagoTarifa.setClosed();
  }
  else {
    console.log("El pago no se pudo completar.");
  }
  console.log("\n-------------------------------------------------\n");
  //usuario3
  console.log("----- Información Completa del Usuario 3 -----");
  console.log(adaptador3.mostrarInformacionCompleta());
  //usuario4
  console.log("----- Información Completa del Usuario 4 -----");
  console.log(adaptador4.mostrarInformacionCompleta());

  console.log("Conexion Base de datos ✅");

}

main();
