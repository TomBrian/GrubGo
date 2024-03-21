import styled from 'styled-components/native';
/**
 * Namespace for Typography
 * It holds all the typography related styles using <see cref="https://styled-components.com/docs/basics#react-native">
 * The typescale is based on the
 * @link https://type-scale.com/ third major scale
 * @link https://www.figma.com/file/R7Jr1IOyh6fJxNtaHjyI2b/GrubGo---Food-Delivery?type=design&node-id=3%3A34&mode=dev&t=Zwzt8CioRiWNUN4u-1
 * @namespace Typography
 */
export namespace Typography {
  /**
   * H1 text (H1 - 29.03px bold)
   * @memberof Typography
   */
  export const H1 = styled.Text`
    font-family: 'Inter-ExtraBold';
    font-size: 29px;
    color: #000;
  `;
  /**
   * H2 text (H2 - 24.19px bold)
   * @memberof Typography
   */
  export const H2 = styled.Text`
    font-family: 'Inter-Bold';
    font-size: 24px;
    color: #000;
  `;
  /**
   * H3 text (H3 - 19.33px bold)
   * @memberof Typography
   */
  export const H3 = styled.Text`
    font-family: 'Inter-Bold';
    font-size: 19px;
    color: #000;
  `;
  /**
   * H4 text (H4 - 16.11px bold)
   * @memberof Typography
   */
  export const H4 = styled.Text`
    font-family: 'Inter-Bold';
    font-size: 16px;
    color: #000;
  `;
  /**
   * base (paragraph) text
   */
  export const P = styled.Text`
    font-family: 'Inter_Regular';
    font-size: 14px;
    color: #000;
  `;
}
