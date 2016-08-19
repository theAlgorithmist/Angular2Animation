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

/**
 * A Directive to aid in list element selection and processing for the animation demo
 */

 // platform imports
 import { Directive
        , AfterViewInit
        , ElementRef
        , Output
        , EventEmitter
        , Renderer 
        } from '@angular/core';

 @Directive({
  selector: 'li'
 })

 export class ListSelectorDirective implements AfterViewInit
 {
   @Output() onListClicked = new EventEmitter<any>();

   constructor(private _elRef: ElementRef, private _renderer: Renderer)
   {
   }

   // angular2 life cycle event
   public ngAfterViewInit()
   {
     // @Attribute won't work as constructor input since because of the binding, attribute value won't be correct until here
     let list: any  = this._elRef.nativeElement;
     let id: number = <number> list.getAttribute('id');

     if (id == 1)
     {
       // a couple ways to do it ...
       // list.addEventListener( 'click', this.__onClicked );

       this._renderer.listen(list, 'click', event => this.__onClicked(event) );

       // use the pointer cursor for this one
       this._renderer.setElementStyle(list, 'cursor', 'pointer');
     }
   }

   // local click handler
   private __onClicked(event: Event): void 
   {
     // do any item-related processing of the click here, then emit the event

     this.onListClicked.emit();
   }
 }