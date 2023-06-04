# How do measurements work in the application style?

## Font size 62.5%

The application measures were thought to facilitate the use of design tokens, and help the developer to have greater productivity, avoiding wasting time with calculations.

By default, most browsers set the font size to `16px` in your html.

To facilitate the use of the rem measure, we set the font size of the html to `62.5%` of `16px`(`62.5% * 16px = 10px`), obtaining the value of `10px`.

## Let's understand this configuration

The default font size setting in html was `16px`, in measure `rem` is equivalent to `1rem`.

But how is the value in `rem` for measures other than `16px`?

To find a measure in `rem` we have to divide the value we would like to use, by the value defined in the html, which by default is `16px`, as in the examples below:

- `10px(10 / 16): = 0.625rem`
- `12px(12 / 16): = 0.75rem`
- `14px(14 / 16): = 0.875rem`
- `16px(16 / 16): = 1rem`

By setting the font size of the html to 62.5%, equivalent to 10px, we can assimilate the `rem` measure with the value in `px` without thinking too much, as in the examples below:

- `10px = 1rem`
- `12px = 1.2rem`
- `14px = 1.4rem`
- `16px = 1.6rem`

### Simpler isn't it?

## Measurement standard used in application tokens

The size of the application's measurements start at `4px` and follow a simple multiplication crescent

Font size:

- `1(4 * 1): 0.4rem`
- `2(4 * 2): 0.8rem`
- `3(4 * 3): 1.2rem`
- `4(4 * 3): 1.6rem`

Other sizes:

- `1(4 * 1): 4px`
- `2(4 * 2): 8px`
- `3(4 * 3): 12px`
- `4(4 * 3): 16px`
