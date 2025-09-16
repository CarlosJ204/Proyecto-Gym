import { IFabricaPlanes } from "./IFabricaPlanes";
import { FabricaPlanAnual } from "./FabricaPlanAnual";
import { FabricaPlanMensual } from "./FabricaPlanMensual";
import { UsuarioNormal } from "./UsuarioNormal";
import { UsuarioConvenio } from "./UsuarioConvenio";

function main(): void {
  const fabricaAnual: IFabricaPlanes = new FabricaPlanAnual();
  const fabricaMensual: IFabricaPlanes = new FabricaPlanMensual();

  const usuario1: UsuarioNormal   = fabricaAnual.crearUsuarioNormal("Juan Perez", "M", 1.75, 28, 70, 0, 15);
  const usuario2: UsuarioConvenio = fabricaAnual.crearUsuarioConvenio("Maria Gomez", "F", 1.65, 32, 60, 0, 10);
  const usuario3: UsuarioNormal   = fabricaMensual.crearUsuarioNormal("Carlos Ruiz", "M", 1.80, 24, 80, 0, 5);
  const usuario4: UsuarioConvenio = fabricaMensual.crearUsuarioConvenio("Ana Torres", "F", 1.70, 29, 65, 0, 8);

  console.log("Sí está imprimiendo ✅");
  console.log("U1:", usuario1.tarifa(), usuario1.mostrarInformacion());
  console.log("U2:", usuario2.tarifa(), usuario2.mostrarInformacion());
  console.log("U3:", usuario3.tarifa(), usuario3.mostrarInformacion());
  console.log("U4:", usuario4.tarifa(), usuario4.mostrarInformacion());
}

main();
