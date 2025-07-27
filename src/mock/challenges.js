const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/Fitness_icon.png';
export const defaultChallenges = [
  {
    id: '1',
    title: 'Reto 21 Días Fit',
    image: 'https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' || defaultImage,
    description: 'Transforma tu cuerpo y mente en solo 21 días con rutinas intensas y plan de alimentación. Incluye acceso a grupo de apoyo y seguimiento personalizado.',
    price: 49.99,
    paymentLink: 'https://buy.stripe.com/test_cN2eX1221221221221221221',
    includes: [
      'Plan de entrenamiento de 21 días (casa o gimnasio)',
      'Guía de alimentación saludable',
      'Acceso a grupo exclusivo de WhatsApp',
      'Sesiones de preguntas y respuestas en vivo',
      'Recetario fit y delicioso',
      'Seguimiento personalizado de progreso'
    ],
    faq: [
      { q: '¿Cuándo comienza el reto?', a: 'El reto inicia el próximo lunes después de tu inscripción.' },
      { q: '¿Necesito experiencia previa?', a: 'No, los retos están diseñados para todos los niveles.' },
      { q: '¿Qué pasa si tengo dudas durante el reto?', a: 'Tendrás acceso a soporte y comunidad exclusiva.' },
      { q: '¿El pago es único?', a: 'Sí, solo pagas una vez por el acceso al reto.' }
    ]
  },
  {
    id: '2',
    title: 'Glúteos',
    image: 'https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' || defaultImage,
    description: 'Un programa enfocado en fortalecer y tonificar tus glúteos con ejercicios específicos y progresiones. Ideal para todos los niveles.',
    price: 29.99,
    paymentLink: 'https://buy.stripe.com/test_cN2eX1221221221221221221',
    includes: [
      'Rutinas de glúteos para 4 semanas',
      'Videos explicativos de cada ejercicio',
      'Consejos para maximizar el crecimiento muscular',
      'Ejercicios con y sin equipo',
      'Guía de suplementación básica'
    ],
    faq: [
      { q: '¿Cuánto dura el reto?', a: 'El reto de glúteos dura 4 semanas.' },
      { q: '¿Necesito equipo?', a: 'Puedes hacerlo con o sin equipo, según tus posibilidades.' },
      { q: '¿Hay seguimiento?', a: 'Sí, tendrás acceso a la comunidad y soporte.' }
    ]
  },
  {
    id: '3',
    title: 'Abdomen Plano Express',
    image: 'https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' || defaultImage,
    description: 'Consigue un abdomen más fuerte y definido con esta rutina de 30 días. Ejercicios efectivos y consejos nutricionales para maximizar resultados.',
    price: 34.99,
    paymentLink: 'https://buy.stripe.com/test_cN2eX1221221221221221221',
    includes: [
      'Rutina de abdomen de 30 días',
      'Ejercicios para core y oblicuos',
      'Guía de alimentación para reducir grasa abdominal',
      'Tips para evitar la hinchazón',
      'Acceso a comunidad de apoyo'
    ],
    faq: [
      { q: '¿Cuánto dura el reto?', a: 'El reto de abdomen dura 30 días.' },
      { q: '¿Incluye plan de alimentación?', a: 'Sí, incluye guía alimenticia para mejores resultados.' },
      { q: '¿Puedo hacerlo si soy principiante?', a: 'Sí, es apto para todos los niveles.' }
    ]
  },
  {
    id: '4',
    title: 'Reto Cardio Quema Grasa',
    image: 'https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' || defaultImage,
    description: 'Acelera tu metabolismo y quema grasa con este reto de cardio de alta intensidad. Incluye rutinas para hacer en casa o gimnasio.',
    price: 24.99,
    paymentLink: 'https://buy.stripe.com/test_cN2eX1221221221221221221',
    includes: [
      'Rutinas de cardio HIIT y LISS',
      'Plan de entrenamiento semanal',
      'Consejos para optimizar la quema de grasa',
      'Ejercicios adaptables a tu nivel',
      'Soporte vía email'
    ],
    faq: [
      { q: '¿Qué tipo de cardio incluye?', a: 'Incluye rutinas HIIT y LISS para todos los niveles.' },
      { q: '¿Puedo hacerlo en casa?', a: 'Sí, todas las rutinas pueden hacerse en casa o gimnasio.' },
      { q: '¿Cuánto dura el reto?', a: 'El reto dura 4 semanas.' }
    ]
  },
];