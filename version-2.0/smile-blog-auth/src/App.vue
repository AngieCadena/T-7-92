<template>
  <div id="app">
    <b-navbar class="header" toggleable="md" type="dark" variant="dark" sticky>
      <b-container class="d-flex justify-content-between">
        <b-navbar-brand :to="{name: 'Home'}">
          <img v-bind:src="require('./assets/logo.png')" class="d-inline-block align-top logo-navbar" alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" >Inicio</b-nav-item>
            <b-nav-item :to="{name: 'About'}">Quiénes somos</b-nav-item>
            <b-nav-item :to="{name: 'Contact'}">Discografía</b-nav-item>
            <b-nav-item :to="{name: 'Admin'}">Videos</b-nav-item>
            <b-nav-item :to="{name: 'Admin'}">Blog</b-nav-item>
            <b-nav-item :to="{name: 'Admin'}">Contacto</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div class="header__right__social d-none d-md-block">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
      </b-container>
    </b-navbar>
    <router-view/>
    <b-footer class="footer spad set-bg" data-setbg="img/footer-bg.png">
        <b-container>
            <b-row>
                <b-col col lg="3" md="6">
                    <div class="footer__address">
                        <ul>
                            <li>
                                <i class="fa fa-phone"></i>
                                <p>Phone</p>
                                <h6>1-677-124-44227</h6>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <p>Email</p>
                                <h6>DJ.Music@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </b-col>
                <b-col col lg="4" md="6" class="offset-lg-1">
                    <div class="footer__social">
                        <h2>DJoz</h2>
                        <div class="footer__social__links">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                        </div>
                    </div>
                </b-col>
                <b-col col lg="3" md="6" class="offset-lg-1">
                    <div class="footer__newslatter">
                        <h4>Stay With me</h4>
                        <form action="#">
                            <input type="text" placeholder="Email">
                            <button type="submit"><i class="fa fa-send-o"></i></button>
                        </form>
                    </div>
                </b-col>
            </b-row>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            <div class="footer__copyright__text">
              <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            </div>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </b-container>
    </b-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './styles/style.css';
@import './fonts/font-awesome.min.css';
@import './styles/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.logo-navbar {
    height: 50px;
  }

  .navtext {
    margin: 10px;
  }
</style>
