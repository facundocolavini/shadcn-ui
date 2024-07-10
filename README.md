# Astro + Shadcn

- **Cómo funciona Shadcn**

**Artículos de interés:**

- [Anatomy of Shadcn UI](https://manupa.dev/blog/anatomy-of-shadcn-ui)
- [HoC pattern](https://www.patterns.dev/react/hoc-pattern/)

Los componentes de Shadcn/UI trabajan de la siguiente manera:

![alt text](image.png)

**Class Variance Authority (CVA)**
Class Variance Authority nos permite crear variantes y heredar propiedades basadas en un objeto.

**Class Utility Management Solution**
Tenemos clsx y twmerge, ambas se utilizan para sobrescribir estilos de una clase según condiciones. Nos permite aplicar clases correctamente.

**Utility Class-Based CSS Framework**
Utilizando TailwindCSS para aplicar estilos en línea a nuestras etiquetas.

**Headless UI Component Implementation**
Estos son componentes que básicamente no tienen estilos propios, solo funcionalidad. En el caso de Shadcn, provienen de Radix UI.

Para las tablas, utiliza React Table de Taanstack. Para validar formularios, utiliza React Hook Form, entre otros.

**¿Por qué usa Radix UI?**
Básicamente, al utilizar Shadcn, se depende de dependencias como los iconos o componentes de Radix UI, que tienen distintas versiones entre sí, asegurando así la compatibilidad sin problemas entre versiones.

![alt text](image-1.png)

**¿Por qué utilizar una biblioteca headless?**
Por ejemplo, en el caso de Shadcn, proporciona funciones de lectores de pantalla para personas con discapacidades y funcionalidades probadas.

Las ventajas que ofrece son la capacidad de crear componentes altamente personalizables con variantes de estilo personalizadas sin alterar la semántica ni la funcionalidad base, y sin depender de una versión específica de una biblioteca externa.

Algunas de las ventajas incluyen:

- Mejora la accesibilidad
- Lectores de pantalla
- Mejora la interacción con el teclado
