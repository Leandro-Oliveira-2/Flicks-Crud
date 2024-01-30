<template>
  <div class="container-fluid">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Contato</h4>
            <p>Email: leandropx24@gmail.com</p>
          </div>
          <div class="col-md-4">
            <h5>Recursos Úteis</h5>
            <ul>
              <li>
                <a href="https://www.imdb.com/" target="_blank">IMDb - Internet Movie Database</a>
              </li>
              <li><a href="https://www.rottentomatoes.com/" target="_blank">Rotten Tomatoes</a></li>
              <li>
                <a href="https://www.themoviedb.org/" target="_blank">The Movie Database (TMDb)</a>
              </li>
              <!-- Adicione mais links úteis aqui -->
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Pesquisar Sinopses</h5>
            <ul>
              <li><a href="https://www.adorocinema.com/" target="_blank">AdoroCinema</a></li>
              <li>
                <a href="https://www.filmesnocinema.com.br/" target="_blank">Filmes no Cinema</a>
              </li>
              <!-- Adicione mais links para pesquisar sinopses aqui -->
            </ul>
          </div>
          <div class="text-center p-3" style="background-color: #141414">
            © 2024 insipirado em:
            <a class="text-white" href="https://netflix.com/">Netflix</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- End of .container -->
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style>
.row {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.footer h5 {
  color: #fff;
  margin-left: 26px;
}
.container-fluid {
  background-color: #141414;
  margin-top: -150px;
  width: 100%;
  padding-right: 0 !important;
  padding-left: 0 !important;
  margin-right: auto;
  margin-left: auto;
}
.mb-5,
.my-5 {
  margin-bottom: -10rem !important;
}

.container-fluid.my-5 {
  margin-top: -10rem !important;
}

.footer {
  padding: 20px 0;
}

.footer h5 {
  color: #fff;
}
.text-center.p-3 {
  text-align: center;
  width: 100vw;
}

@media (max-width: 600px) {
  .footer h5 {
    margin-top: 1rem;
  }

  .col-md-4 {
    margin-bottom: 2rem;
  }

  .text-center.p-3 {
    width: 100%;
    padding: 10px 0;
  }

  .footer {
    text-align: center;
    margin-top: 43%;
  }
  ul {
    margin-top: 0;
    margin-bottom: -25px;
    margin-block-end: 5%;
  }
}
</style>
