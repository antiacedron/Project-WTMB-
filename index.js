const Person= require ("./person") 
const Book= require ("./book") 
const City= require ("./city") 
const Database= require ("./database") 
  
  //list of readers
  
  var reader1 = new Person ("Emma Frost",37)
  var reader2 = new Person ("Erik Lensherr", 40)
  var reader3 = new Person ("Ororo Munroe", 23) 
  var reader4 = new Person ("Shiro Yoshida", 46) 
  
  
  //list of books 
  
  var howl= new Book ("Howl")
  var pi= new Book ("Pi")
  var unmundofeliz= new Book ("Un mundo feliz") 
  var lessthanzero= new Book ("Less than zero") 
  
  
  //list of cities 
  
  var berlin= new City ("Berlin")
  var madrid= new City ("Madrid")
  var venice= new City ("Venice") 
  
  //interactions  
  
  reader1.read(howl) 
  reader2.read(howl)
  reader3.read(howl)
  reader1.read(pi)
  reader1.read(unmundofeliz) 
  
  
  reader1.live(berlin) 
  reader2.live(berlin) 
  reader3.live (madrid)
  reader4.live(venice)
  
  howl.located(berlin)
  howl.located(madrid)

  console.log (madrid); 
  console.log (reader1); 
  console.log (lessthanzero)
