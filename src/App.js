import React, { useState, useEffect } from 'react';

import './App.css';

import Cleave from "cleave.js";

import Typed from "typed.js";

import chip from'./img/chip.png';


function App() {

  const [numero, setNumero] = useState("4343 3434 2322 2323")

  const [nya, setNya] = useState("Nombre y Apellido")

  const [mes, setMes] = useState("MM")

  const [ano, setAno] = useState("AA")

  const [cvv, setCvv] = useState("***")

  const [empresa, setEmpresa] = useState("MasterCard")

  useEffect(() => {
  
      let cleave = new Cleave('.numeroTarjeta', {
          creditCard: true,
      });


      const numeroTarjeta = document.getElementById('numeroTarjeta')

      numeroTarjeta.addEventListener('input', (e)=>{

        let numeroIngresado = e.target.value

        setNumero(numeroIngresado)



        let primerCaracter = numeroIngresado.charAt(0)

        let dosCaracteres = numeroIngresado.substring(0,2)

        let tresCaracteres = numeroIngresado.substring(0,3)

        let cuatroCaracteres = numeroIngresado.substring(0,4)

        if(primerCaracter=="4"){

          setEmpresa("Visa")

        }else if((dosCaracteres==34)||(dosCaracteres==37)){

          setEmpresa("AmericanExpress")

        }else if((tresCaracteres==309)||(tresCaracteres>=300 && tresCaracteres<=305)){

          setEmpresa("DinersClub")

        }else if((dosCaracteres>=22 && dosCaracteres<=27)||(dosCaracteres>=51 && dosCaracteres<=55)){

          setEmpresa("MasterCard")

        }else if((dosCaracteres==35)||(cuatroCaracteres==2131)||(cuatroCaracteres==1800)){

          setEmpresa("JCB")

        }else if((cuatroCaracteres==6011)||(dosCaracteres==65)||(tresCaracteres>=644 && tresCaracteres<=649)){

          setEmpresa("Discover")

        }








      })


      const nombreApellido = document.getElementById('nombreApellido')

      nombreApellido.addEventListener('input', (e)=>{setNya(e.target.value)})




      const mesInput = document.getElementById('mes')

      mesInput.addEventListener('input', (e)=>{setMes(e.target.value)})


      const anoInput = document.getElementById('ano')

      anoInput.addEventListener('input', (e)=>{setAno(e.target.value)})



      let typed = new Typed('.titulo', {
        strings: ["...", "Formulario de tarjeta de credito"],
        typeSpeed: 60,
        showCursor: false,
      });

      let tarjeta = document.querySelector('.tarjeta');

      const cvvInput = document.getElementById('cvv')

      cvvInput.addEventListener('input', (e)=>{setCvv(e.target.value)})

      cvvInput.addEventListener('focus', (e)=>{tarjeta.classList.toggle('voltear')})

      cvvInput.addEventListener('focusout', (e)=>{tarjeta.classList.toggle('voltear')})

      


  }, []);

  return (

        <div class="App">


          <div class="container-fluid">

            <h1 class="titulo display-4"></h1>

            <div class="row justify-content-center contenedorCentral">
              <div class="contenedor col-lg-6 col-md-12">



                  <div class="escena">
                    <div class="tarjeta">
                      <div class="cara tarjetaAdelante">

                          <img class="chip" src={chip} />

                          <img class="empresa" src={"./img/"+empresa+".png"} />

                          <h6 class="numero">{numero}</h6>

                          <h6 class="nya">{nya}</h6>

                          <h6 class="vencimiento">{mes}/{ano}</h6>

                      </div>
                      <div class="cara tarjetaAtras">

                          <div class="tiraMagnetica"></div>

                          <h6>CVV</h6>

                          <div class="contenedorCVV">

                            <h5 class="cvvCodigo">{cvv}</h5>
                            
                          </div>

                          <img class="empresaAtras" src={"./img/"+empresa+".png"} />
                        
                      </div>
                    </div>
                  </div>


                  <div class="card text-white bg-dark">
                    <div class="card-body">

                          <div class="form-group">
                            <input placeholder="Numero de tarjeta" type="text" class="form-control numeroTarjeta" id="numeroTarjeta" />
                          </div>
                          <div class="form-group">
                            <input placeholder="Nombre y apellido" type="text" class="form-control" id="nombreApellido" />
                          </div>

                          <div class="form-row align-items-center">
                              <div class="col-auto">

                                <select class="form-control" id="mes">
                                  <option selected="selected">Mes</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                </select>
                              </div>

                              <div class="col-auto">
                                <select class="form-control" id="ano">
                                  <option selected="selected">Año</option>
                                  <option>2024</option>
                                  <option>2023</option>
                                  <option>2022</option>
                                  <option>2021</option>
                                  <option>2020</option>
                                  <option>2019</option>
                                  <option>2018</option>
                                  <option>2017</option>
                                  <option>2016</option>
                                </select>
                              </div>

                              <div class="col-auto">
                                <input placeholder="CVV" type="number" class="form-control" id="cvv" />
                              </div>

                            </div>

                          <button type="submit" class="btn btn-success btn-lg btn-block">Enviar</button>

                    </div>
                  </div>




              </div>
            </div>
          </div>

        </div>
  );
}

export default App;
