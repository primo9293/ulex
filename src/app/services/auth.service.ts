import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    // let a = this.obtenerToken()
    // console.log(a);
   }

  obtenerToken(){

    let miPrimeraPromise = new Promise((resolve, reject) => {
      const tok = localStorage.getItem('user');
      // console.log('tok',tok);
      
      if(tok){
        return resolve(true)
      }
      return reject(false)
      /* setTimeout(function(){
        resolve("¡Éxito!"); // ¡Todo salió bien!
      }, 250); */
    });

    miPrimeraPromise.then((dato)=> {
      return dato
    })
    .catch(()=>{
      return false
    })
  }
}
