

<paper-card style="margin-bottom:6px;" class="submenu" id="submenuAdventure">
    <paper-tabs selected="[[route]]" class="center-block self-end" link attr-for-selected="data-route" selectable="paper-tab" no-bar noink>
      <paper-tab data-route="skating" link><a href$="{{baseUrl}}adventures/skating" class="link">
        <span class="hidden-xs">Ice skating</span>
        <span class="hidden-lg hidden-md hidden-sm">Skating</span>
      </a></paper-tab>
      <paper-tab data-route="skiing" link><a href$="{{baseUrl}}adventures/skiing" class="link">
        <span class="hidden-xs">Cross country skiing</span>
        <span class="hidden-lg hidden-md hidden-sm">Skiing</span>
      </a></paper-tab>
      <paper-tab data-route="kayak" link><a href$="{{baseUrl}}adventures/kayak" class="link">Kayak<span class="hidden-xs">ing</span></a></paper-tab>
      <paper-tab data-route="hiking" link><a href$="{{baseUrl}}adventures/hiking" class="link">Hiking</a></paper-tab>
    </paper-tabs>
  </paper-card>

  <paper-card style="margin-bottom:6px;" class="submenu" id="submenuInfo">
    <paper-tabs selected="[[route]]" class="center-block self-end" link attr-for-selected="data-route" selectable="paper-tab" no-bar noink>
      <paper-tab data-route="about-tours" link><a href$="{{baseUrl}}info/about-tours" class="link">
        <span class="hidden-xs">About our tours</span>
        <span class="hidden-lg hidden-md hidden-sm">Tours</span>
      </a></paper-tab>
      <paper-tab data-route="how-get-here" link><a href$="{{baseUrl}}info/how-get-here" class="link">
        <span class="hidden-xs">How to get here</span>
        <span class="hidden-lg hidden-md hidden-sm">Get here</span>
      </a></paper-tab>
      <paper-tab data-route="accommodation" link><a href$="{{baseUrl}}info/accommodation" class="link">
        <span class="hidden-xs">Accommodation</span>
        <span class="hidden-lg hidden-md hidden-sm">Housing</span>
      </a></paper-tab>
    </paper-tabs>
  </paper-card>

  <paper-card style="margin-bottom:6px;" class="submenu" id="submenuMore">
    <paper-tabs class="center-block self-end" selectable="paper-tab" no-bar noink>
      <paper-tab link onclick="_scrollToContent('#about_sweden')">About Sweden</paper-tab>
      <paper-tab link onclick="_scrollToContent('#weather')">Weather in Sweden</paper-tab>
    </paper-tabs>
  </paper-card>

  <paper-card style="margin-bottom:6px;" class="submenu" id="submenuAbout">
    <paper-tabs class="center-block self-end" selectable="paper-tab" no-bar noink>
      <paper-tab link onclick="_scrollToContent('#about_us')">About us</a></paper-tab>
      <paper-tab link onclick="_scrollToContent('#contact')">Contact us</a></paper-tab>
      <paper-tab data-route="booking" link><a href$="{{baseUrl}}booking" class="link">Send an inquiry</a></paper-tab>
    </paper-tabs>
  </paper-card>
