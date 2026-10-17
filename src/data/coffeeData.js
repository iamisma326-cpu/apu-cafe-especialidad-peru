export const originsData = [
  {
    id: 'cusco',
    region: 'Cusco',
    valley: 'Valle de La Convención · Huayopata',
    title: 'Bosques de Niebla Imperial',
    altitude: '1,950 – 2,200 m.s.n.m.',
    coordinates: '13°00′S 72°33′O',
    varieties: 'Geisha & Typica',
    harvest: 'Junio – Septiembre',
    description:
      'A los pies del nevado Verónica, las brisas glaciares se encuentran con la humedad amazónica. Produce cafés florales de acidez málica sedosa y notas intensas a jazmín y durazno blanco.',
    image:
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cajamarca',
    region: 'Cajamarca',
    valley: 'San Ignacio & Jaén',
    title: 'Cordillera de los Tabaconas',
    altitude: '1,750 – 2,050 m.s.n.m.',
    coordinates: '05°08′S 79°00′O',
    varieties: 'Bourbon Rojo & Caturra',
    harvest: 'Mayo – Agosto',
    description:
      'Suelos arcillosos ricos en minerales y sombra de pacay nativo. Sus microlotes destacan por una dulzura achocolatada profunda, panela orgánica y jugosidad de frutos rojos maduros.',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'amazonas',
    region: 'Amazonas',
    valley: 'Rodríguez de Mendoza · Lonya Grande',
    title: 'Ceja de Selva Alta',
    altitude: '1,800 – 2,100 m.s.n.m.',
    coordinates: '06°23′S 77°28′O',
    varieties: 'Catimor, Pache & Geisha',
    harvest: 'Junio – Octubre',
    description:
      'Pioneros en secado solar en camas elevadas dentro de invernaderos andinos. Perfiles exóticos con notas a maracuyá, miel de abeja silvestre y un postgusto prolongado a cacao fino.',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Cosecha Selectiva a Mano',
    subtitle: 'Solo cerezas en su pico exacto de grados Brix',
    metric: '24° – 26° Brix',
    protocol: 'Recolección manual en 3 pasadas',
    description:
      'Nuestros caficultores recolectan únicamente las cerezas rojo sangre que alcanzan una concentración óptima de azúcares. Las cerezas verdes o sobremaduras se descartan por flotación en agua de manantial.',
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    number: '02',
    title: 'Fermentación Anaeróbica Controlada',
    subtitle: 'Desarrollo de precursores aromáticos florales y frutales',
    metric: '48 a 72 Horas',
    protocol: 'Tanques herméticos a 18°C',
    description:
      'En tanques cerrados con válvula de escape, las levaduras nativas del bosque nuboso transforman el mucílago bajo monitoreo constante de pH y temperatura, resaltando notas de frutos tropicales y flores blancas.',
    image:
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    number: '03',
    title: 'Secado Lento en Camas Africanas',
    subtitle: 'Estabilidad celular y longevidad del grano verde',
    metric: '10.8% Humedad',
    protocol: '18 – 24 días bajo sombra parabólica',
    description:
      'El café pergamino reposa sobre mallas elevadas donde circula la brisa seca de los Andes. Se remueve manualmente cada dos horas hasta estabilizar la actividad de agua y sellar su dulzor natural.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    number: '04',
    title: 'Tueste de Precisión en Barranco',
    subtitle: 'Curvas de calor diseñadas para filtrado y espresso moderno',
    metric: 'Lotes de 12 kg',
    protocol: 'Curva Cropster · Desarrollo 14.5%',
    description:
      'Tostamos cada martes en Lima con perfiles de transferencia térmica suave que respetan la delicadeza del origen, evitando notas amargas o ahumadas para que brille la identidad de cada finca.',
    image:
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1000&q=80',
  },
];

export const productsData = [
  {
    id: 'lot-geisha-cusco',
    name: 'Inti Raymi · Geisha Lavado',
    region: 'Cusco',
    producer: 'Familia Quispe · Huayopata',
    altitude: '2,150 m.s.n.m.',
    variety: 'Geisha',
    process: 'Lavado Doble Fermentación',
    sca: '90.2',
    price: 68.0,
    notes: ['Jazmín', 'Bergamota', 'Durazno Blanco', 'Miel Floral'],
    acidity: 5,
    sweetness: 5,
    image:
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lot-bourbon-cajamarca',
    name: 'El Santuario · Bourbon Rojo',
    region: 'Cajamarca',
    producer: 'Elena Huamán · San Ignacio',
    altitude: '1,920 m.s.n.m.',
    variety: 'Bourbon Rojo',
    process: 'Honey Negro',
    sca: '88.5',
    price: 49.0,
    notes: ['Frambuesa', 'Chancaca', 'Cacao 70%', 'Mandarina'],
    acidity: 4,
    sweetness: 5,
    image:
      'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lot-natural-amazonas',
    name: 'Kuelap Niebla · Natural Anaeróbico',
    region: 'Amazonas',
    producer: 'Finca Los Chilchos · Lonya Grande',
    altitude: '1,980 m.s.n.m.',
    variety: 'Caturra & Pache',
    process: 'Natural 72h',
    sca: '89.0',
    price: 54.0,
    notes: ['Maracuyá', 'Aguaymanto', 'Vino Tinto', 'Nibs de Cacao'],
    acidity: 5,
    sweetness: 4,
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lot-typica-cusco',
    name: 'Apu Salkantay · Typica Ancestral',
    region: 'Cusco',
    producer: 'Mateo Condori · Santa Teresa',
    altitude: '2,040 m.s.n.m.',
    variety: 'Typica Mejorada',
    process: 'Lavado Clásico Andino',
    sca: '87.8',
    price: 45.0,
    notes: ['Caramelo', 'Manzana Roja', 'Almendra Tostada', 'Té Negro'],
    acidity: 3,
    sweetness: 5,
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote:
      'El Geisha de Huayopata que tuesta APU tiene una claridad aromática a bergamota y flor de azahar que compite directamente con los mejores lotes de Boquete. En V60 es sencillamente inolvidable.',
    author: 'Valeria Mendoza',
    role: 'Q-Grader Certificada & Jueza Nacional de Barismo',
    favoriteLot: 'Inti Raymi · Geisha Lavado',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 2,
    quote:
      'Llevamos más de un año sirviendo su Bourbon Honey de San Ignacio en nuestra barra de Miraflores. La consistencia del tueste semana a semana y la dulzura en espresso con leche son impecables.',
    author: 'Rodrigo Alarco',
    role: 'Head Barista en Bruma Coffee Lab (Lima)',
    favoriteLot: 'El Santuario · Bourbon Rojo',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 3,
    quote:
      'Lo que más valoro es la transparencia: cada bolsa incluye el nombre del productor, altitud exacta y curva de tueste. Preparar su Natural de Amazonas cada mañana transformó mi ritual en casa.',
    author: 'Camila Garrido',
    role: 'Sommelier & Suscriptora del Club APU',
    favoriteLot: 'Kuelap Niebla · Natural 72h',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
  },
];
