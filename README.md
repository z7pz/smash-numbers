
# Installation

`npm i smash-numbers --save`
 

 Then...
 ```
import { convert, comma } from 'smash-numbers'

convert(1000) // 1K

comma(10000) // 10,000
```
## Options

* *convert* - _CAPITAL | SMALL_ (Defaults to CAPITAL) ` convert(1000, 'SMALL') // 1k `
* *comma* - _(any thing you want)_ (Defaults to ,) ` comma(10000, '.') // 10.000 ` 
