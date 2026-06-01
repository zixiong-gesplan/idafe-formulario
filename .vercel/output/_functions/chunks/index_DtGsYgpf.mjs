import { c as createComponent } from './astro-component_CAmRxSP2.mjs';
import { k as renderTemplate, h as addAttribute, o as renderHead } from './entrypoint_DfDWxQFi.mjs';
import { createClient } from '@libsql/client/web';

const turso = createClient({
  url: "libsql://idafe-zixiong.aws-eu-west-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiI1NTEyNDI2Mi03MGQ2LTRmZjUtYmEwNC03NGQ3MGMxYjQzN2EiLCJpYXQiOjE3NDg1MDQ1MzcsInJpZCI6IjM4YzU2NmIyLTg5YWMtNDZkOS05ODJkLTk0NmRkZThiZmY1ZCJ9.riXVKtk6CLzPUDMzA75QQsCV04-vhjz0sRmTbAXQ6Eaf4eXWLKTFPET00pp242quUeO7PHF_lUtIdNthDBsxAw"
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const centros = [
    "IES GÜÍMAR (TENERIFE)",
    "IES CAIRASCO DE FIGUEROA (GRAN CANARIA)",
    "IES CANARIAS (TENERIFE)",
    "IES ALONSO PÉREZ DÍAZ (LA PALMA)",
    "IES SIMÓN PÉREZ (GRAN CANARIA)",
    "IES TÍAS (LANZAROTE)",
    "IES LAS GALLETAS (TENERIFE)",
    "IES LUIS COBIELLA CUEVAS (LA PALMA)",
    "IES FARO DE MASPALOMAS (GRAN CANARIA)",
    "IES MARINA CEBRIÁN (TENERIFE)",
    "IES JINÁMAR (GRAN CANARIA)",
    "IES ARGUINEGUÍN LIDIA PULIDO (GRAN CANARIA)",
    "IES PUNTAGORDA (LA PALMA)",
    "IES PLAYA HONDA (LANZAROTE)",
    "IES LOS CRISTIANOS (TENERIFE)",
    "IES LAS HUESAS (GRAN CANARIA)",
    "IES MONTAÑA DE GUAZA (TENERIFE)",
    "CEO EN VALLEHERMOSO (LA GOMERA)",
    "IES ALCALDE BERNABÉ RODRÍGUEZ (TENERIFE)",
    "CEIP TAIBIQUE (EL HIERRO)",
    "COLEGIO JAIME BALMES (GRAN CANARIA)",
    "IES JOSÉ ARENCIBIA GIL (GRAN CANARIA)",
    "IES VIERA Y CLAVIJO (TENERIFE)",
    "CEIP VALVERDE (EL HIERRO)",
    "IES VILLA DE FIRGAS (GRAN CANARIA)",
    "IES EN ALTAVISTA (LANZAROTE)",
    "IES TOMÁS DE IRIARTE (TENERIFE)",
    "CEO EN SANTIAGO APÓSTOL (LA GOMERA)"
  ];
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const centro = formData.get("centro");
      const best = formData.get("best");
      const middle = formData.get("middle");
      const worst = formData.get("worst");
      console.log("Form values:", { centro, best, middle, worst });
      await turso.execute(
        `INSERT INTO Answer (school, best, worst, middle) VALUES (?, ? , ?, ?)`,
        [
          typeof centro === "string" ? centro : "",
          typeof best === "string" ? best : "",
          typeof worst === "string" ? worst : "",
          typeof middle === "string" ? middle : ""
        ]
      );
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  }
  return renderTemplate(_a || (_a = __template([`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Formulario de Centros</title><script type="module">
      document.addEventListener('DOMContentLoaded', () => {
        const selects = [
          document.getElementById('centro'),
          document.getElementById('best'),
          document.getElementById('middle'),
          document.getElementById('worst')
        ];

        function updateOptions() {
          // Get selected values (excluding empty)
          const selected = selects.map(s => s.value).filter(v => v);

          selects.forEach((select, idx) => {
            Array.from(select.options).forEach(option => {
              if (option.value === "") {
                option.disabled = false;
                return;
              }
              // Disable if selected in another select
              option.disabled = selected.includes(option.value) && select.value !== option.value;
            });
          });
        }

        selects.forEach(select => {
          select.addEventListener('change', updateOptions);
        });

        updateOptions();
      });
    <\/script>`, "</head> <body", '> <img src="/idafe_gob_ctee_blanco.png" alt="IDAFE LOGO"> <div class="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl border border-blue-200"> <h1 class="text-3xl font-extrabold mb-6 text-center text-blue-700">Selecciona tu centro y valora otros tres</h1> <form method="POST" class="space-y-6" enctype="multipart/form-data"> <div> <label class="block font-semibold mb-2 text-blue-800" for="centro">Tu centro</label> <select name="centro" id="centro" class="w-full border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition" required> <option value="">Selecciona tu centro</option> ', ' </select> </div> <div> <label class="block font-semibold mb-2 text-blue-800" for="best">Primer lugar</label> <select name="best" id="best" class="w-full border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition" required> <option value="">Selecciona un centro</option> ', ' </select> </div> <div> <label class="block font-semibold mb-2 text-blue-800" for="middle">Segundo lugar</label> <select name="middle" id="middle" class="w-full border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition" required> <option value="">Selecciona un centro</option> ', ' </select> </div> <div> <label class="block font-semibold mb-2 text-blue-800" for="worst">Tercer lugar</label> <select name="worst" id="worst" class="w-full border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition" required> <option value="">Selecciona un centro</option> ', ' </select> </div> <button type="submit" class="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg w-full font-bold shadow-md">Enviar</button> </form> </div> </body></html>'])), renderHead(), addAttribute(`bg-[url("/bg.jpg")] min-h-screen flex flex-col items-center justify-center p-4`, "class"), centros.map((centro, index) => renderTemplate`<option${addAttribute(centro, "value")}>${index + 1}. ${centro}</option>`), centros.map((centro) => renderTemplate`<option${addAttribute(centro, "value")}>${centro}</option>`), centros.map((centro) => renderTemplate`<option${addAttribute(centro, "value")}>${centro}</option>`), centros.map((centro) => renderTemplate`<option${addAttribute(centro, "value")}>${centro}</option>`));
}, "C:/Users/zlinyan/workspace/idafe-formulario/src/pages/index.astro", void 0);

const $$file = "C:/Users/zlinyan/workspace/idafe-formulario/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
