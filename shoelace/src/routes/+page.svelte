

https://shoelace.style/

<sl-alert variant="primary" open closable class="alert-closable">
    <sl-icon slot="icon" name="info-circle"></sl-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </sl-alert>


<sl-tab-group>
    <sl-tab slot="nav" panel="general">General</sl-tab>
    <sl-tab slot="nav" panel="custom">Custom</sl-tab>
    <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
    <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>
  
    <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
    <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
    <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
    <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
  </sl-tab-group>
  
  <sl-dialog no-header label="Dialog">
    Hello World!
    <button slot="footer" variant="primary">Close</button>
  </sl-dialog>
  
  <br />
  <button>Open Dialog</button>


  <sl-carousel pagination navigation mouse-dragging loop>
    <sl-carousel-item>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="https://picsum.photos/600/600?random={1}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="https://picsum.photos/600/600?random={2}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="https://picsum.photos/600/600?random={3}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="https://picsum.photos/600/600?random={4}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="https://picsum.photos/600/600?random={5}"
      />
    </sl-carousel-item>
  </sl-carousel>
  


  <style>
    .alert {
        background-color: yellowgreen;
    }

  </style>
