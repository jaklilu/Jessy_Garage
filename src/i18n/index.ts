export const PHONE_DISPLAY = "(323) 867-6981";
export const PHONE_TEL = "+13238676981";
export const BUSINESS_NAME = "Jessy Garage Doors & Screens";

export type Locale = "en" | "es";

export type PageKey =
  | "home"
  | "repair"
  | "installations"
  | "testimonials"
  | "gallery"
  | "contact";

export const enPaths: Record<PageKey, string> = {
  home: "",
  repair: "repair",
  installations: "installations",
  testimonials: "testimonials",
  gallery: "gallery",
  contact: "contact",
};

export const esPaths: Record<PageKey, string> = {
  home: "",
  repair: "reparacion",
  installations: "instalaciones",
  testimonials: "testimonios",
  gallery: "galeria",
  contact: "contacto",
};

export function pathFor(locale: Locale, page: PageKey): string {
  const segment = locale === "en" ? enPaths[page] : esPaths[page];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function pageFromPath(locale: Locale, pathname: string): PageKey {
  const rest = pathname.replace(new RegExp(`^/${locale}/?`), "").replace(/\/$/, "");
  const map = locale === "en" ? enPaths : esPaths;
  const entry = (Object.entries(map) as [PageKey, string][]).find(([, seg]) => seg === rest);
  return entry?.[0] ?? "home";
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const current: Locale = pathname.startsWith("/es") ? "es" : "en";
  const page = pageFromPath(current, pathname);
  return pathFor(next, page);
}

export const en = {
  meta: {
    homeTitle: "Garage Door Company | Bell, CA — Jessy Garage Doors",
    homeDesc:
      "Family-owned garage door repair and installation in Bell and Los Angeles County. Free estimates. Call (323) 867-6981.",
    repairTitle: "Garage Door Repair | Bell, CA — Jessy Garage Doors",
    repairDesc:
      "Professional garage door repair in Bell, CA — openers, springs, rollers, tracks, and more.",
    installationsTitle: "Garage Door Installation | Bell, CA — Jessy Garage Doors",
    installationsDesc:
      "New and custom garage door installation in Bell, CA. Standard sizes, colors, and custom builds.",
    testimonialsTitle: "Customer Testimonials | Jessy Garage Doors",
    testimonialsDesc: "See what homeowners say about Jessy Garage Doors in Bell, CA.",
    galleryTitle: "Garage Door Gallery | Jessy Garage Doors",
    galleryDesc: "Screens, full-view, and flush garage doors from Jessy Garage Doors.",
    contactTitle: "Contact Us | Jessy Garage Doors — Bell, CA",
    contactDesc:
      "Call or write Jessy Garage Doors for a free estimate. Mon–Sat 8am–7pm. Emergency service available.",
  },
  nav: {
    home: "Home",
    repair: "Repair",
    installations: "Installations",
    testimonials: "Testimonials",
    gallery: "Gallery",
    contact: "Contact",
    call: "Call",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
    langEn: "EN",
    langEs: "ES",
  },
  common: {
    phone: PHONE_DISPLAY,
    freeEstimate: "Free estimate",
    callNow: "Call now",
    learnMore: "Learn more",
    bilingual: "Bilingual service — Hablamos Español",
    payments: "Cash, checks, and credit cards accepted",
    hours: "Monday — Saturday, 8:00 a.m. — 7:00 p.m.",
    emergency: "After-hours & emergency service calls available",
    serviceArea: "Los Angeles County and Bell, California",
    address: "Bell, CA 90201",
    tagline: "You Name It — We Fix It!",
  },
  footer: {
    rights: "All rights reserved.",
    aboutBlurb:
      "Family-owned garage door repair and installation serving Bell and Los Angeles County since 2015.",
  },
  stickyCall: {
    label: "Call Jessy Garage Doors",
  },
  home: {
    heroHeadline: "Your first-choice garage door company in Bell, CA",
    heroSupport:
      "Repair and installation for wood, glass, screens, and custom doors — done right by a family you can trust.",
    heroCtaCall: "Call (323) 867-6981",
    heroCtaEstimate: "Free estimate",
    repairTitle: "Garage door repairs & upgrades",
    repairBody:
      "When your door drags, stalls, or grinds, our technicians restore it fast — from fine-tuning to full component repair — so you get your garage back.",
    repairLink: "View repair services",
    installTitle: "Ready to install your new door",
    installBody:
      "Replace that tired door with a style that fits your home. We install standard and custom residential doors on your schedule.",
    installLink: "View installations",
    aboutEyebrow: "About us",
    aboutTitle: "Family-owned. Customer-first. Since 2015.",
    aboutBody:
      "Los Angeles County homeowners turn to Jessy Garage Doors — a husband-and-wife team, Jesse Martinez and Erika Canales, with more than 15 years in the trade. We listen, we communicate, and we get the job done right.",
    aboutCta: "Contact us",
    trustTitle: "What we handle",
    trustItems: [
      "Opener repair",
      "Spring repair",
      "Roller repair",
      "Door parts",
      "Door installation",
      "Custom doors",
    ],
  },
  repair: {
    eyebrow: "Repair",
    title: "Professional garage door repair in Bell, CA",
    intro:
      "Damage or wear can stop your door cold and hurt curb appeal. Our skilled technicians repair everything from hinges to electric openers — so when it is not working, we take care of the fix.",
    experienceTitle: "Unmatched experience",
    experienceBody:
      "We deliver high-quality work on every repair and keep a full collection of parts for a wide range of door types and models. If we do not have a part on hand, we order it as part of the job.",
    partsTitle: "We repair or replace",
    parts: [
      "Openers",
      "Springs",
      "Rollers",
      "Tracks",
      "Centers",
      "Hinges",
      "Remotes",
      "Keypads",
      "Weather seals",
      "Molding",
      "Door panels",
    ],
    cta: "Schedule a repair visit",
  },
  installations: {
    eyebrow: "Installations",
    title: "Garage door installation in Bell, CA",
    intro:
      "Take your property to the next level with a new garage door. We work with your schedule and arrive when it is convenient for you. Contact us for a free estimate.",
    perfectTitle: "The perfect door for your home",
    perfectBody:
      "Choose from an impressive inventory of colors, styles, and window options that complement your property.",
    sizesTitle: "Standard & non-standard sizes",
    sizesBody:
      "Standard-size doors measure 8' × 7' or 16' × 7'. Non-standard doors measure 9' × 7' or 18' × 7'. Standard colors include white, dark brown, and almond. Ask us for a full catalog.",
    customTitle: "Custom garage doors",
    customBody:
      "Have a design in mind? We build cost-effective custom doors to match your vision. A deposit is required; delivery typically takes 2–5 weeks.",
    cta: "Request a free estimate",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What they say about our garage door services",
    intro:
      "Most of our customers would recommend Jessy Garage Doors to others. Here is what they shared:",
    items: [
      {
        quote:
          "Fast and efficient. We called them and they provided a quote over the phone. They gave us a pretty competitive price and came soon after the initial phone call.",
        name: "Grace W.",
      },
      {
        quote:
          "Incredibly fast response to my Yelp inquiry, got to my house within 30 minutes and provided me with excellent service! I will definitely call upon their services again should I need my garage door opener serviced in the future. Thank you Jessy!",
        name: "Jennifer M.",
      },
      {
        quote:
          "Hooked us up with a great door. Can't really have complaints, they worked really fast!",
        name: "Melanie S.",
      },
      {
        quote:
          "Honestly, these guys kick ass. I highly recommend these guys to anyone looking to get a new garage door. I had 3 companies come out to give me a quote — the first was way too high and the other was close to Jessy's price, but he wasn't pushy and didn't ask for a deposit like the others. The door took 2 weeks, install was on time, they showed me how to set up the Wi‑Fi opener, cleaned up, and took the old door. Left my house looking better than before.",
        name: "JM",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Doors that elevate your home",
    intro: "Explore popular styles we install — screens, full-view glass, and clean flush panels.",
    categories: [
      {
        id: "screens",
        title: "Garage door screens",
        body: "Screen solutions that let air and light in while keeping pests out.",
      },
      {
        id: "full-view",
        title: "Full-view garage doors",
        body: "Glass full-view doors for modern curb appeal and natural light.",
      },
      {
        id: "flush",
        title: "Flush garage doors",
        body: "Clean, contemporary flush panels that suit a wide range of homes.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact our garage door company in Bell, CA",
    intro:
      "Reach out with questions or to request a free repair or installation estimate. We look forward to hearing from you.",
    phoneLabel: "Phone",
    hoursLabel: "Hours of operation",
    areaLabel: "Service area",
    formTitle: "Send a message",
    name: "Name",
    email: "Email",
    phone: "Phone number",
    comments: "Comments",
    submit: "Submit",
    sending: "Sending…",
    success: "Thank you! We have received your submission.",
    error: "Something went wrong. Please try again or call us.",
    required: "Required",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    commentsRequired: "Please enter your message.",
  },
};

export type Dictionary = typeof en;

export const es: Dictionary = {
  meta: {
    homeTitle: "Compañía de Puertas de Garaje | Bell, CA — Jessy Garage Doors",
    homeDesc:
      "Reparación e instalación de puertas de garaje de propiedad familiar en Bell y el Condado de Los Ángeles. Presupuestos gratis. Llame al (323) 867-6981.",
    repairTitle: "Reparación de Puertas de Garaje | Bell, CA — Jessy Garage Doors",
    repairDesc:
      "Reparación profesional de puertas de garaje en Bell, CA — abridores, resortes, rodillos, rieles y más.",
    installationsTitle: "Instalación de Puertas de Garaje | Bell, CA — Jessy Garage Doors",
    installationsDesc:
      "Instalación de puertas de garaje nuevas y a la medida en Bell, CA. Tamaños estándar, colores y diseños personalizados.",
    testimonialsTitle: "Testimonios de Clientes | Jessy Garage Doors",
    testimonialsDesc: "Lo que dicen los propietarios sobre Jessy Garage Doors en Bell, CA.",
    galleryTitle: "Galería de Puertas de Garaje | Jessy Garage Doors",
    galleryDesc: "Pantallas, puertas de vista completa y paneles flush de Jessy Garage Doors.",
    contactTitle: "Contáctenos | Jessy Garage Doors — Bell, CA",
    contactDesc:
      "Llame o escriba a Jessy Garage Doors para un presupuesto gratis. Lun–Sáb 8am–7pm. Servicio de emergencia disponible.",
  },
  nav: {
    home: "Inicio",
    repair: "Reparación",
    installations: "Instalaciones",
    testimonials: "Testimonios",
    gallery: "Galería",
    contact: "Contacto",
    call: "Llamar",
    menu: "Menú",
    close: "Cerrar",
    langLabel: "Idioma",
    langEn: "EN",
    langEs: "ES",
  },
  common: {
    phone: PHONE_DISPLAY,
    freeEstimate: "Presupuesto gratis",
    callNow: "Llamar ahora",
    learnMore: "Saber más",
    bilingual: "Servicio bilingüe — We speak English",
    payments: "Aceptamos efectivo, cheques y tarjetas de crédito",
    hours: "Lunes — Sábado, 8:00 a.m. — 7:00 p.m.",
    emergency: "Servicio fuera de horario y emergencias disponible",
    serviceArea: "Condado de Los Ángeles y Bell, California",
    address: "Bell, CA 90201",
    tagline: "¡Lo que diga — Lo reparamos!",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    aboutBlurb:
      "Reparación e instalación de puertas de garaje de propiedad familiar al servicio de Bell y el Condado de Los Ángeles desde 2015.",
  },
  stickyCall: {
    label: "Llamar a Jessy Garage Doors",
  },
  home: {
    heroHeadline: "Su compañía de puertas de garaje de primera elección en Bell, CA",
    heroSupport:
      "Reparación e instalación de puertas de madera, vidrio, pantallas y a la medida — hechas bien por una familia en la que puede confiar.",
    heroCtaCall: "Llamar al (323) 867-6981",
    heroCtaEstimate: "Presupuesto gratis",
    repairTitle: "Reparaciones y mejoras de puertas de garaje",
    repairBody:
      "Cuando su puerta se arrastra, se detiene o hace ruido, nuestros técnicos la restauran rápido — desde ajustes finos hasta reparación completa de componentes — para que recupere su garaje.",
    repairLink: "Ver servicios de reparación",
    installTitle: "Listos para instalar su puerta nueva",
    installBody:
      "Reemplace esa puerta vieja con un estilo que combine con su hogar. Instalamos puertas residenciales estándar y a la medida según su horario.",
    installLink: "Ver instalaciones",
    aboutEyebrow: "Sobre nosotros",
    aboutTitle: "De propiedad familiar. El cliente primero. Desde 2015.",
    aboutBody:
      "Los propietarios del Condado de Los Ángeles confían en Jessy Garage Doors — un equipo de esposos, Jesse Martinez y Erika Canales, con más de 15 años en el oficio. Escuchamos, nos comunicamos y hacemos el trabajo bien.",
    aboutCta: "Contáctenos",
    trustTitle: "Lo que manejamos",
    trustItems: [
      "Reparación de abridores",
      "Reparación de resortes",
      "Reparación de rodillos",
      "Piezas de puerta",
      "Instalación de puertas",
      "Puertas a la medida",
    ],
  },
  repair: {
    eyebrow: "Reparación",
    title: "Reparación profesional de puertas de garaje en Bell, CA",
    intro:
      "El daño o el desgaste pueden detener su puerta y afectar la apariencia de su hogar. Nuestros técnicos reparan desde bisagras hasta abridores eléctricos — cuando no funciona, nosotros lo arreglamos.",
    experienceTitle: "Experiencia inigualable",
    experienceBody:
      "Ofrecemos trabajo de alta calidad en cada reparación y mantenemos una amplia colección de piezas para muchos tipos y modelos de puertas. Si no tenemos una pieza a la mano, la pedimos como parte del trabajo.",
    partsTitle: "Reparamos o reemplazamos",
    parts: [
      "Abridores",
      "Resortes",
      "Rodillos",
      "Rieles",
      "Centros",
      "Bisagras",
      "Controles remotos",
      "Teclados",
      "Sellos climáticos",
      "Molduras",
      "Paneles de puerta",
    ],
    cta: "Programar una visita de reparación",
  },
  installations: {
    eyebrow: "Instalaciones",
    title: "Instalación de puertas de garaje en Bell, CA",
    intro:
      "Eleve su propiedad con una puerta de garaje nueva. Trabajamos con su horario y llegamos cuando le convenga. Contáctenos para un presupuesto gratis.",
    perfectTitle: "La puerta perfecta para su hogar",
    perfectBody:
      "Elija entre un amplio inventario de colores, estilos y opciones de ventanas que complementen su propiedad.",
    sizesTitle: "Tamaños estándar y no estándar",
    sizesBody:
      "Las puertas estándar miden 8' × 7' o 16' × 7'. Las no estándar miden 9' × 7' o 18' × 7'. Los colores estándar incluyen blanco, café oscuro y almendra. Pídanos el catálogo completo.",
    customTitle: "Puertas de garaje a la medida",
    customBody:
      "¿Tiene un diseño en mente? Creamos puertas personalizadas a un costo efectivo según su visión. Se requiere depósito; la entrega suele tomar de 2 a 5 semanas.",
    cta: "Solicitar presupuesto gratis",
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen de nuestros servicios de puertas de garaje",
    intro:
      "La mayoría de nuestros clientes recomendarían Jessy Garage Doors. Esto es lo que compartieron:",
    items: [
      {
        quote:
          "Rápidos y eficientes. Los llamamos y nos dieron un presupuesto por teléfono. El precio fue muy competitivo y llegaron poco después de la llamada inicial.",
        name: "Grace W.",
      },
      {
        quote:
          "¡Respuesta increíblemente rápida a mi consulta en Yelp! Llegaron a mi casa en 30 minutos y me dieron un excelente servicio. Sin duda los llamaré de nuevo si necesito servicio para el abridor. ¡Gracias Jessy!",
        name: "Jennifer M.",
      },
      {
        quote:
          "Nos instalaron una excelente puerta. No tengo quejas; ¡trabajaron muy rápido!",
        name: "Melanie S.",
      },
      {
        quote:
          "Honestamente, estos muchachos son excelentes. Los recomiendo a cualquiera que busque una puerta nueva. Tuve 3 compañías — la primera estaba demasiado cara y la otra cerca del precio de Jessy, pero él no fue insistente ni pidió depósito como los demás. La puerta tardó 2 semanas, la instalación fue a tiempo, me mostraron cómo configurar el abridor Wi‑Fi, limpiaron y se llevaron la puerta vieja. Dejaron mi casa mejor que antes.",
        name: "JM",
      },
    ],
  },
  gallery: {
    eyebrow: "Galería",
    title: "Puertas que elevan su hogar",
    intro:
      "Explore estilos populares que instalamos — pantallas, vista completa de vidrio y paneles flush limpios.",
    categories: [
      {
        id: "screens",
        title: "Pantallas para puertas de garaje",
        body: "Soluciones de pantalla que dejan entrar aire y luz mientras mantienen fuera las plagas.",
      },
      {
        id: "full-view",
        title: "Puertas de garaje de vista completa",
        body: "Puertas de vidrio de vista completa para un estilo moderno y luz natural.",
      },
      {
        id: "flush",
        title: "Puertas de garaje flush",
        body: "Paneles flush limpios y contemporáneos que combinan con muchos hogares.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contacte a nuestra compañía de puertas de garaje en Bell, CA",
    intro:
      "Escríbanos con preguntas o para solicitar un presupuesto gratis de reparación o instalación. Esperamos saber de usted.",
    phoneLabel: "Teléfono",
    hoursLabel: "Horario de operación",
    areaLabel: "Área de servicio",
    formTitle: "Enviar un mensaje",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    comments: "Comentarios",
    submit: "Enviar",
    sending: "Enviando…",
    success: "¡Gracias! Hemos recibido su mensaje.",
    error: "Algo salió mal. Intente de nuevo o llámenos.",
    required: "Requerido",
    nameRequired: "Por favor ingrese su nombre.",
    emailRequired: "Por favor ingrese su correo electrónico.",
    emailInvalid: "Por favor ingrese un correo electrónico válido.",
    commentsRequired: "Por favor ingrese su mensaje.",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "es" ? es : en;
}
