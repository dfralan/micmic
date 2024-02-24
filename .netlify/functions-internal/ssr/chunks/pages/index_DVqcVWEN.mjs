import { c as $$ButtonAccess, d as $$ButtonAccessSecondary, $ as $$Container, S as SITE_TITLE, a as SITE_DESCRIPTION, b as $$Layout, e as $$Logo } from './404_BoTxr0m1.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BqY0Ve5w.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$c = createAstro("https://micmic.shop/");
const $$HeroBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HeroBlock;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row max-w-5xl mx-auto items-center gap-12"> <div class="md:w-1/2 flex flex-col gap-3"> <h1 class="text-5xl font-semibold text-gray-900">
Lleva tu negocio al siguiente nivel con <span class="font-brand font-bold text-orange-500">micmic</span> </h1> <p class="text-xl text-gray-800">
El aliado ideal para tu local negocio, hacemos tu día a día más fácil.
</p> <div class="flex flex-wrap gap-3"> ${renderComponent($$result2, "ButtonAccess", $$ButtonAccess, { "href": "#pricing", "class:list": "text-xl" }, { "default": ($$result3) => renderTemplate`Empezar ahora` })} ${renderComponent($$result2, "ButtonAccessSecondary", $$ButtonAccessSecondary, { "href": "#features", "class:list": "text-xl" }, { "default": ($$result3) => renderTemplate`Ver más` })} </div> </div> <div class="md:w-1/2 relative"> <img class="animate animation-smooth" src="/img/main-hero-phone.png" alt=""> <img class="absolute top-0 animate animation-fast" src="/img/main-hero-qr.png" alt=""> </div> </div> ` })}`;
}, "/Users/dfralan/micmic/src/components/HeroBlock.astro", void 0);

const $$Astro$b = createAstro("https://micmic.shop/");
const $$Flag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Flag;
  const { title, button } = Astro2.props;
  const defaultFlagClass = "flex flex-col w-full items-center py-24 bg-black justify-center";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([defaultFlagClass], "class:list")}> ${renderComponent($$result, "Container", $$Container, { "customClass": "justify-center items-center flex flex-col gap-6" }, { "default": ($$result2) => renderTemplate` <h1 class="text-5xl md:w-2/3 text-center font-semibold text-white"> <span>${title.start}</span> <span class="relative"> <span>${title.break}</span> <div class="absolute top-50 start-0 fill-orange-500 animate draw-me animation-smooth"> <svg class="w-full" width="130" height="19" viewBox="0 0 130 19" xmlns="http://www.w3.org/2000/svg"> <path d="M125.966 4.18561C76.0096 -3.55974 32.2954 2.49604 6.25252 11.8721C-2.68983 15.0917 1.2786 20.0634 4.20401 18.5081C8.24834 16.3579 64.1408 -0.614941 125.963 8.52516C130.299 9.16607 130.83 4.93973 125.966 4.18561Z"></path> </svg> </div> </span> <span>${title.end}</span> </h1> ${renderComponent($$result2, "ButtonAccess", $$ButtonAccess, { "href": button.href, "class:list": ["text-xl w-fit mx-auto", button.customClass] }, { "default": ($$result3) => renderTemplate`${button.content}` })} ` })} </div>`;
}, "/Users/dfralan/micmic/src/components/blocks/Flag.astro", void 0);

const $$Astro$a = createAstro("https://micmic.shop/");
const $$FlagCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FlagCTA;
  let title = {
    start: "Llev\xE1 tu negocio al siguiente ",
    break: "nivel,",
    end: " est\xE1s a solo un paso."
  };
  let button = {
    content: "Empezar ahora",
    href: "#"
  };
  return renderTemplate`${renderComponent($$result, "Flag", $$Flag, { "title": title, "button": button })}`;
}, "/Users/dfralan/micmic/src/components/FlagCTA.astro", void 0);

const $$Astro$9 = createAstro("https://micmic.shop/");
const $$WspButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$WspButton;
  return renderTemplate`${maybeRenderHead()}<a href="https://api.whatsapp.com/send?phone=5493412293515&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20micmic." target="_blank" style="background-color: #1BD03E;" class="fixed right-0 bottom-0 flex flex-row gap-3 text-white md:text-lg fill-white m-6 py-3 pe-3 ps-4 items-center justify-center rounded-full"> <p>Habla con un asesor</p> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.7204 16.0897C20.6658 16.0635 18.6246 15.0583 18.2618 14.9278C18.1137 14.8746 17.9551 14.8227 17.7864 14.8227C17.5107 14.8227 17.2792 14.96 17.0988 15.2298C16.8949 15.5329 16.2777 16.2545 16.0869 16.47C16.062 16.4985 16.028 16.5325 16.0076 16.5325C15.9894 16.5325 15.6735 16.4024 15.5778 16.3608C13.3881 15.4097 11.726 13.1223 11.4981 12.7366C11.4656 12.6811 11.4642 12.6559 11.4639 12.6559C11.4719 12.6266 11.5456 12.5528 11.5836 12.5147C11.6947 12.4047 11.8152 12.2597 11.9317 12.1194C11.9869 12.0529 12.0422 11.9864 12.0965 11.9237C12.2656 11.7269 12.3408 11.5742 12.4281 11.3973L12.4738 11.3054C12.6869 10.882 12.5049 10.5248 12.4461 10.4094C12.3978 10.3128 11.5359 8.23267 11.4443 8.01412C11.2239 7.48676 10.9327 7.24121 10.5281 7.24121C10.4906 7.24121 10.5281 7.24121 10.3707 7.24785C10.1789 7.25594 9.13483 7.39339 8.6732 7.68439C8.18365 7.99303 7.35547 8.97685 7.35547 10.707C7.35547 12.2642 8.34365 13.7345 8.76792 14.2937C8.77847 14.3078 8.79783 14.3364 8.82592 14.3775C10.4507 16.7504 12.4763 18.5089 14.5297 19.3292C16.5065 20.1188 17.4426 20.2101 17.9747 20.2101H17.9748C18.1985 20.2101 18.3775 20.1926 18.5354 20.177L18.6356 20.1675C19.3185 20.1069 20.8192 19.3293 21.1606 18.3807C21.4295 17.6335 21.5004 16.8171 21.3215 16.5208C21.1989 16.3194 20.9877 16.218 20.7204 16.0897Z" fill="white"></path> <path d="M14.2485 0C6.66525 0 0.495797 6.12309 0.495797 13.6494C0.495797 16.0836 1.14725 18.4665 2.38134 20.5519L0.0192516 27.5196C-0.0247484 27.6495 0.00797888 27.7932 0.10407 27.891C0.173433 27.9618 0.267524 28 0.363615 28C0.400433 28 0.437524 27.9945 0.473706 27.9829L7.73916 25.6742C9.72734 26.7365 11.9744 27.2972 14.2486 27.2972C21.8312 27.2973 28 21.1748 28 13.6494C28 6.12309 21.8312 0 14.2485 0ZM14.2485 24.454C12.1086 24.454 10.036 23.8361 8.25434 22.667C8.19443 22.6276 8.12489 22.6075 8.05489 22.6075C8.01789 22.6075 7.9808 22.6131 7.94471 22.6245L4.30516 23.7815L5.48007 20.3152C5.51807 20.203 5.49907 20.0793 5.42907 19.9836C4.07234 18.1298 3.35516 15.9395 3.35516 13.6494C3.35516 7.69091 8.24189 2.84327 14.2484 2.84327C20.2543 2.84327 25.1404 7.69091 25.1404 13.6494C25.1405 19.6071 20.2544 24.454 14.2485 24.454Z" fill="white"></path> </svg> </a>`;
}, "/Users/dfralan/micmic/src/components/WspButton.astro", void 0);

const $$Astro$8 = createAstro("https://micmic.shop/");
const $$FeatureBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FeatureBlock;
  const { title, subtitle, featureClass, imageA, imageB } = Astro2.props;
  const defaultFeatureClass = "flex flex-col max-w-5xl mx-auto items-center text-center md:text-start";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([defaultFeatureClass, featureClass], "class:list")}> <div class="md:w-1/2 flex flex-col gap-3"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"> ${title} </h1> <p class="text-xl text-gray-800"> ${subtitle} </p> </div> <div class="mx-12 md:mx-6 md:w-1/2 relative"> <img${addAttribute(imageA.customClass, "class:list")}${addAttribute(imageA.src, "src")} alt=""> <img${addAttribute(imageB.customClass, "class:list")}${addAttribute(imageB.src, "src")} alt=""> </div> </div>`;
}, "/Users/dfralan/micmic/src/components/blocks/FeatureBlock.astro", void 0);

const features = [
  {
    title: "Organizá tus productos",
    subtitle: "No más etiquetas de precios de forma desordenada. Cambiá precios, nombres de productos, descripciones, y visualizá los cambios instantáneamente.",
    imgA: {
      src: "/img/qr-micmic.png",
      alt: "Mockp",
      customClass: "animate animation-smooth absolute top-0 hideOnHover"
    },
    imgB: {
      src: "/img/etiquetas-superpuestas.png",
      alt: "Mockp",
      customClass: ""
    }
  },
  {
    title: "Optimizá costos",
    subtitle: "No más comisiones excesivas, ni gastos en impresión de cartas. Un sólo pago fijo debitado mensualmente de tu cuenta de Mercado Pago.",
    imgA: {
      src: "/img/more-sales-under.png",
      alt: "Mockp",
      customClass: "animate animation-fast"
    },
    imgB: {
      src: "/img/more-sales-upper.png",
      alt: "Mockp",
      customClass: "animate animation-smooth absolute top-0"
    }
  },
  {
    title: "Automatizá tus pedidos",
    subtitle: "Mejorá los tiempos de atención y aumentá la convertibilidad. Ofrecé promociones, variantes, pedidos pickup y local.",
    imgA: {
      src: "/img/pickup-alone.png",
      alt: "Mockp",
      customClass: "animate animation-fast"
    },
    imgB: {
      src: "/img/pickup-focus.png",
      alt: "Mockp",
      customClass: "animate animation-smooth absolute top-0"
    }
  }
];

const $$Astro$7 = createAstro("https://micmic.shop/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Features;
  const allfeatures = features.map((feature) => ({
    title: feature.title,
    subtitle: feature.subtitle,
    imageA: feature.imgA,
    imageB: feature.imgB
  }));
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "id": "features", "customClass": "flex flex-col gap-12" }, { "default": ($$result2) => renderTemplate`${allfeatures.map((feature, index) => renderTemplate`${renderComponent($$result2, "FeatureBlock", $$FeatureBlock, { "title": feature.title, "subtitle": feature.subtitle, "featureClass": index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", "imageA": feature.imageA, "imageB": feature.imageB })}`)}` })}`;
}, "/Users/dfralan/micmic/src/components/Features.astro", void 0);

const $$Astro$6 = createAstro("https://micmic.shop/");
const $$FeatureLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FeatureLine;
  const { check, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("flex flex-row gap-3 " + (check ? "fill-green-500" : "fill-red-700"), "class")}> ${check ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"> <path d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"> <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"></path> </svg>`} ${content} </div>`;
}, "/Users/dfralan/micmic/src/components/blocks/FeatureLine.astro", void 0);

const $$Astro$5 = createAstro("https://micmic.shop/");
const $$PricingCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PricingCard;
  const { title, label, subtitle, pricing, planFeatures, callToAction } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-8 flex flex-col gap-4 border overflow-hidden w-full lg:w-1/3 rounded-2xl border animate animation-smooth"> <div class="flex flex-row justify-between items-center"> ${label ? renderTemplate`<h1 class="text-2xl font-semibold"> ${title} </h1>
                <p class="text-sm bg-black rounded-full px-2 py-1 flex justify-center items-center text-center text-xs font-semibold text-white"> ${label} </p>` : renderTemplate`<h1 class="text-2xl font-semibold"> ${title} </h1>`} </div> <p class="text-gray-600">${subtitle}</p> <div class="flex flex-row gap-2"> <h1 class="font-bold text-3xl w-full"> ${pricing.price}<span>${pricing.currency}</span> <span class="font-light text-gray-600 text-xl">${pricing.interval}</span> </h1> </div> <ul> ${planFeatures.map((feature) => renderTemplate`<li> ${renderComponent($$result, "FeatureLine", $$FeatureLine, { "content": feature.content, "check": feature.check })} </li>`)} </ul> <div class="h-full flex justify-end items-end"> ${label ? renderTemplate`${renderComponent($$result, "ButtonAccess", $$ButtonAccess, { "href": callToAction.href, "target": callToAction.target, "class:list": [
    "text-xl w-full text-center mx-auto mt-4",
    callToAction.customClass
  ] }, { "default": ($$result2) => renderTemplate`${callToAction.content}` })}` : renderTemplate`${renderComponent($$result, "ButtonAccessSecondary", $$ButtonAccessSecondary, { "href": callToAction.href, "target": callToAction.target, "class:list": [
    "text-xl w-full text-center mx-auto mt-4",
    callToAction.customClass
  ] }, { "default": ($$result2) => renderTemplate`${callToAction.content}` })}`} </div> </div>`;
}, "/Users/dfralan/micmic/src/components/blocks/PricingCard.astro", void 0);

const plans = [
  {
    title: "Plan Inicial",
    label: "",
    subtitle: "Lo esencial para tu negocio",
    pricing: {
      price: "4989",
      currency: "ARS",
      interval: "/mes"
    },
    planFeatures: [
      {
        content: "Menú Digital Autoadministrable",
        check: true
      },
      {
        content: "Botón de sugerencias",
        check: true
      },
      {
        content: "Pedidos por whatsapp",
        check: false
      },
      {
        content: "Pedidos pickup y local",
        check: false
      }
    ],
    callToAction: {
      content: "Empezar",
      href: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a79019e018a7f75d0130292",
      target: "_self"
    }
  },
  {
    title: "Plan Intermedio",
    label: "La mejor opción",
    subtitle: "Más funcionalidades para tu negocio",
    pricing: {
      price: "7289",
      currency: "ARS",
      interval: "/mes"
    },
    planFeatures: [
      {
        content: "Menú Digital Autoadministrable",
        check: true
      },
      {
        content: "Botón de sugerencias",
        check: true
      },
      {
        content: "Pedidos por whatsapp",
        check: true
      },
      {
        content: "Pedidos pickup y local",
        check: true
      },
      {
        content: "Integración con redes sociales",
        check: true
      }
    ],
    callToAction: {
      content: "Empezar",
      href: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848af994da018b056cc2720890",
      target: "_self"
    }
  },
  {
    title: "Plan Avanzado",
    label: "",
    subtitle: "Todo lo que tu negocio necesita",
    pricing: {
      price: "Consultar",
      currency: "",
      interval: ""
    },
    planFeatures: [
      {
        content: "Menú Digital Autoadministrable",
        check: true
      },
      {
        content: "Botón de sugerencias",
        check: true
      },
      {
        content: "Pedidos por whatsapp",
        check: true
      },
      {
        content: "Pedidos pickup y local",
        check: true
      },
      {
        content: "Integración con redes sociales",
        check: true
      },
      {
        content: "Soporte premium",
        check: true
      },
      {
        content: "Personalización avanzada",
        check: true
      },
      {
        content: "Terminal de autoservicio",
        check: true
      }
    ],
    callToAction: {
      content: "Contactar con ventas",
      href: "https://api.whatsapp.com/send?phone=5493412293515&text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Empresas%20de%20micmic.",
      target: "_blank"
    }
  }
];

const $$Astro$4 = createAstro("https://micmic.shop/");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pricing;
  const allPlans = plans.map((plan) => ({
    title: plan.title,
    label: plan.label,
    subtitle: plan.subtitle,
    pricing: plan.pricing,
    planFeatures: plan.planFeatures,
    callToAction: plan.callToAction
  }));
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "id": "pricing", "customClass": "justify-center items-center flex flex-col gap-12" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl md:w-2/3 text-center font-semibold text-gray-900 w-full">
Paga sólo por lo que necesites.
</h1> <div class="flex flex-col lg:flex-row gap-12 w-full"> ${allPlans.map((plan) => renderTemplate`${renderComponent($$result2, "PricingCard", $$PricingCard, { "title": plan.title, "label": plan.label, "subtitle": plan.subtitle, "pricing": plan.pricing, "planFeatures": plan.planFeatures, "callToAction": plan.callToAction })}`)} </div> ` })}`;
}, "/Users/dfralan/micmic/src/components/Pricing.astro", void 0);

const frontendMentorFAQs = [
  {
    question: "¿Cómo puedo actualizar mi menú con micmic?",
    answer: "Con micmic, actualizar tu menú es fácil. Nuestra plataforma te permite modificar platos, cambiar precios y añadir sugerencias de forma rápida y sencilla a través de tu cuenta de gmail. Solo necesitas iniciar sesión en tu cuenta y realizar los cambios que desees."
  },
  {
    question: "¿Puedo personalizar el diseño del menú?",
    answer: "¡Sí! Puedes personalizar el diseño de tu menú para que se ajuste a la identidad de tu local. Puedes elegir colores, fuentes y organizar tu menú de la forma que desees para crear una experiencia única y atractiva para tus clientes."
  },
  {
    question: "¿Cuáles son los métodos de pago disponibles para los planes de micmic?",
    answer: "Aceptamos pagos con tarjetas de crédito y débito, transferencias bancarias. Una vz realices el primer pago, se te debitará mensualmente el monto del plan que hayas elegido."
  },
  {
    question: "¿Es posible cambiar de un plan a otro en cualquier momento?",
    answer: "Sí, puedes cambiar de un plan a otro en cualquier momento según tus necesidades y preferencias. Solo ponte en contacto con nuestro equipo de atención al cliente y estaremos encantados de ayudarte a hacer la transición al plan que mejor se adapte a tus requerimientos."
  },
  {
    question: "¿Puedo ver una tienda de ejemplo?",
    answer: `Viví la experiencia de usuario en <a class='underline text-orange-500' href="https://yendo.delivery/partner/demo">micmic.shop/partner/Burguer-Queen-Demo.</a>`
  },
  {
    question: "¿Donde envío los archivos para el menú?",
    answer: `Enviá tus archivos a <a class='underline text-orange-500' href="mailto:global@micmic.shop">global@micmic.shop</a> especificando ciudad y nombre de usuario.`
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://micmic.shop/");
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FAQ;
  const faqs = frontendMentorFAQs.map((faq) => ({
    question: faq.question,
    answer: faq.answer
  }));
  return renderTemplate(_a || (_a = __template(["", ' <script>\n    const e = document.querySelectorAll(".faq");\n    for (let t = 0; t < e.length; t++) {\n        const a = e[t].querySelector(".faq-answer"),\n            o = e[t].querySelector(".arrow-down");\n        e[t].addEventListener("click", () => {\n            for (let r = 0; r < e.length; r++) {\n                const s = e[r].querySelector(".faq-answer"),\n                    l = e[r].querySelector(".arrow-down");\n                e[t] != e[r] &&\n                    ((s.style.maxHeight = "0px"),\n                    l.classList.replace("rotate-180", "rotate-0"));\n            }\n            o.classList.contains("rotate-180")\n                ? ((a.style.maxHeight = 0 + "px"),\n                  o.classList.replace("rotate-180", "rotate-0"))\n                : ((a.style.maxHeight = a.scrollHeight + "px"),\n                  o.classList.replace("rotate-0", "rotate-180"));\n        });\n    }\n<\/script>'])), renderComponent($$result, "Container", $$Container, { "id": "faqs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-12 md:mt-20 flex flex-col gap-12 lg:flex-row"> <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left"> <h2 class="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
Preguntas frecuentes
</h2> <p class="mt-4 text-gray-600">
Encontrá lo que estas buscando.
</p> </div> <div class="divide-y divide-gray-200 border-y border-gray-200 lg:w-7/12"> ${faqs.map((faq) => renderTemplate`<div> <dl class="faq mx-auto max-w-2xl"> <dt class="text-lg"> <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-1" data-active="false"> <span class="font-medium text-gray-900"> ${faq.question} </span> <span class="ml-6 flex h-7 items-center"> <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> </span> </button> </dt> <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-1" style="max-height: 0px;"> <p class="pb-6 text-base text-gray-600 fill-as-inner"${addAttribute(faq.answer, "loom")}> ${faq.answer} </p> </dd> </dl> </div>`)} </div> </div> ` }));
}, "/Users/dfralan/micmic/src/components/FAQ.astro", void 0);

const $$Astro$2 = createAstro("https://micmic.shop/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "https://micmic.shop/img/link-img.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$HeroBlock, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FlagCTA", $$FlagCTA, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "WspButton", $$WspButton, {})} </main> ` })}`;
}, "/Users/dfralan/micmic/src/pages/partner/index.astro", void 0);

const $$file$1 = "/Users/dfralan/micmic/src/pages/partner/index.astro";
const $$url$1 = "/partner";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://micmic.shop/");
const $$Load = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Load;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center w-full h-[450px]"> ${renderComponent($$result, "Logo", $$Logo, {})} <div class="flex flex-row gap-2 items-center justify-center"> <svg class="w-6 h-6 animate-spin" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"> <path d="M362.5 37.5C362.5 27.5544 366.451 18.0161 373.483 10.9835C380.516 3.95088 390.054 0 400 0C506.087 0 607.828 42.1427 682.843 117.157C757.857 192.172 800 293.913 800 400C800 409.946 796.049 419.484 789.016 426.516C781.984 433.549 772.446 437.5 762.5 437.5C752.554 437.5 743.016 433.549 735.984 426.516C728.951 419.484 725 409.946 725 400C725 313.805 690.759 231.14 629.81 170.19C568.86 109.241 486.195 75 400 75C390.054 75 380.516 71.0491 373.483 64.0165C366.451 56.9839 362.5 47.4456 362.5 37.5Z"></path> </svg> <p>Estaremos con vos en un segundo...</p> </div> </div>`;
}, "/Users/dfralan/micmic/src/components/Load.astro", void 0);

const $$Astro = createAstro("https://micmic.shop/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const meta = {
    "http-equiv": "refresh",
    content: "2; url=/partner"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "https://micmic.shop/img/link-img.jpg", "meta": [meta] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Load", $$Load, {})} </main> ` })}`;
}, "/Users/dfralan/micmic/src/pages/index.astro", void 0);

const $$file = "/Users/dfralan/micmic/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
