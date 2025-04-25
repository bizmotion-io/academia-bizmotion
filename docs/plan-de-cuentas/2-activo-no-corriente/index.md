---
id: 2-activo-no-corriente
title: 2. Activo no corriente
---

El **Grupo 2 del Plan General de Contabilidad para PYMES** recoge todos los **activos duraderos**, es decir, aquellos que se espera permanezcan en la empresa **más de un año**. Esto incluye tanto bienes materiales e intangibles como inversiones financieras a largo plazo.

---

## 📘 Definición oficial

> Comprende los activos destinados a servir de forma **duradera** en las actividades de la empresa, incluidas las **inversiones financieras** cuyo vencimiento, enajenación o realización se espera habrá de producirse en un plazo superior a un año.

---

## 📚 Principales categorías incluidas

| Cuenta | Nombre                                                   | Naturaleza               | Comentario breve                                                        |
|--------|----------------------------------------------------------|--------------------------|--------------------------------------------------------------------------|
| 200    | Inmovilizado intangible                                  | Activo no corriente      | Patentes, licencias, aplicaciones, fondo de comercio, etc.              |
| 210    | Terrenos y bienes naturales                              | Activo no corriente      | Parte del inmovilizado material, no amortizable.                        |
| 211    | Construcciones                                           | Activo no corriente      | Edificaciones propiedad de la empresa.                                  |
| 213    | Maquinaria                                               | Activo no corriente      | Maquinaria industrial o técnica.                                        |
| 215    | Mobiliario                                               | Activo no corriente      | Muebles, sillas, estanterías, etc.                                      |
| 217    | Equipos para procesos de información                     | Activo no corriente      | Ordenadores, servidores, redes, etc.                                    |
| 230    | Inversiones financieras a largo plazo en instrumentos de patrimonio | Activo financiero no corriente | Acciones o participaciones en otras empresas.                      |
| 240    | Créditos a largo plazo                                   | Activo financiero no corriente | Préstamos otorgados a terceros o vinculados con vencimiento largo. |
| 250    | Fianzas constituidas a largo plazo                       | Activo financiero no corriente | Fianzas entregadas para alquileres u otros contratos.             |

---

## 🧩 Normas específicas del PGC-PYMES

### a) Exclusión de activos financieros mantenidos para negociar

No se pueden incluir aquí los **activos financieros clasificados como "mantenidos para negociar"**, salvo que se trate de **derivados financieros de negociación con vencimiento superior a un año**.

Los **activos financieros mantenidos para negociar** son aquellos que la empresa **adquiere con la intención de vender en el corto plazo**, generalmente para obtener una ganancia rápida. También se incluyen los **derivados financieros** que **no están designados como instrumentos de cobertura**.

#### ✅ Características:

- Se compran **con fines especulativos**.
- Se espera venderlos **en un plazo inferior a 12 meses**.
- Suelen tener **alta liquidez** y fluctuar fácilmente en el mercado.

#### 🔍 Ejemplos típicos:

| Activo                                      | ¿Va en grupo 2? | Comentario |
|--------------------------------------------|------------------|------------|
| Acciones cotizadas compradas para especular | ❌ No             | Se registran en cuentas del grupo 5 o 6, no en el grupo 2. |
| Bonos comprados para revender en 6 meses    | ❌ No             | Aunque sean financieros, son **corrientes** y para negociar. |
| Participación estratégica en una empresa    | ✅ Sí             | Si es a largo plazo y no se piensa vender en el corto. |
| Contrato de futuros a 2 años                | ✅ Sí (derivado de largo plazo) | Va en grupo 2 si cumple los criterios. |

#### 🎯 ¿Qué es un derivado financiero?

Un **derivado financiero** es un contrato cuyo valor depende del comportamiento de otro activo, llamado **activo subyacente**. Los derivados pueden utilizarse con fines de cobertura (gestionar riesgos) o con fines especulativos (buscar rentabilidad).

Ejemplos comunes de derivados financieros:

- **Futuros**: contrato para comprar o vender un activo en el futuro a un precio acordado hoy.
- **Opciones**: derecho (pero no obligación) a comprar o vender un activo a un precio fijo antes de una fecha.
- **Swaps**: acuerdo para intercambiar flujos financieros entre dos partes (por ejemplo, tipos de interés fijos por variables).


---

### b) Activos financieros híbridos

Si se adquiere un instrumento financiero **híbrido** (es decir, que combina elementos de deuda y derivados), se contabiliza según la **naturaleza del contrato principal**.


- Se usarán cuentas específicas que identifiquen que son activos híbridos.
- Las **variaciones de valor razonable** se anotan en:
  - **763** – Ingresos financieros por activos a valor razonable
  - **663** – Pérdidas por activos a valor razonable

🔹 **Ejemplo**:
Una obligación convertible en acciones (deuda + opción) se registra como deuda (240) y se le añade una cuenta como **2401 Activo híbrido convertible**. Si el valor sube, se registra:

```plaintext
2401 Activo híbrido convertible    1.000 €
     a 763 Ingresos financieros       1.000 €
```

---

### c) Diferencia entre valor inicial y de reembolso
Si compras un activo financiero (como un crédito) a un precio inferior al que te van a devolver, **esa diferencia se reparte a lo largo del tiempo** como ingreso financiero. Lo mismo si es superior: se reconoce como pérdida.

Se usa el método de coste amortizado.

Las diferencias van contra el subgrupo 76.

- Ejemplo: Otorgas un préstamo a un proveedor por 9.500 €, pero te devolverá 10.000 € en 2 años. Esa diferencia de 500 € se irá reconociendo así:

```plaintext
240 Créditos a largo plazo           250 €
     a 760 Ingresos financieros          250 €
```

(se hace cada año, durante 2 años)
