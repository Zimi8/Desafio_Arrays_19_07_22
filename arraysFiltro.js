
/*  ///////////////esta no funcionó  ....
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

/*--------- La idea es hacer una funcion grande que LEA TODOS LOS ARRAYS 
de los SETS y me diga si uno tiene coam o no---------------- */

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


/*
   Mira, la funcion la podes hacer así
Lucas Lopez

const filtrarElementos = (PALABRA) => {

 let resultadoFiltro = setDeco.filter((el) => el.elementos.includes(PALABRA))

     return resultadoFiltro

}

Lucas Lopez
La funcion se llama filtrarElementos o como quieras, y recibe de parametro la PALABRA que queres buscar en Elementos, y adentro haces un filter de setDeco con la PALABRA y retornas el resultado
Lucas Lopez

Entonces si ahora haces filtrarElementos('Cama')

Lucas Lopez

18:06

Te va a devolver el resultado, y podes mandar el parametro que quieras y si existe dentro del array y de algún objeto en Elementos te va a devolevr el resultado
*/

