/**
 * Generated with GenerateScssRadientAnimation
 */

@mixin {{$animationName}}($colorBase) {
  @for ($i = 0; $i <= 100; $i++)
    {{$i}}% {
      background-image: linear-gradient(
        to bottom right,
        $colorBase {{$i * (140/100) - 20}}%,
        lighten($colorBase, -5%) {{$i * (140/100)}}%,
        $colorBase {{$i * (140/100) + 20}}%
      );
    }
  @endfor
}
