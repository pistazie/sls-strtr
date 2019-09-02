package rocks.pistazie

import org.junit.jupiter.api.*

class RandomNumberGeneratorTest {

    val generator= RandomNumberGenerator()

    @Test
    fun `test it generates a positive number`() {
        Assertions.assertTrue(generator.generate() > 0)
    }

    @Test
    fun `test it generates a specific number`() {
        Assertions.assertTrue(generator.generate(6749,6749) == 6749)
    }

}