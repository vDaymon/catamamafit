import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ThankYouPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    celular: '',
    comprobante: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'comprobante') {
      setFormData((prev) => ({ ...prev, comprobante: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.correo.trim()) newErrors.correo = 'El correo es obligatorio';
    else if (!validateEmail(formData.correo)) newErrors.correo = 'Correo inválido';
    if (!formData.celular.trim()) newErrors.celular = 'El celular es obligatorio';
    if (!formData.comprobante) newErrors.comprobante = 'Debes subir el comprobante';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí podrías enviar formData a un backend o servicio externo
      toast.success('¡Formulario enviado con éxito!');
    } else {
      toast.error('Por favor completa todos los campos correctamente.');
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 py-12">
      <Toaster position="top-center" />
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">¡Gracias por tu compra!</h1>
        <p className="text-center text-gray-700 mb-8">Llena estos datos para unirte al grupo exclusivo:</p>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full border ${errors.nombre ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className={`w-full border ${errors.correo ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            />
            {errors.correo && <span className="text-red-500 text-sm">{errors.correo}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="celular">Celular</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className={`w-full border ${errors.celular ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            />
            {errors.celular && <span className="text-red-500 text-sm">{errors.celular}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="comprobante">Comprobante de pago (PDF o imagen)</label>
            <input
              type="file"
              id="comprobante"
              name="comprobante"
              accept=".pdf,image/*"
              onChange={handleChange}
              className={`w-full border ${errors.comprobante ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white`}
            />
            {errors.comprobante && <span className="text-red-500 text-sm">{errors.comprobante}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Enviar datos
          </button>
        </form>
      </div>
    </section>
  );
};

export default ThankYouPage;
