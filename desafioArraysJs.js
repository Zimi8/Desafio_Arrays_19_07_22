/*
  // RECORRIENDO ARRAYS  * 1°
const setJaponese = ['Mesa', 'Mesa de luz', 'Armario', 'Kokatsu', 'Biblioteca de Mangas']


console.log( setJaponese.includes('Kokatsu') ) 
console.log( setJaponese.includes('Biblioteca de Mangas') ) 

// ----------------------------- Fin del 1ero ---------------------------------
*/


// ------------------------------------2do -------------------------------------
/*

  const setDeco = [
    { idNumb: 123, idName:'Set Coreano', producto: 'Bar de jotsu, Mesa de comer, Bilbioteca' },
    { idNumb: 345, idName:'Set Patagónico', producto: 'Barra de madera, Mesa de picada, Vinoteca' },
    { idNumb: 567, idName:'Set Altiplano', producto: 'Mortero, Tabla para pachamalca, Cortina tehuelche' }];


                 
const producto = setDeco.map((el) => el.idNumb)
const alcoholico = setDeco.map ((el)=> el.producto)
console.log(producto)
console.log(alcoholico)
// ----------------------------- Fin del 2do --------------------------
*/

/* 3ro 
const setDeco = [
  {nombreSet: 'Set Coreano', elementos: 'Cama, Velador, Mesa de Luz', precio:200.000 },
  {nombreSet: 'Set Andino', elementos: 'Cocina, Mesada, Alacena', precio:400.000 },
  {nombreSet: 'Set Japonese', elementos: 'Kokatsu, Velador, Katana', precio:900.000 },
]



const filtrarCamitas = (el) => {

  let resultadoFiltro = setDeco.filter((el) => el.elementos.includes(el))
return resultadoFiltro
      
 }
 
filtrarCamitas('Cama')

 //---------------------- Fin del 3er --------------------------------
*/
/*


//4to  Prueba de FILTRAR PRODUCTOS con FILTER 
const setDeco = [
  {nombreSet: 'Set Coreano', elementos: 'Cama, Velador, Mesa de Luz', precio:200.000 },
  {nombreSet: 'Set Andino', elementos: 'Cocina, Mesada, Alacena', precio:400.000 },
  {nombreSet: 'Set Japonese', elementos: 'Kokatsu, Velador, Katana', precio:900.000 },
]
const resultado = setDeco.filter ((el) => el.elementos.includes('Cama'))
const resultadoCama = setDeco.filter ((el) => el.elementos.includes(' Katana'))
console.log(resultado)
console.log(resultadoCama)
*/


