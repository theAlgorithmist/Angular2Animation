/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// platform imports
import { 
    Component
  , OnInit
  , AfterViewInit
  , ViewChildren
  , QueryList
  , trigger
  , state
  , style
  , animate
  , transition
  , keyframes
} from '@angular/core';

// Directive
import { ListSelectorDirective } from './li-selector.directive';

// Item-related imports
import { Item } from "./item";

// Import the string that forms the template for this component
import { appTemplate } from './app.component-template';

// various states that you can use for experimentation
import {  
    ACTIVE
  , INACTIVE
  , IN
  , OUT 
} from './itemstates';

@Component({
  moduleId: module.id,

  selector: 'app-root',

  directives: [ListSelectorDirective],

  // this is the way the CLI scaffolds the project
  // templateUrl: 'app.component.html',
  
  // or, you can do it like this ...
  template: appTemplate,

  styleUrls: ['app.component.css'],

  animations: [
    trigger('animInOut', [
      state('in', style({opacity: 1}))
    
    , transition('void => *', [
        style({opacity: 0}),
        animate('2000ms ease-in')
      ]),
      transition('* => void', [
        animate('2000ms ease-in', style({opacity: 1}))
      ])
    ]),

    trigger('keyframeIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [ animate( '2000ms', keyframes([style({opacity: 0, offset: 0}), style({opacity: 0, offset: 0.99}), style({opacity: 1, offset: 1.0})]) )
      ])
    ])
  ]
})

/**
 * Root component for the animation demo
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class AppComponent implements OnInit, AfterViewInit
{
  private _items: Array<Item> = new Array<Item>();   // item collection

  // In case you want to view/manipulate the LI items After View Init
  // @ViewChildren(ListSelectorDirective) _listElements: QueryList<ListSelectorDirective>

  constructor()
  {
    this._items.push( new Item('Item 1', 1, INACTIVE) );
    this._items.push( new Item('Item 2', 2, INACTIVE) );
    this._items.push( new Item('Item 3', 3, INACTIVE) );
    this._items.push( new Item('Item 4', 4, INACTIVE) );
  }

  // Angular lifecycle methods - placeholders for your experimentation
  public ngOnInit()
  {
  }

  public ngAfterViewInit()
  {
  }
  
  // handle the list click event
  private __processListClick(): void
  {
    console.log( "clicked on list item" );
  }

  // button-click handlers
  private __onButton1Clicked()
  {
    console.log( "button 1 clicked" );
  }

  private __onButton2Clicked()
  {
    console.log( "button 2 clicked" );
  }
}

