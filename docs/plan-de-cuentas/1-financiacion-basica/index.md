---
id: 1-financiacion-basica
title: 1. Financiación básica
---


El **Grupo 1 del Plan General de Contabilidad para PYMES** agrupa todas las fuentes de financiación **estables** de una empresa. Incluye tanto el **patrimonio neto (equity)** como las **deudas a largo plazo (pasivos no corrientes)**, así como provisiones y situaciones transitorias de financiación.

Su función principal es **financiar el activo no corriente** (por ejemplo, maquinaria, edificios, software, etc.) y cubrir parte del fondo de maniobra (activo corriente), asegurando la solvencia a medio y largo plazo.

---

## Estructura del grupo 1

| Cuenta | Nombre                                                              | Naturaleza             | Comentario breve                                                                 |
|--------|---------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------------|
| 100    | Capital social                                                      | Patrimonio neto        | Aportes de los socios o accionistas.                                             |
| 103    | Socios por desembolsos no exigidos                                 | Patrimonio neto        | Parte del capital no pagada aún por los socios.                                 |
| 110    | Reserva legal                                                       | Patrimonio neto        | Obligatoria según la ley mercantil.                                              |
| 112    | Reservas voluntarias                                                | Patrimonio neto        | Reservas creadas por decisión de la empresa.                                     |
| 113    | Reservas estatutarias                                               | Patrimonio neto        | Reservas exigidas por los estatutos sociales.                                    |
| 114    | Reservas especiales                                                 | Patrimonio neto        | Por ejemplo, para autocartera.                                                   |
| 118    | Aportaciones de socios o propietarios                               | Patrimonio neto        | Aportaciones sin aumento de capital.                                             |
| 120    | Remanente                                                           | Patrimonio neto        | Beneficios de ejercicios anteriores no repartidos.                              |
| 121    | Resultados negativos de ejercicios anteriores                       | Patrimonio neto        | Pérdidas acumuladas.                                                             |
| 129    | Resultado del ejercicio                                             | Patrimonio neto        | Beneficio o pérdida del año en curso.                                            |
| 130    | Subvenciones oficiales de capital                                   | Patrimonio neto        | Subvenciones de carácter no reintegrable recibidas.                              |
| 131    | Donaciones y legados de capital                                     | Patrimonio neto        | Igual que las subvenciones, pero de particulares.                                |
| 140    | Provisión para impuestos                                            | Pasivo no corriente    | Obligación futura relacionada con impuestos.                                     |
| 141    | Provisión para responsabilidades                                    | Pasivo no corriente    | Para litigios, indemnizaciones, etc.                                             |
| 150    | Obligaciones y bonos                                                | Pasivo no corriente    | Emisión de títulos de deuda a largo plazo.                                       |
| 170    | Deudas a largo plazo con entidades de crédito                       | Pasivo no corriente    | Préstamos bancarios con vencimiento superior a 1 año.                            |
| 171    | Deudas a largo plazo con partes vinculadas                          | Pasivo no corriente    | Préstamos recibidos de socios u otras empresas del grupo.                        |
| 174    | Efectos a pagar a largo plazo                                       | Pasivo no corriente    | Letras o pagarés con vencimiento superior al año.                                |
| 160    | Fianzas recibidas a largo plazo                                     | Pasivo no corriente    | Por contratos de arrendamiento, suministros, etc.                                |
| 180    | Pasivos por impuesto diferido                                       | Pasivo no corriente    | Diferencias fiscales temporarias que generarán pago futuro.                      |
| 190    | Situaciones transitorias de financiación                            | Situación transitoria  | Por ejemplo, exceso de anticipo o pagos indebidos aún no regularizados.         |

---

## 🧮 Tratamiento contable de los pasivos financieros

- Los **pasivos financieros** de este grupo se valoran, por defecto, según el **coste amortizado**, es decir, el valor actual de los flujos futuros descontados.
- Los **intereses implícitos o diferencias entre el valor inicial y el valor final de reembolso** se llevan como **gasto financiero** (subgrupo 66) en la cuenta de pérdidas y ganancias.

### ✍️ Ejemplo

Supongamos que recibes un préstamo a devolver en 3 años por 10.000 €, y devolverás 11.000 €:

- Registras inicialmente 10.000 € en la cuenta **170**.
- Cada año contabilizas el interés (1.000 € dividido en 3 años) como gasto en **661 – Intereses de deudas**.

```plaintext
Asiento inicial:
  572 Bancos                            10.000 €
      a 170 Deudas a LP con entidades     10.000 €

Cierre del primer año (intereses devengados):
  661 Intereses de deudas                 333 €
      a 170 Deudas a LP con entidades        333 €
