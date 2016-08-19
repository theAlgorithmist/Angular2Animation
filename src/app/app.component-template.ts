export const appTemplate: string = `
<div class="container-fluid rounded">
  <div class="row">
    <img class="img-responsive logo-img" src="eyes.png">
    <div>
      <span class="pull-left">The Algorithmist</span>
      <span class="pull-right">Animation Demo</span>
    </div>
  </div>

  <div class="row">
    <h1><strong>WARNING!</strong> USELESS, GRATUITOUS ANIMATION BELOW.</h1>
    <h1>And now, you can't blame Flash!</h1>
    <div [@keyframeIn]="'in'">
      <p class="pull-right"><button class="btn-small btn-success" (click)="__onButton1Clicked()">Button 1</button>&nbsp;<button class="btn-small btn-info" (click)="__onButton2Clicked()">Button 2</button></p>
    </div>
  </div>

  <div class="row">
    <ul>
      <li class='noselect'*ngFor="let item of _items" id="{{item.id}}" [@animInOut]="'in'" (onListClicked)="__processListClick();">{{item.name}}</li>
    </ul>
  </div>
</div>`