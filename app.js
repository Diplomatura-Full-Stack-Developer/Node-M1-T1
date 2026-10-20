import os from "os";
import { showMessage } from "./message.js";
import chalk from "chalk";
const label = chalk.hex("#9e8d37");
const text = chalk.hex("#28516c");
const separator = chalk.hex("#a43741");

console.log(separator("--------------------------------"));

console.log(label("Nombre: ") + text("Rubén Seco"));

console.log(separator("--------------------------------"));

console.log(text("\tMi principal motivación para aprender backend es el deseo de profundizar mis conocimientos de programación\ny comprender cómo funcionan las aplicaciones más allá de lo que vemos en la interfaz de usuario.\n\nMe interesa especialmente conocer cómo se diseñan las arquitecturas de software, cómo se modelan los datos,cómo se\nimplementan las reglas de negocio y cómo se construyen sistemas confiables, seguros y mantenibles.\n\nMi objetivo es seguir desarrollándome como programador full-stack, adquiriendo los conocimientos necesarios para\ndiseñar y construir aplicaciones completas, desde el frontend hasta la lógica del servidor y la persistencia de los datos.\n\nPor encima de todo, mi principal motivación es la pasión por aprender. Disfruto comprender los fundamentos,\nanalizar los problemas y descubrir nuevas herramientas y conceptos que me permitan mejorar como programador.\nConsidero que cada nuevo conocimiento amplía mis posibilidades de crear soluciones y afrontar desafíos cada vez más complejos."));

console.log(separator("--------------------------------"));

console.log(label(`Sistema operativo: `) + text(`${os.platform()}`));

console.log(label(`Memoria libre: `) + text(`${Math.round(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`));

console.log(separator("--------------------------------"));

showMessage(label("Hola Mundo desde el modulo message.js"));

console.log(separator("--------------------------------"));