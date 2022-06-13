import React, { FC, memo, useMemo } from "react";
import { ITextProps, Text } from "native-base";

export interface BodyTypographyProps extends ITextProps {
  children: string | JSX.Element;
  isSecondaryText?: boolean;
}

/**
 *
 *```tsx
 *   import {BodyTypography} from '../../components/typography';
 *
 *   <BodyTypography>BodyTypography</BodyTypography>
 *   <BodyTypography isSecondaryText>
 *     {test}
 *   </BodyTypography>
 * ```
 */
export const BodyTypography: FC<BodyTypographyProps> = ({
  children,
  isSecondaryText = false,
  ...props
}) => {
    const textColor = useMemo(() => {
        if (!isSecondaryText) {
            return null;
        }
      return {
        fontSize : 'sm',
        _light: {
            color: 'gray.700',
        },
        _dark: {
            color: 'gray.400',
        },
      };
    }, [isSecondaryText]);

  return (
    <Text fontSize={'md'}
    {...textColor}
     {...props}>
      {children}
    </Text>
  );
};

export default memo(BodyTypography);
