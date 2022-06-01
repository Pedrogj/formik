import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormUser = () => {
  const [sendForm, setSendForm] = useState();

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(values) => {
          let errors = {};

          // Validación nombre
          if (!values.nombre) {
            errors.nombre = "Ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errors.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validación Correo
          if (!values.correo) {
            errors.correo = "Ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.correo
            )
          ) {
            errors.correo =
              "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
          }

          return errors;
        }}
        onSubmit={({ resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setSendForm(true);
          setTimeout(() => setSendForm(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="Correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <Field name="pais" as="select">
                <option value="mexico">Mexico</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="venezuela">Venezuela</option>
                <option value="argentina">Argentina</option>
              </Field>
            </div>
            <div>
              <label>
                <Field type="radio" name="sexo" value="hombre" /> Hombre
              </label>
              <label>
                <Field type="radio" name="sexo" value="mujer" /> Mujer
              </label>
            </div>
            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div>
            <button type="submit">Enviar</button>
            {sendForm && (
              <p className="exito">Formulario enviando con Exito!</p>
            )}
          </Form>
        )}
        {/* {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="Correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {sendForm && (
              <p className="exito">Formulario enviando con Exito!</p>
            )}
          </form>
        )} */}
      </Formik>
    </>
  );
};
