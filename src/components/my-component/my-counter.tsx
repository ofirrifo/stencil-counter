import { Component, Prop, h, State, Fragment } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {

  @Prop({reflect: true}) step: number = 1;

  @State() value: number = 0;

  increment() {
    this.value = this.value + this.step;
  }

  decrement() {
    this.value = this.value - this.step;
  }

  render() {
    return (
      <Fragment>
        <button type="button" onClick={() => this.increment()}>
          +
        </button>
        <span class="value">
					{this.value}
				</span>
        <button type="button" onClick={() => this.decrement()}>
          -
        </button>
      </Fragment>
    );
  }
}
