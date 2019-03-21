import { Component, OnInit, Input, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCheckboxComponent),
    multi: true
  }]
})
export class CustomCheckboxComponent implements OnInit {

  
  @Input() name: string;
  @Input() id: string;
  @ViewChild('radio') radio;
  @Input() value: string;
  onChange;
  onTouched;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }


  writeValue(obj: any): void {
    const radioEle = this.radio.nativeElement;
    this.renderer.setProperty(radioEle, 'value', obj);
    this.value = obj;

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const radioEle = this.radio.nativeElement;
    this.renderer.setProperty(radioEle, 'disabled', isDisabled);
  }

  change(event) {
    this.onChange(event.target.checked ? this.value: '');
    this.onTouched(event.target.checked ? this.value: '');
  }

}
