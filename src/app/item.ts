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

// item states
import {ACTIVE, INACTIVE, NONE} from './itemstates';

/**
 * A generic item (a fancy way of saying something concocted for demo purposes)
 */
export class Item
{
  protected _name: string  = "Item";   // item name
  protected _id: number    = 1;        // item id
  protected _state: string = NONE;     // item state

  constructor(itemName?: string, itemid?: number, itemState?: string)
  {
    this.name  = itemName;
    this._id   = itemid;
    this.state = itemState;
  }

  public get name(): string
  {
    return this._name;
  }

  public get id(): number
  {
    return this._id;
  }

  public get state(): string
  {
    return this._state;
  }

  public set state(value: string)
  {
    if (value && (value == ACTIVE || value == INACTIVE))
      this._state = value;
  }

  public set id(value: number)
  {
    if (!isNaN(value) && isFinite(value))
      this._id = value;
  }

  public set name(value: string)
  {
    if (value && value != "")
      this._name = value;
  }
}