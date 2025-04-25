#!/bin/bash

# Crear la estructura de carpetas
mkdir -p docs/plan-de-cuentas/{1-financiacion-basica,2-activo-no-corriente,3-activo-corriente,4-pasivo,5-cuentas-financieras,6-compras-gastos,7-ventas-ingresos}

# Crear index.md principal
cat <<EOT > docs/plan-de-cuentas/index.md
---
id: plan-de-cuentas
title: Plan de Cuentas
---
Introducción al Plan General de Contabilidad (PGC) de España...
EOT

# 1. Financiación básica
cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/index.md
---
id: 1-financiacion-basica
title: 1. Financiación básica
---
Descripción de las cuentas relacionadas con la financiación básica...
EOT

cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/10-capital.md
---
id: 10-capital
title: 10. Capital
---
Detalles sobre la cuenta de capital en el Plan General de Contabilidad...
EOT

cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/11-reservas.md
---
id: 11-reservas
title: 11. Reservas
---
Detalles sobre las reservas en el Plan General de Contabilidad...
EOT

cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/12-otras-aportaciones-socios.md
---
id: 12-otras-aportaciones-socios
title: 12. Otras aportaciones de socios
---
Detalles sobre otras aportaciones de socios...
EOT

cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/13-resultados-pendientes-aplicacion.md
---
id: 13-resultados-pendientes-aplicacion
title: 13. Resultados pendientes de aplicación
---
Detalles sobre resultados pendientes de aplicación...
EOT

cat <<EOT > docs/plan-de-cuentas/1-financiacion-basica/14-provisiones-fondos-propios.md
---
id: 14-provisiones-fondos-propios
title: 14. Provisiones y otros fondos propios
---
Detalles sobre provisiones y otros fondos propios...
EOT

# 2. Activo no corriente
cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/index.md
---
id: 2-activo-no-corriente
title: 2. Activo no corriente
---
Descripción de las cuentas relacionadas con el activo no corriente...
EOT

cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/20-inmovilizado-intangible.md
---
id: 20-inmovilizado-intangible
title: 20. Inmovilizado intangible
---
Detalles sobre el inmovilizado intangible...
EOT

cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/21-inmovilizado-material.md
---
id: 21-inmovilizado-material
title: 21. Inmovilizado material
---
Detalles sobre el inmovilizado material...
EOT

cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/22-inversiones-inmobiliarias.md
---
id: 22-inversiones-inmobiliarias
title: 22. Inversiones inmobiliarias
---
Detalles sobre las inversiones inmobiliarias...
EOT

cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/23-inversiones-empresas-grupo.md
---
id: 23-inversiones-empresas-grupo
title: 23. Inversiones en empresas del grupo
---
Detalles sobre las inversiones en empresas del grupo...
EOT

cat <<EOT > docs/plan-de-cuentas/2-activo-no-corriente/24-inversiones-financieras-largo-plazo.md
---
id: 24-inversiones-financieras-largo-plazo
title: 24. Inversiones financieras a largo plazo
---
Detalles sobre las inversiones financieras a largo plazo...
EOT

# 3. Activo corriente
cat <<EOT > docs/plan-de-cuentas/3-activo-corriente/index.md
---
id: 3-activo-corriente
title: 3. Activo corriente
---
Descripción de las cuentas relacionadas con el activo corriente...
EOT

cat <<EOT > docs/plan-de-cuentas/3-activo-corriente/30-existencias.md
---
id: 30-existencias
title: 30. Existencias
---
Detalles sobre las existencias...
EOT

cat <<EOT > docs/plan-de-cuentas/3-activo-corriente/31-deudores-comerciales.md
---
id: 31-deudores-comerciales
title: 31. Deudores comerciales
---
Detalles sobre los deudores comerciales...
EOT

cat <<EOT > docs/plan-de-cuentas/3-activo-corriente/32-inversiones-financieras-corto-plazo.md
---
id: 32-inversiones-financieras-corto-plazo
title: 32. Inversiones financieras a corto plazo
---
Detalles sobre las inversiones financieras a corto plazo...
EOT

cat <<EOT > docs/plan-de-cuentas/3-activo-corriente/33-tesorería.md
---
id: 33-tesorería
title: 33. Tesorería
---
Detalles sobre la tesorería...
EOT

# 4. Pasivo
cat <<EOT > docs/plan-de-cuentas/4-pasivo/index.md
---
id: 4-pasivo
title: 4. Pasivo
---
Descripción de las cuentas relacionadas con el pasivo...
EOT

cat <<EOT > docs/plan-de-cuentas/4-pasivo/40-acreedores-comerciales.md
---
id: 40-acreedores-comerciales
title: 40. Acreedores comerciales
---
Detalles sobre los acreedores comerciales...
EOT

cat <<EOT > docs/plan-de-cuentas/4-pasivo/41-deudas-largo-plazo.md
---
id: 41-deudas-largo-plazo
title: 41. Deudas a largo plazo
---
Detalles sobre las deudas a largo plazo...
EOT

cat <<EOT > docs/plan-de-cuentas/4-pasivo/42-deudas-corto-plazo.md
---
id: 42-deudas-corto-plazo
title: 42. Deudas a corto plazo
---
Detalles sobre las deudas a corto plazo...
EOT

cat <<EOT > docs/plan-de-cuentas/4-pasivo/43-provisiones.md
---
id: 43-provisiones
title: 43. Provisiones
---
Detalles sobre las provisiones...
EOT

# 5. Cuentas financieras
cat <<EOT > docs/plan-de-cuentas/5-cuentas-financieras/index.md
---
id: 5-cuentas-financieras
title: 5. Cuentas financieras
---
Descripción de las cuentas financieras...
EOT

cat <<EOT > docs/plan-de-cuentas/5-cuentas-financieras/50-instrumentos-financieros.md
---
id: 50-instrumentos-financieros
title: 50. Instrumentos financieros
---
Detalles sobre los instrumentos financieros...
EOT

cat <<EOT > docs/plan-de-cuentas/5-cuentas-financieras/51-ajustes-valoracion.md
---
id: 51-ajustes-valoracion
title: 51. Ajustes por valoración
---
Detalles sobre los ajustes por valoración...
EOT

# 6. Compras y gastos
cat <<EOT > docs/plan-de-cuentas/6-compras-gastos/index.md
---
id: 6-compras-gastos
title: 6. Compras y gastos
---
Descripción de las cuentas relacionadas con compras y gastos...
EOT

cat <<EOT > docs/plan-de-cuentas/6-compras-gastos/60-compras.md
---
id: 60-compras
title: 60. Compras
---
Detalles sobre las compras...
EOT

cat <<EOT > docs/plan-de-cuentas/6-compras-gastos/61-gastos-personal.md
---
id: 61-gastos-personal
title: 61. Gastos de personal
---
Detalles sobre los gastos de personal...
EOT

cat <<EOT > docs/plan-de-cuentas/6-compras-gastos/62-gastos-explotacion.md
---
id: 62-gastos-explotacion
title: 62. Gastos de explotación
---
Detalles sobre los gastos de explotación...
EOT

cat <<EOT > docs/plan-de-cuentas/6-compras-gastos/63-gastos-financieros.md
---
id: 63-gastos-financieros
title: 63. Gastos financieros
---
Detalles sobre los gastos financieros...
EOT

# 7. Ventas e ingresos
cat <<EOT > docs/plan-de-cuentas/7-ventas-ingresos/index.md
---
id: 7-ventas-ingresos
title: 7. Ventas e ingresos
---
Descripción de las cuentas relacionadas con ventas e ingresos...
EOT

cat <<EOT > docs/plan-de-cuentas/7-ventas-ingresos/70-ventas.md
---
id: 70-ventas
title: 70. Ventas
---
Detalles sobre las ventas...
EOT

cat <<EOT > docs/plan-de-cuentas/7-ventas-ingresos/71-ingresos-accesorios.md
---
id: 71-ingresos-accesorios
title: 71. Ingresos accesorios
---
Detalles sobre los ingresos accesorios...
EOT

cat <<EOT > docs/plan-de-cuentas/7-ventas-ingresos/72-ingresos-financieros.md
---
id: 72-ingresos-financieros
title: 72. Ingresos financieros
---
Detalles sobre los ingresos financieros...
EOT

echo "Estructura de docs/plan-de-cuentas/ generada correctamente."
