import { Directive, ElementRef, Input, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
declare var $: any;

@Directive({
  selector: '[appSincroniza]'
})
export class DirectivasDirective {

  @Input() ngModel: string;
  @Output() ngSalida: string;
  constructor( private el: ElementRef, private control: NgControl ) {
    $(el.nativeElement).bootstrapSwitch({
      onSwitchChange: (e, state) => {
        control.control.setValue( state);
      }
    });

  // const element = $(el.nativeElement);
/*
   element.on('keyup paste focus blur change onclick',
    function() {
      if (element.is(':checked')) {
        alert('CCCCheckeddddddd');
        // that.pageselected = true;
    } else {
        alert('UNCheckeddddddd');
        // that.pageselected = false;
    }
    });


 //  let element1 = element.element[0];
 /*
   element.on('keyup paste focus blur change click',
   () => {
    if (element.is(':checked')) {
      alert('CCCCheckeddddddd');
      // that.pageselected = true;
  } else {
      alert('UNCheckeddddddd');
      // that.pageselected = false;
  }
    // control.control.setValue( element.val());
   });
/*
    element.on('keyup paste focus blur change click',
    function() {
      control.control.setValue( element.val());
    });
*/
  }

}
