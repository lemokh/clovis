import React, { Component } from 'react';
import './styles/styles.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <header class="container-fluid">
          <div class="container container-menu">
            <nav class="navbar">
              <div class="navbar-header">
                <a class="navbar-brand" href="http://frontrangedents.com">
                  <img
                    src="http://frontrangedents.com/wp-content/themes/frontrange/assets/img/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <ul class="nav navbar-nav">
                <li>
                  <a class="" href="http://frontrangedents.com/">
                    {' '}
                    Home
                  </a>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/about-us/">
                    {' '}
                    About us
                  </a>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/services/">
                    {' '}
                    Services
                  </a>
                  <ul>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/interior-details/"
                      >
                        {' '}
                        Interior Details
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/headlight-restoration/"
                      >
                        {' '}
                        Headlight Restoration
                      </a>
                    </li>
                    <li>
                      <a class="" href="http://frontrangedents.com/clear-bra/">
                        {' '}
                        Clear Bra
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/door-dent-removal/"
                      >
                        {' '}
                        Door Dents
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/hail-damage/"
                      >
                        {' '}
                        HAIL DAMAGE
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/small-large-dents/"
                      >
                        {' '}
                        Small &amp; Large Dents
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/collision-repair/"
                      >
                        {' '}
                        Collision Damage
                      </a>
                    </li>
                    <li>
                      <a
                        class=""
                        href="http://frontrangedents.com/window-tint/"
                      >
                        {' '}
                        Window Tint
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/testimonials/">
                    {' '}
                    Our Work
                  </a>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/blog">
                    {' '}
                    Blog
                  </a>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/estimates/">
                    {' '}
                    Estimates
                  </a>
                  <ul />
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/contact-us/">
                    {' '}
                    Contact Us
                  </a>
                  <ul />
                </li>
                <li>
                  <div class="menu-tel">
                    <i class="fa fa-phone" />{' '}
                    <a
                      class="phone-link"
                      target="_blank"
                      href="tel:+17209513891"
                    >
                      Denver: 720-951-3891
                    </a>{' '}
                    <a
                      class="phone-link"
                      target="_blank"
                      href="tel:+17202364722"
                    >
                      Parker: 720-236-4722
                    </a>{' '}
                  </div>
                </li>
              </ul>
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#mobile-menu-top"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              <ul
                class="mobile-menu"
                id="mobile-menu-top"
                data-dropdown-in="fadeIn"
                data-dropdown-out="fadeOut"
              >
                <li>
                  <a class="" href="http://frontrangedents.com/">
                    {' '}
                    Home
                  </a>
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/about-us/">
                    {' '}
                    About us
                  </a>
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/services/">
                    {' '}
                    Services
                  </a>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/interior-details/"
                      >
                        {' '}
                        Interior Details
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/headlight-restoration/"
                      >
                        {' '}
                        Headlight Restoration
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/clear-bra/"
                      >
                        {' '}
                        Clear Bra
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/door-dent-removal/"
                      >
                        {' '}
                        Door Dents
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/hail-damage/"
                      >
                        {' '}
                        HAIL DAMAGE
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/small-large-dents/"
                      >
                        {' '}
                        Small &amp; Large Dents
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/collision-repair/"
                      >
                        {' '}
                        Collision Damage
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="menu-small "
                        href="http://frontrangedents.com/window-tint/"
                      >
                        {' '}
                        Window Tint
                      </a>
                    </li>
                  </ul>
                </li>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li>
                  <a class="" href="http://frontrangedents.com/testimonials/">
                    {' '}
                    Our Work
                  </a>
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/blog">
                    {' '}
                    Blog
                  </a>
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/estimates/">
                    {' '}
                    Estimates
                  </a>
                </li>
                <li>
                  <a class="" href="http://frontrangedents.com/contact-us/">
                    {' '}
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
