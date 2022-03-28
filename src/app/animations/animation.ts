import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fadeOut = trigger('fadeOut', [
  transition(':leave',
    animate(400, style({opacity: 0}))
  )
])
export let fadeEnter = trigger('fadeEnter', [
transition(':enter', [
  style({ opacity: 0 }),
  animate('1000ms', style({ opacity: 1 })),
]),
]);

export let fadeInDown = trigger('fadeInDown', [
transition(':enter', [
  style({
    opacity: 0,
    '-webkit-transform': 'translate3d(0, -30%, 0)',
    transform: 'translate3d(0, -30%, 0)',
  }),
  animate(
    '600ms',
    style({
      opacity: 1,
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    })
  ),
]),
]);

export let fade =  trigger('fade', [
state('fadeIn', style({
  'max-height': '2000px',
  opacity: 1,
  overflow: 'hidden'
})),
state('fadeOut', style({
  'max-height': '0px',
  opacity: 0,
  overflow: 'hidden'
})),
transition('fadeIn <=> fadeOut', [
  animate('0.6s')
])
])

