package rocks.pistazie

import java.lang.Math

class RandomNumberGenerator() {

  fun generate(min: Int = 0, max: Int = Int.MAX_VALUE): Int{
    return (Math.random() * (max-min)).toInt() + min
  }

}