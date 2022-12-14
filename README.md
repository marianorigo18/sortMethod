# sortMethod
En esta funcion solamente estoy probando la funcion llamada sort que sirve para ordenar los elementos de un array.

El metodo sort() lo que hace es tomar el array, ordenarlo y retornar un array modificado.

[2,5,1,6] si el metodo sort() se encuentra con este array lo ordenara asi [1,2,5,6], pero que pasaria

si nos escontramos con este array [1,5,6,7,100,10,98] lo ordenara de esta manera [1, 10, 100, 5, 6, 7, 98] notan
que el ultimo numero (98) es menor que 100 pero esta despues de 100, pero porque pasa esto? esto pasa porque el metodo sort
lo que hace es ordenarlos por el valor de unicode, te lo explico en el siguiente renglon.

Hagamosno la pregunta:

¿Poruqe 98 esta despues de 100?

resulta que el primer numero de 98 osea el 9 = 0039 y el primer numero de 100 osea 1 = 0031, como el metodo sort ordena primeramente
por el valor unicode ya podremos ver que el 98 ira despues de 100 porque el primer numero de 98 el mayor al primer numero de 100.

Pero como podemos cambiar eso y que se ordenen de acuerdo a los numero y no al unicode?

array.sort((a,b)=> retur a - b) // -1 porque a = 0061 y b = 0062 si restamos esto nos dara -1
