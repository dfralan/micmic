/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_Dm1IyYWa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, S as SITE_TITLE, a as SITE_DESCRIPTION, b as $$Layout } from './404_C00g9QNy.mjs';

const cc = {
  name: "",
  description: "",
  content: `
    <h1 class="text-2xl font-semibold">Condiciones del Servicio de micmic.shop</h1>
    <p>Última actualización: 23/02/2024</p>
    <p>Bienvenido a micmic.shop ("Sitio web"). Estas Condiciones del Servicio rigen su acceso y uso del sitio web de micmic, así como cualquier servicio relacionado con él. Al acceder o utilizar nuestro sitio web, usted acepta estar legalmente vinculado por estas Condiciones del Servicio.</p>
    <h2 class='text-xl'>Uso del Sitio Web:</h2>
    <ol>
        <li>a. Usted acepta utilizar el sitio web de micmic.shop solo para fines legales y de conformidad con estas Condiciones del Servicio.</li>
        <li>b. Usted acepta no utilizar el sitio web de manera que pueda dañar, deshabilitar, sobrecargar o perjudicar el sitio web o interferir con el uso y disfrute del mismo por parte de otros usuarios.</li>
    </ol>
    <h2 class='text-xl'>Información Personal y Privacidad:</h2>
    <ol>
        <li>a. Al utilizar nuestro sitio web, usted acepta las disposiciones de nuestra Política de Privacidad, que describe cómo recopilamos, utilizamos y compartimos su información personal. Lea nuestra Política de Privacidad detenidamente para comprender cómo manejamos su información.</li>
    </ol>
    <h2 class='text-xl'>Cuentas de Usuario:</h2>
    <ol>
        <li>a. Al registrarse en micmic.shop, usted es responsable de proporcionar información precisa y actualizada.</li>
        <li>b. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y acepta no compartir esta información con terceros.</li>
    </ol>
    <h2 class='text-xl'>Contenido del Usuario:</h2>
    <ol>
        <li>a. Usted puede tener la oportunidad de enviar comentarios, opiniones, fotografías u otro contenido al sitio web. Al enviar dicho contenido, usted otorga a micmic una licencia mundial, no exclusiva, libre de regalías y sublicenciable para utilizar, reproducir, modificar, adaptar, publicar, traducir y distribuir dicho contenido en cualquier medio.</li>
    </ol>
    <h2 class='text-xl'>Propiedad Intelectual:</h2>
    <ol>
        <li>a. El contenido del sitio web de micmic.shop, incluidos los logotipos, marcas comerciales, imágenes, textos y otros materiales, están protegidos por derechos de autor y otras leyes de propiedad intelectual.</li>
    </ol>
    <h2 class='text-xl'>Limitación de Responsabilidad:</h2>
    <ol>
        <li>a. micmic no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso o la imposibilidad de utilizar el sitio web, incluso si se ha informado previamente de la posibilidad de tales daños.</li>
    </ol>
    <h2 class='text-xl'>Cambios en los Términos:</h2>
    <ol>
        <li>a. micmic se reserva el derecho de actualizar o modificar estas Condiciones del Servicio en cualquier momento. Se le notificarán los cambios significativos mediante una notificación en el sitio web o por correo electrónico antes de que los cambios entren en vigencia.</li>
    </ol>
    <h2 class='text-xl'>Contacto:</h2>
    <ol>
        <li>a. Si tiene alguna pregunta o inquietud sobre estas Condiciones del Servicio, comuníquese con nosotros a través de [correo electrónico de contacto].</li>
    </ol>
    <p>Al utilizar micmic.shop, usted acepta los términos de estas Condiciones del Servicio.</p>
    `
};

const $$Astro$2 = createAstro("https://micmic.shop/");
const $$Legal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Legal;
  const { legal } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "id": "faqs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-12 md:mt-20 flex flex-col gap-12 lg:flex-row"> <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left"> <h2 class="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl"> ${legal.name} </h2> <p class="mt-4 text-gray-600"> ${legal.description} </p> </div> ${renderTemplate`<div class="fill-as-inner flex flex-col gap-3 lg:w-7/12"${addAttribute(legal.content, "loom")}> ${legal.content} </div>`} </div> ` })}`;
}, "/Users/dfralan/micmic/src/components/blocks/Legal.astro", void 0);

const $$Astro$1 = createAstro("https://micmic.shop/");
const $$Conditions$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Conditions$1;
  let legal = {
    name: cc.name,
    description: cc.description,
    content: cc.content
  };
  return renderTemplate`${renderComponent($$result, "Legal", $$Legal, { "legal": legal })}`;
}, "/Users/dfralan/micmic/src/components/Conditions.astro", void 0);

const $$Astro = createAstro("https://micmic.shop/");
const $$Conditions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Conditions;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "https://micmic.shop/img/link-img.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ConditionsBlock", $$Conditions$1, {})} </main> ` })}`;
}, "/Users/dfralan/micmic/src/pages/conditions.astro", void 0);

const $$file = "/Users/dfralan/micmic/src/pages/conditions.astro";
const $$url = "/conditions";

const conditions = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Conditions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Legal as $, conditions as c };
