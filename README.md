# Angular2 Animation

This demo resulted from two questions that I hope to answer in the context of a single example.  The first question was how to choreograph two different animations on two separate DOM elements using only the the A2 animation DSL.  Specifically, the person wanted to fade-in a group of menu items and then only display another part of the UI when that animation finished.  The fade-in was to begin as soon as the application loaded.  That part, of course, can be taken directly from an example in the Angular 2 Animations documentation.  The DSL does not provide direct input for a 'finished' handler, but the specified choreography could be achieved using a second animation with keyframes.  For anything really custom, I would move directly to _Renderer.animate()_.

The second question was how to assign a 'click' or other handler to only one list element in a group based on a property such as 'id'.  The list items are generated in a _*ngFor_ loop.  My personal preference is to keep templates and components clean, and thus potentially more reusable.  If something highly specific must be done, then I attempt to accomplish that task with a custom Directive.  That is the approach illustrated in this demo.

In addition, I wanted an excuse to demonstrate a couple other platform features such as how to define a Component template in an external string.  This preserves separation of Component code and template while avoiding overhead associated with fetching an external html file.  

The demo also illustrates usage of an injected _Renderer_ instance ... and, it boots the app using _NgModule_.

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular 2: RC5

Angular CLI: 1.0 Beta 10

## Installation

Installation involves all the usual suspects

  - npm, typings, and Angular CLI installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the demo

After installation, _ng-build_ and _ng-serve_ are your friends.  Build production or dev. as you see fit.  localhost:4200 to run the demo, at which point you should see some completely useless and gratuitous animation over a two-second interval.

For purposes of illustration, a click handler has been assigned only to a list item with an 'id' of 1.  Roll over each of the list items and then click on 'Item 1'.  Output is to the console.

View _li-selector.directive.ts_ to see how the custom list-selector Directive works.  Notice that this keeps the template cleaner and offloads application-specific work from the main Component to a custom Directive. 

The demo has been tested in late-model Chrome on a Mac. 


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>
